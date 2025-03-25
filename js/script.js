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
                    centerPadding: '40px',
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