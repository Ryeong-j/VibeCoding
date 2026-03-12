document.addEventListener('DOMContentLoaded', () => {
    const lottoDisplay = document.getElementById('lotto-display');
    const generateBtn = document.getElementById('generate-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const htmlTag = document.documentElement;

    // --- Theme Logic ---
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlTag.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlTag.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlTag.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('.icon');
        icon.textContent = theme === 'light' ? '☀️' : '🌙';
    }

    // --- Lotto Logic ---
    generateBtn.addEventListener('click', () => {
        const numbers = generateLottoNumbers();
        displayNumbers(numbers);
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const num = Math.floor(Math.random() * 45) + 1;
            numbers.add(num);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayNumbers(numbers) {
        lottoDisplay.innerHTML = '';
        numbers.forEach((num, index) => {
            const ball = document.createElement('div');
            ball.className = 'ball';
            ball.textContent = num;
            ball.style.backgroundColor = getBallColor(num);
            ball.style.animationDelay = `${index * 0.1}s`;
            lottoDisplay.appendChild(ball);
        });
    }

    function getBallColor(num) {
        if (num <= 10) return 'var(--ball-y)';
        if (num <= 20) return 'var(--ball-b)';
        if (num <= 30) return 'var(--ball-r)';
        if (num <= 40) return 'var(--ball-g)';
        return 'var(--ball-v)';
    }
});
