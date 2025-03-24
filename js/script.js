document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;
    const totalItems = items.length;
    const itemsToShow = 3; // 一次顯示3張圖片
    
    // 設置初始位置
    setupCarousel();
    updateCarousel();
    
    // 調整carousel樣式
    function setupCarousel() {
        // 確保所有圖片的寬度正確
        items.forEach(item => {
            item.style.flex = `0 0 calc(100% / ${itemsToShow})`;
        });
        
        // 複製所有項目，在前面和後面各添加一組完整的圖片
        const itemsArray = Array.from(items);
        
        // 在開頭添加所有圖片的復制品（倒序添加）
        for (let i = totalItems - 1; i >= 0; i--) {
            const clone = itemsArray[i].cloneNode(true);
            carousel.insertBefore(clone, carousel.firstChild);
        }
        
        // 在結尾添加所有圖片的復制品
        for (let i = 0; i < totalItems; i++) {
            const clone = itemsArray[i].cloneNode(true);
            carousel.appendChild(clone);
        }
        
        // 設置初始位置到第一組的第一張圖片
        currentIndex = totalItems;
        
        // 立即更新位置而不使用動畫
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
        
        // 重新啟用過渡效果
        setTimeout(() => {
            carousel.style.transition = 'transform 0.3s ease';
        }, 10);
    }
    
    // 為按鈕添加事件監聽器
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < totalItems * 2) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // 為指示器添加事件監聽器
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentIndex = totalItems + index;
            updateCarousel();
        });
    });
    
    // 更新輪播顯示
    function updateCarousel() {
        const allItems = document.querySelectorAll('.carousel-item');
        
        // 重置所有項目狀態
        allItems.forEach(item => {
            item.classList.remove('active');
            item.style.opacity = '0.5';
        });
        
        // 計算需要滾動的距離
        const scrollAmount = (currentIndex * (100 / itemsToShow));
        carousel.style.transform = `translateX(-${scrollAmount}%)`;
        
        // 設置當前項為活動狀態
        const centerIndex = Math.floor(itemsToShow / 2);
        if (allItems[currentIndex + centerIndex]) {
            allItems[currentIndex + centerIndex].classList.add('active');
            allItems[currentIndex + centerIndex].style.opacity = '1';
        }
        
        // 更新指示器 - 計算當前真實索引
        const realIndex = (currentIndex - totalItems) >= 0 ? 
                          (currentIndex - totalItems) % totalItems : 
                          (totalItems + (currentIndex % totalItems)) % totalItems;
        
        indicators.forEach((indicator, index) => {
            if (index === realIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
        
        // 檢查是否需要重置位置
        checkBoundary();
    }
    
    // 處理輪播邊界情況
    function checkBoundary() {
        // 在轉換結束後監聽
        carousel.addEventListener('transitionend', resetPosition, { once: true });
    }
    
    function resetPosition() {
        // 如果滾動到了複製部分的最後一張
        if (currentIndex >= totalItems * 2) {
            carousel.style.transition = 'none';
            currentIndex = totalItems;  // 回到中間部分的第一張
            carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
            setTimeout(() => {
                carousel.style.transition = 'transform 0.3s ease';
            }, 10);
        }
        
        // 如果滾動到了複製部分的第一張之前
        if (currentIndex < totalItems) {
            if (currentIndex <= 0) {
                carousel.style.transition = 'none';
                currentIndex = totalItems;  // 回到中間部分的最後一張
                carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
                setTimeout(() => {
                    carousel.style.transition = 'transform 0.3s ease';
                }, 10);
            }
        }
    }
    
    // 自動輪播
    setInterval(function() {
        if (currentIndex < totalItems * 2) {
            currentIndex++;
            updateCarousel();
        }
    }, 5000);
});