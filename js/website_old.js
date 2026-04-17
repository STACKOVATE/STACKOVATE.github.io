const LAUNCH_DATE = new Date("2024-06-15");  

function updateSiteAge() {  
    const now = new Date();  
    const diffDays = Math.floor((now - LAUNCH_DATE) / (864e5));  
    const years = Math.floor(diffDays / 365);  
    const months = Math.floor((diffDays % 365) / 30);  

    document.getElementById("age-days")?.textContent = diffDays;  
    document.getElementById("age-years")?.textContent = years;  
    document.getElementById("age-months")?.textContent = months;  
}

function init() {
  // 每天更新网站年龄
    setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) updateSiteAge();
    }, 60000);

    // 优化锚点过渡
    optimizeAnchorScrolling();

    // 添加页面跳转过渡动画
    addPageTransitionAnimations();
}

function addPageTransitionAnimations() {
    // 为所有跨页面链接添加过渡动画
    document.querySelectorAll('a[href*="product.html"], a[href*="about.html"], a[href*="team.html"], a[href*="connect.html"], a[href*="roadmap.html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果是外部链接或hash链接，跳过
            if (this.hostname !== window.location.hostname || this.getAttribute('href').startsWith('#')) {
                return;
            }

            e.preventDefault();
            const href = this.getAttribute('href');

            // 添加淡出动画
            document.body.style.transition = 'opacity 0.3s ease-out';
            document.body.style.opacity = '0';

            // 延迟跳转，让动画完成
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });

    // 页面加载时的淡入动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';

    // 使用requestAnimationFrame确保DOM加载完成
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
}

function optimizeAnchorScrolling() {
    // 处理页面加载时的hash导航
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            // 延迟执行以确保页面完全加载
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }

    // 为所有锚点链接添加点击处理
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // 更新URL hash但不触发默认滚动
                history.pushState(null, null, targetId);
            }
        });
    });
}  
document.addEventListener('DOMContentLoaded', init);
