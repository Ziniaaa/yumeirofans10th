// 設定背景
/* JavaScript動態計算背景高度 */
// document.addEventListener('DOMContentLoaded', () => {
//     function updateBackgroundLayer() {
//         const section0 = document.getElementById('navigation');
//         const section1 = document.getElementById('intro');
//         const section2 = document.getElementById('date');
//         const section3 = document.getElementById('event');
//         const section4 = document.getElementById('cast');
//         const section5 = document.getElementById('goods');
//         const section6 = document.getElementById('secret');
//         const section7 = document.getElementById('join');
//         const section8 = document.getElementById('links');
//         const section9 = document.getElementById('contact');


//         const backgroundSection0To5 = document.querySelector('.background-first');
//         const backgroundSection7To8 = document.querySelector('.background-last');

//         // 計算包含margin的高度
//         function getFullHeight(element) {
//             const styles = window.getComputedStyle(element);
//             const marginTop = parseFloat(styles.marginTop);
//             const marginBottom = parseFloat(styles.marginBottom);
//             return element.offsetHeight + marginTop + marginBottom;
//         }
//         // 判斷是否為手機版（例如螢幕寬度小於 768px）
//         const isMobile = window.innerWidth < 641

//         // 計算第一段section0到section5的總高度（包含margin）
//         backgroundSection0To5.style.height = isMobile
//             ? `${getFullHeight(section1) + getFullHeight(section2) + getFullHeight(section3) + getFullHeight(section4) + getFullHeight(section5)}px`
//             : `${getFullHeight(section0) + getFullHeight(section1) + getFullHeight(section2) + getFullHeight(section3) + getFullHeight(section4) + getFullHeight(section5)}px`;

//         // 設置第二段背景的位置和高度（包含margin）
//         backgroundSection7To8.style.top = isMobile
//             ? `${getFullHeight(section1) + getFullHeight(section2) + getFullHeight(section3) + getFullHeight(section4) + getFullHeight(section5) + getFullHeight(section6)}px`
//             : `${getFullHeight(section1) + getFullHeight(section2) + getFullHeight(section3) + getFullHeight(section4) + getFullHeight(section5) + getFullHeight(section6) + getFullHeight(section0)}px`;

//         backgroundSection7To8.style.height =
//             `${getFullHeight(section7) + getFullHeight(section8) + getFullHeight(section9) + 20}px`;
//     }

//     // 初始化和窗口大小變化時更新
//     updateBackgroundLayer();
//     window.addEventListener('resize', updateBackgroundLayer);
// });
document.addEventListener('DOMContentLoaded', () => {
    function updateBackgroundLayer() {
        const section0 = document.getElementById('navigation');
        const section1 = document.getElementById('intro');
        const section2 = document.getElementById('date');
        const section3 = document.getElementById('event');
        const section4 = document.getElementById('cast');
        const section5 = document.getElementById('goods');
        const section6 = document.getElementById('secret');
        const section7 = document.getElementById('join');
        const section8 = document.getElementById('links');
        const section9 = document.getElementById('contact');

        const backgroundSection0To5 = document.querySelector('.background-first');
        const backgroundSection7To8 = document.querySelector('.background-last');

        function getFullHeight(element) {
            const styles = window.getComputedStyle(element);
            const marginTop = parseFloat(styles.marginTop);
            const marginBottom = parseFloat(styles.marginBottom);
            return element.offsetHeight + marginTop + marginBottom;
        }

        const isMobile = window.innerWidth < 641;

        backgroundSection0To5.style.height = isMobile
            ? `${getFullHeight(section1) + getFullHeight(section2) + getFullHeight(section3) + getFullHeight(section4) + getFullHeight(section5)}px`
            : `${getFullHeight(section0) + getFullHeight(section1) + getFullHeight(section2) + getFullHeight(section3) + getFullHeight(section4) + getFullHeight(section5)}px`;

        backgroundSection7To8.style.top = isMobile
            ? `${getFullHeight(section1) + getFullHeight(section2) + getFullHeight(section3) + getFullHeight(section4) + getFullHeight(section5) + getFullHeight(section6)}px`
            : `${getFullHeight(section0) + getFullHeight(section1) + getFullHeight(section2) + getFullHeight(section3) + getFullHeight(section4) + getFullHeight(section5) + getFullHeight(section6)}px`;

        backgroundSection7To8.style.height =
            `${getFullHeight(section7) + getFullHeight(section8) + getFullHeight(section9) + 20}px`;
    }

    // 1️⃣ 等整個頁面載入完成再執行第一次
    window.addEventListener('load', updateBackgroundLayer);

    // 2️⃣ 視窗大小改變時更新
    window.addEventListener('resize', updateBackgroundLayer);
});


// slick carousel
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
        focusOnSelect: true, // 讓點擊的圖片自動置中

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
                    arrows: false,
                    centerMode: true,
                    centerPadding: '80px',
                    slidesToShow: 1
                }
            }
        ]
    });
    //intro照片
    $('.photoSlick').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        fade: true,
        cssEase: 'linear'
    });

    // 點擊 .more-hint 開啟對應 modal
    $('.carousel').on('click', '.carousel-item', function (e) {
        e.stopPropagation(); // 防止事件冒泡
        if ($(this).hasClass('slick-center')) {
            const modalId = $(this).closest('.carousel-item').data('modal');
            $('#' + modalId).fadeIn();
        } else {
            // 如果不是中間，就不做事或給個提示也行
            // console.log('這不是正中間的物件，不能點喔～');
        }
    });

    // 關閉 modal
    $('.cast-modal').click(function () {
        $(this).closest('.cast-modal').fadeOut();
    });


    $('.news_carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
    }
    );
    $('.news_carousel_M').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.latest_carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

AOS.init({
    duration: 1000, // 動畫持續時間（1 秒）
    once: true // 只執行一次動畫
});


// YT影片modal
document.addEventListener("DOMContentLoaded", function () {

    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");
    const modalOverlay = document.getElementById("modalOverlay");
    const openModalBtn2 = document.getElementById("openModal2");


    // 打開 Modal
    openModalBtn.addEventListener("click", function () {
        console.log("開啟 Modal");
        modalOverlay.classList.add("active");
    });

    // 打開 手機Modal
    openModalBtn2.addEventListener("click", function () {
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



// nav選單
$(function () {

    // 漢堡按鈕
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.nav-bar').toggleClass('show');
    });
    // 點擊選單連結自動關閉
    $('.nav-bar a').click(function () {
        $('.hamburger').removeClass('is-active');
        $('.nav-bar').removeClass('show');
    });
    $(document).click(function (e) {
        // 如果點擊的不是 .hamburger 或 .nav-bar（也不是它們的子元素）
        if (
            !$(e.target).closest('.nav-bar').length &&
            !$(e.target).closest('.hamburger').length
        ) {
            $('.hamburger').removeClass('is-active');
            $('.nav-bar').removeClass('show');
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navigation");
    const introSection = document.getElementById("banner");
    const navbarBlock = document.getElementById("nav-bar");


    const observer = new IntersectionObserver(
        (entries) => {
            if (!entries[0].isIntersecting) {
                navbar.classList.add("show"); // 當 banner 離開視窗頂端時顯示
            } else {
                navbar.classList.remove("show"); // 當 banner 還在視窗內時隱藏
                navbarBlock.classList.remove("show"); // 當 banner 還在視窗內時隱藏
            }
        },
        { threshold: 0 }
    );

    observer.observe(introSection);
});

// 吊燈動畫
const element = document.querySelector(".chandelier");

element.addEventListener("click", () => {
    element.style.animation = "none"; // 移除動畫
    void element.offsetWidth; // 觸發重繪（強制瀏覽器刷新）
    element.style.animation = "goback 3s, drop 5s ease-out forwards 3s, swing 5s infinite ease-out 8s"; // 重新套用動畫
});


// 至頂按鈕
$(document).ready(function () {
    $('#gotop').click(function () {
        //捲動到座標0位置
        $('html,body').animate({ scrollTop: 0 }, 800)
    });
    

    // 顯示/隱藏至頂按鈕
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('#gotop').stop().fadeIn();
            $('#alert').stop().fadeIn();

            $('#gotop').css('display', 'flex');
            $('#alert').css('display', 'flex');

        } else {
            $('#gotop').fadeOut();
            $('#alert').fadeOut();

        }
    });
});

// 隱藏底部火焰影片
document.addEventListener('DOMContentLoaded', () => {
    const videoBg = document.getElementById('video-bg');
    const secretSection = document.getElementById('secret');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 當 secret section 進入視窗時顯示影片
                videoBg.style.display = 'flex';
            } else {
                // 當 secret section 離開視窗時隱藏影片
                videoBg.style.display = 'none';
            }
        });
    }, {
        threshold: 0, // 只要section有一部分進入視窗就觸發
    });

    // 開始觀察 secret section
    observer.observe(secretSection);
});

// loading動畫
window.addEventListener("load", function () {
    let loading = document.getElementById("loading");
    const curtainR = document.getElementById("curtain_R");
    const curtainL = document.getElementById("curtain_L");
    const chandelier = document.getElementById("chandelier");


    loading.classList.add("fade-out");
    setTimeout(() => {
        loading.style.display = "none";
    }, 500);
    curtainR.classList.add("start-animation"); // 開始動畫
    curtainL.classList.add("start-animation"); // 開始動畫
    chandelier.classList.add("start-animation"); // 開始動畫
});

// 倒數計時
// 設定目標時間（2025年8月31日 23:59:59）
// const targetDate = new Date("2025-08-31T23:59:59").getTime();

// function updateCountdown() {
//     const now = new Date().getTime();  // 取得當前時間
//     const timeLeft = targetDate - now; // 計算剩餘時間

//     if (timeLeft <= 0) {
//         document.getElementById("countdown").innerHTML = "倒數結束！";
//         clearInterval(countdownTimer);
//         return;
//     }

//     // 計算天、時、分、秒
//     const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//     // 更新倒數計時的內容
//     document.getElementById("countdown").innerHTML =
//         `${days} 天 ${hours} 時 ${minutes} 分 ${seconds} 秒`;
// }

// // 每秒更新倒數計時
// const countdownTimer = setInterval(updateCountdown, 1000);

// // 立即執行一次，避免等 1 秒才顯示
// updateCountdown();

// $(function () {
//     $(".alert_wrap").click(function () {
//         if ($(this).css("left") === "-350px") {
//             $(this).css("left", "0px"); // 彈出地鼠
//             $(".countdown-alert").css("opacity", "1");
//             $(".alert_wrap").css("animation-play-state", "paused");
//             $("#gotop").css("display", "none");

//         } else {
//             $(this).css("left", "-350px"); // 躲回去
//             $(".countdown-alert").css("opacity", "0");
//             $(".alert_wrap").css("animation-play-state", "running");
//             $("#gotop").css("display", "flex");

//         }
//     });
// });

// 修改iframe文字
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lyt-visually-hidden").forEach(span => {
        span.textContent = "▸"; // 你想要的文字
    });
});

document.getElementById("closeModal").addEventListener("click", function () {
    const iframe = document.querySelector("lite-youtube iframe");
    if (iframe) {
        iframe.src = "";  // 移除 src，強制停止影片
    }
});

// 服裝參考
// $(function () {
//     $("#cloth-sample").click(function () {
//         $('.cloth').slideToggle(300); // 動畫開關，無需判斷
//     });
// });
$(function () {
    // 點擊開關
    $("#cloth-sample").click(function () {
        $('.cloth').slideToggle(300);
    });

    // 監聽滾動事件
    $(window).on('scroll', function () {
        const $cloth = $('.cloth');
        if ($cloth.is(':visible') && !isInViewport($cloth[0],200)) {
            $cloth.slideUp(300); // 自動收合
        }
    });

    // 判斷元素是否在畫面內（加入緩衝距離 buffer）
    function isInViewport(el, buffer = 0) {
        const rect = el.getBoundingClientRect();
        return (
            rect.bottom > 0 + buffer &&
            rect.top < (window.innerHeight || document.documentElement.clientHeight) - buffer
        );
    }
});
