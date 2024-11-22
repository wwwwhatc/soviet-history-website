// 平滑滚动功能，支持页面内滚动和外部跳转
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // 如果目标是当前页面的一个元素，阻止默认跳转行为并进行平滑滚动
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // 如果 target 为 null，则是外部页面链接，不阻止默认行为
    });
});

// 视差效果
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    document.querySelector('header').style.backgroundPositionY = `${scrolled * 0.5}px`;
});
