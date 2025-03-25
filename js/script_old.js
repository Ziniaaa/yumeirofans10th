document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const items = Array.from(document.querySelectorAll('.carousel-item'));
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');

    let currentIndex = 0;
    const totalItems = items.length;
    const itemsToShow = 3; // 一次顯示 3 張圖片
    const centerIndex = Math.floor(itemsToShow / 2); // 計算中間的索引

    // 設置初始輪播
    setupCarousel();
    updateCarousel();


    function setupCarousel() {
        // 確保所有圖片的寬度正確
        items.forEach(item => {
            item.style.flex = `0 0 calc(100% / ${itemsToShow})`;
        });

        // 複製所有項目，在前面和後面各添加一組完整的圖片
        const itemsArray = [...items];

        for (let i = totalItems - 1; i >= 0; i--) {
            const clone = itemsArray[i].cloneNode(true);
            carousel.insertBefore(clone, carousel.firstChild);
        }

        for (let i = 0; i < totalItems; i++) {
            const clone = itemsArray[i].cloneNode(true);
            carousel.appendChild(clone);
        }

        // 設置初始位置到中間的第一張圖片
        currentIndex = totalItems;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;

        // 重新啟用動畫效果
        setTimeout(() => {
            carousel.style.transition = 'transform 0.3s ease';
        }, 10);
    }

    // 按鈕點擊事件
    prevBtn.addEventListener('click', function () {
        currentIndex--;
        updateCarousel();
        console.log(currentIndex);
    });

    nextBtn.addEventListener('click', function () {
        currentIndex++;
        updateCarousel();
        console.log(currentIndex);
    });

    // 點擊指示器事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function () {
            currentIndex = totalItems + index; // 設置為對應的圖片索引
            updateCarousel();
        });
    });

    // 輪播主功能
    function updateCarousel() {
        const allItems = document.querySelectorAll('.carousel .carousel-item'); // 取得所有項目
        const scrollAmount = currentIndex * (100 / itemsToShow);
        carousel.style.transform = `translateX(-${scrollAmount}%)`;

        // 取得實際顯示的索引
        const realIndex = (currentIndex - totalItems + totalItems) % totalItems;


        // 重置所有圖片的 active 狀態
        allItems.forEach(item => {
            item.classList.remove('active');
            item.style.filter = "brightness(0.5)";
            item.style.zIndex = "1";
        });

        // 設置正中間的圖片為 active
        const activeItemIndex = currentIndex + centerIndex;
        if (allItems[activeItemIndex]) {
            allItems[activeItemIndex].classList.add('active');
            allItems[activeItemIndex].style.filter = "brightness(1)";
            allItems[activeItemIndex].style.zIndex = "10";
        }

        // 更新指示器
        updateIndicators(realIndex);

        // 檢查是否需要重置位置
        checkBoundary();
    }

    function updateIndicators(realIndex) {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === realIndex);
        });
    }

    function checkBoundary() {
        carousel.addEventListener('transitionend', resetPosition, { once: true });
    }

    function resetPosition() {
        if (currentIndex >= totalItems * 2) {
            carousel.style.transition = 'none';
            currentIndex = totalItems;
            carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
            setTimeout(() => {
                carousel.style.transition = 'transform 0.3s ease';
            }, 10);
        }

        if (currentIndex <= 0) {
            carousel.style.transition = 'none';
            currentIndex = totalItems;
            carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
            setTimeout(() => {
                carousel.style.transition = 'transform 0.3s ease';
            }, 10);
        }
    }

    // 自動輪播
    // setInterval(function () {
    //     currentIndex++;
    //     updateCarousel();
    // }, 5000);
});
