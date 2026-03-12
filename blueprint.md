# Vibe Lotto Blueprint

## Overview
Vibe Lotto is a modern, responsive web application for generating lotto numbers. It features a clean UI, dark mode support, and a partnership inquiry form.

## Current Features
- **Lotto Number Generation:** Generates 6 unique numbers (1-45) and displays them with color-coded balls.
- **Dark Mode:** Supports light and dark themes with persistent storage in `localStorage`.
- **Responsive Design:** Optimized for both mobile and desktop viewing.
- **Partnership Inquiry Form:** Allows users to send inquiries via Formspree.
- **Disqus Comments:** Integrated Disqus for user interaction at the bottom of the page.

## Detailed Outline
- **Design:** Modern UI with card-based layout, subtle shadows, and vibrant ball colors.
- **Interactivity:** Animated ball generation, theme switching (Light/Dark), and functional contact form.
- **Comments:** Disqus integration placed within a dedicated `.comments-section` for community engagement.

## Recent Changes: Disqus Integration
- **HTML Update:** Added `<div id="disqus_thread"></div>` and the Disqus embed script within `index.html`.
- **CSS Update:** Added styling for `.comments-section` to maintain consistency with the layout and ensure proper spacing.
- **Blueprint Update:** Created `blueprint.md` to document project state and changes.
