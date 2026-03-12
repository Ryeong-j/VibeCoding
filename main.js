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

    // --- Policy Modal Logic (Required for AdSense) ---
    const modal = document.getElementById('policy-modal');
    const policyText = document.getElementById('policy-text');

    window.showPolicy = (type) => {
        let content = '';
        if (type === 'privacy') {
            content = `
                <h2>개인정보처리방침</h2>
                <p>본 사이트는 사용자의 개인정보를 소중히 다룹니다.</p>
                <ul>
                    <li><strong>데이터 수집:</strong> 당사는 귀하의 개인 식별 정보를 직접 수집하지 않습니다.</li>
                    <li><strong>쿠키 및 광고:</strong> 구글 애드센스와 같은 타사 공급업체는 쿠키를 사용하여 사용자의 이전 방문을 기반으로 광고를 게재합니다.</li>
                    <li><strong>구글의 광고 쿠키:</strong> 구글과 파트너는 광고 쿠키를 사용하여 사용자가 귀하의 사이트 또는 인터넷의 다른 사이트를 방문한 내용을 바탕으로 사용자에게 광고를 게재할 수 있습니다.</li>
                    <li>사용자는 <a href="https://www.google.com/settings/ads">광고 설정</a>을 방문하여 맞춤형 광고를 선택 해제할 수 있습니다.</li>
                </ul>
            `;
        } else if (type === 'terms') {
            content = `
                <h2>이용약관</h2>
                <p>Vibe Lotto 서비스를 이용해 주셔서 감사합니다.</p>
                <ul>
                    <li>본 서비스는 오직 재미와 참고용으로 제공되며, 당첨을 보장하지 않습니다.</li>
                    <li>서비스 이용 중 발생하는 결과에 대해 당사는 어떠한 법적 책임도 지지 않습니다.</li>
                    <li>사용자는 본 서비스를 적법한 용도로만 사용해야 합니다.</li>
                </ul>
            `;
        }
        policyText.innerHTML = content;
        modal.style.display = 'block';
    };

    window.closePolicy = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            closePolicy();
        }
    };
});
