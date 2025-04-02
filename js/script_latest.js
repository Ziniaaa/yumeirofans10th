
// slick carousel


AOS.init({
    duration: 1000, // 動畫持續時間（1 秒）
    once: true // 只執行一次動畫
});

console.log(document.getElementById("openModal"));




// nav選單
$(function () {

    // 漢堡按鈕
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.nav-bar').toggleClass('show');
    });

});


// 至頂按鈕
$(document).ready(function () {
    $('#gotop').click(function () {
        //捲動到座標0位置
        $('html,body').animate({ scrollTop: 0 }, 800)
    });

    // 顯示/隱藏至頂按鈕
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#gotop').stop().fadeIn();
            $('#gotop').css('display', 'flex');
        } else {
            $('#gotop').fadeOut();
        }
    });
});


// 倒數計時
// 設定目標時間（2025年7月1日 23:59:59）
const targetDate = new Date("2025-07-01T23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();  // 取得當前時間
    const timeLeft = targetDate - now; // 計算剩餘時間

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "倒數結束！";
        clearInterval(countdownTimer);
        return;
    }

    // 計算天、時、分、秒
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // 更新倒數計時的內容
    document.getElementById("countdown").innerHTML =
        `${days} 天 ${hours} 時 ${minutes} 分 ${seconds} 秒`;
}

// 每秒更新倒數計時
const countdownTimer = setInterval(updateCountdown, 1000);

// 立即執行一次，避免等 1 秒才顯示
updateCountdown();

$(function () {
    $(".alert_wrap").click(function () {
        if ($(this).css("left") === "-350px") {
            $(this).css("left", "0px"); // 彈出地鼠
            $(".countdown-alert").css("opacity", "1");
            $(".alert_wrap").css("animation-play-state", "paused");
            $("#gotop").css("display", "none");

        } else {
            $(this).css("left", "-350px"); // 躲回去
            $(".countdown-alert").css("opacity", "0");
            $(".alert_wrap").css("animation-play-state", "running");
            $("#gotop").css("display", "flex");

        }
    });
});
