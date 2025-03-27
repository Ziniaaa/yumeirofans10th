// 設定背景
/* JavaScript動態計算高度（如果需要） */
document.addEventListener('DOMContentLoaded', () => {
    function updateBackgroundLayer() {
        const section0 = document.getElementById('navigation');
        const section1 = document.getElementById('intro');
        const section2 = document.getElementById('date');
        const section3 = document.getElementById('event');
        const section4 = document.getElementById('cast');
        const section5 = document.getElementById('goods');
        const section6 = document.getElementById('secret');
        const section7 = document.getElementById('links');
        const section8 = document.getElementById('contact');

        
        const backgroundSection1To5 = document.querySelector('.background-first');
        const backgroundSection7To8 = document.querySelector('.background-last');
        
        // 計算包含margin的高度
    function getFullHeight(element) {
        const styles = window.getComputedStyle(element);
        const marginTop = parseFloat(styles.marginTop);
        const marginBottom = parseFloat(styles.marginBottom);
        return element.offsetHeight + marginTop + marginBottom;
    }
    
    // 計算section1到section5的總高度（包含margin）
    backgroundSection1To5.style.height = 
        `${getFullHeight(section1) + getFullHeight(section2) + getFullHeight(section3)+ getFullHeight(section4)+ getFullHeight(section5)+getFullHeight(section0)}px`;
    
    // 設置第二段背景的位置和高度（包含margin）
    backgroundSection7To8.style.top = 
        `${getFullHeight(section1) + getFullHeight(section2) + getFullHeight(section3) + getFullHeight(section4)+ getFullHeight(section5)+ getFullHeight(section6)+getFullHeight(section0)}px`;
    backgroundSection7To8.style.height = 
        `${getFullHeight(section7) + getFullHeight(section8) }px`;
    }
    
    // 初始化和窗口大小變化時更新
    updateBackgroundLayer();
    window.addEventListener('resize', updateBackgroundLayer);
});


// cast carousel
$(document).ready(function () {
    $('.carousel').slick({

        dots: true, // 顯示導航點
        infinite: true,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 5,
        arrows: true,
        prevArrow: '<button class="slick-prev-custom"><img src="./images/castArrow_left.svg" ></button>',
        nextArrow: '<button class="slick-next-custom"><img src="./images/castArrow_right.svg" ></button>',

        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    // arrows: false,
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    // arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    // arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            }
        ]
    });

    $('.news_carousel').slick();
});

AOS.init({
    duration: 1000, // 動畫持續時間（1 秒）
    once: true // 只執行一次動畫
});

console.log(document.getElementById("openModal"));

// YT影片modal
document.addEventListener("DOMContentLoaded", function () {
    console.log("JS 加載成功！");

    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");
    const modalOverlay = document.getElementById("modalOverlay");

    if (!openModalBtn || !closeModalBtn || !modalOverlay) {
        console.error("找不到 Modal 相關元素，請檢查 HTML ID！");
        return;
    }

    // 打開 Modal
    openModalBtn.addEventListener("click", function () {
        console.log("開啟 Modal");
        modalOverlay.classList.add("active");
    });

    // 關閉 Modal（點擊關閉按鈕）
    closeModalBtn.addEventListener("click", function () {
        console.log("關閉 Modal");
        modalOverlay.classList.remove("active");
    });

    // 點擊背景區域關閉 Modal
    modalOverlay.addEventListener("click", function (event) {
        if (event.target === modalOverlay) {
            console.log("點擊背景，關閉 Modal");
            modalOverlay.classList.remove("active");
        }
    });
});

// YT影片modal_手機
document.addEventListener("DOMContentLoaded", function () {
    console.log("JS 加載成功！");

    const openModalBtn = document.getElementById("openModal2");
    const closeModalBtn = document.getElementById("closeModal");
    const modalOverlay = document.getElementById("modalOverlay");

    if (!openModalBtn || !closeModalBtn || !modalOverlay) {
        console.error("找不到 Modal 相關元素，請檢查 HTML ID！");
        return;
    }

    // 打開 Modal
    openModalBtn.addEventListener("click", function () {
        console.log("開啟 Modal");
        modalOverlay.classList.add("active");
    });

    // 關閉 Modal（點擊關閉按鈕）
    closeModalBtn.addEventListener("click", function () {
        console.log("關閉 Modal");
        modalOverlay.classList.remove("active");
    });

    // 點擊背景區域關閉 Modal
    modalOverlay.addEventListener("click", function (event) {
        if (event.target === modalOverlay) {
            console.log("點擊背景，關閉 Modal");
            modalOverlay.classList.remove("active");
        }
    });
});

