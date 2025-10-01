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
}  
document.addEventListener('DOMContentLoaded', init);
