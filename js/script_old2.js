document.addEventListener('DOMContentLoaded', function() {
    // 獲取必要的DOM元素
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    
    // 設置初始值
    let currentIndex = 0;
    const totalItems = items.length;
    let intervalId = null;
    const autoPlayInterval = 3000; // 自動輪播間隔，單位為毫秒
    
    // 初始化輪播樣式
    function initCarousel() {
        // 設置每個項目的寬度和位置
        items.forEach((item, index) => {
            item.style.position = 'absolute';
            item.style.width = '100%';
            item.style.left = `${index * 100}%`;
            item.style.transition = 'transform 0.5s ease, filter 0.5s ease';
            // 初始時，除了第一個項目外，所有項目都設置低亮度
            if(index !== currentIndex) {
                item.style.filter = 'brightness(0.5)';
            } else {
                item.style.filter = 'brightness(1)';
            }
        });
        
        // 顯示第一個項目
        updateCarousel();
    }
    
    // 更新輪播顯示
    function updateCarousel() {
        // 移動輪播
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // 更新指示器
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
        
        // 更新項目亮度
        items.forEach((item, index) => {
            if(index === currentIndex) {
                item.style.filter = 'brightness(1)';
            } else {
                item.style.filter = 'brightness(0.5)';
            }
        });
    }
    
    // 顯示下一個項目
    function showNextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }
    
    // 顯示上一個項目
    function showPrevItem() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }
    
    // 設置自動輪播
    function startAutoPlay() {
        stopAutoPlay(); // 先停止之前的自動輪播
        intervalId = setInterval(showNextItem, autoPlayInterval);
    }
    
    // 停止自動輪播
    function stopAutoPlay() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
    
    // 綁定事件監聽器
    nextBtn.addEventListener('click', () => {
        showNextItem();
        // 點擊後重置自動輪播
        startAutoPlay();
    });
    
    prevBtn.addEventListener('click', () => {
        showPrevItem();
        // 點擊後重置自動輪播
        startAutoPlay();
    });
    
    // 為指示器添加點擊事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
            // 點擊後重置自動輪播
            startAutoPlay();
        });
    });
    
    // 當鼠標懸停在輪播上時，暫停自動輪播
    carousel.addEventListener('mouseenter', stopAutoPlay);
    
    // 當鼠標離開輪播時，重新開始自動輪播
    carousel.addEventListener('mouseleave', startAutoPlay);
    
    // 初始化輪播並開始自動輪播
    initCarousel();
    startAutoPlay();
});