    // 자바스크립트
    //멤버들
    const SHOTARO = document.getElementById("SHOTARO");

    SHOTARO.addEventListener("mouseover", function(){
        SHOTARO.src="3_Member/SHOTARO2.png";
    });
    SHOTARO.addEventListener("mouseout", function(){
        SHOTARO.src="3_Member/SHOTARO.png";
    });

    const EUNSEOK = document.getElementById("EUNSEOK");

    EUNSEOK.addEventListener("mouseover", function(){
        EUNSEOK.src="3_Member/EUNSEOK2.png";
    });
    EUNSEOK.addEventListener("mouseout", function(){
        EUNSEOK.src="3_Member/EUNSEOK.png";
    });

    const SUNGCHAN = document.getElementById("SUNGCHAN");

    SUNGCHAN.addEventListener("mouseover", function(){
        SUNGCHAN.src="3_Member/SUNGCHAN2.png";
    });
    SUNGCHAN.addEventListener("mouseout", function(){
        SUNGCHAN.src="3_Member/SUNGCHAN.png";
    });

    const WONBIN = document.getElementById("WONBIN");

    WONBIN.addEventListener("mouseover", function(){
        WONBIN.src="3_Member/WONBIN2.png";
    });
    WONBIN.addEventListener("mouseout", function(){
        WONBIN.src="3_Member/WONBIN.png";
    });

    const SOHEE = document.getElementById("SOHEE");

    SOHEE.addEventListener("mouseover", function(){
        SOHEE.src="3_Member/SOHEE2.png";
    });
    SOHEE.addEventListener("mouseout", function(){
        SOHEE.src="3_Member/SOHEE.png";
    });

    const ANTON = document.getElementById("ANTON");

    ANTON.addEventListener("mouseover", function(){
        ANTON.src="3_Member/ANTON2.png";
    });
    ANTON.addEventListener("mouseout", function(){
        ANTON.src="3_Member/ANTON.png";
    });

//슬라이드 
    function getSlideMoveAmount(){
        if(window.matchMedia("(max-width: 480px)").matches){
            return "-100%";
        } else if(window.matchMedia("(max-width: 1024px)").matches){
            return "-50%";
        } else{
            return "-33.33%";
        }
    }

    $(".next").click(function(){
        let moveAmount = getSlideMoveAmount();
        $(".slide").stop().animate({marginLeft: moveAmount}, 800, function(){
            $(".slide li:first").appendTo(".slide");
            $(".slide").css("margin-left", "0%");
        });
    });

    $(".prev").click(function(){
        let moveAmount = getSlideMoveAmount();
        $(".slide li:last").prependTo(".slide");
        $(".slide").css("margin-left", moveAmount);
        $(".slide").stop().animate({marginLeft:"0%"}, 800)
    });

// 음소거 소리
    $(".sound1").click(function(){
        $(".sound1").hide();
        $(".no-sound1").show();
    });
    $(".no-sound1").click(function(){
        $(".sound1").show();
        $(".no-sound1").hide();
    });

    $(".sound2").click(function(){
        $(".sound2").hide();
        $(".no-sound2").show();
    });
    $(".no-sound2").click(function(){
        $(".sound2").show();
        $(".no-sound2").hide();
    });

    $(".sound3").click(function(){
        $(".sound3").hide();
        $(".no-sound3").show();
    });
    $(".no-sound3").click(function(){
        $(".sound3").show();
        $(".no-sound3").hide();
    });

    $(".sound4").click(function(){
        $(".sound4").hide();
        $(".no-sound4").show();
    });
    $(".no-sound4").click(function(){
        $(".sound4").show();
        $(".no-sound4").hide();
    });

// 재생 정지버튼
    $(".play1").click(function(){
        $(".play1").hide();
        $(".stop1").show();
    });
    $(".stop1").click(function(){
        $(".play1").show();
        $(".stop1").hide();
    });

    $(".play2").click(function(){
        $(".play2").hide();
        $(".stop2").show();
    });
    $(".stop2").click(function(){
        $(".play2").show();
        $(".stop2").hide();
    });

    $(".play3").click(function(){
        $(".play3").hide();
        $(".stop3").show();
    });
    $(".stop3").click(function(){
        $(".play3").show();
        $(".stop3").hide();
    });

    $(".play4").click(function(){
        $(".play4").hide();
        $(".stop4").show();
    });
    $(".stop4").click(function(){
        $(".play4").show();
        $(".stop4").hide();
    });