window.onload = function() { 
  tiraScroll();  
  TweenMax.to("#firstTransitionDiv", 0.5, {xPercent:-50, delay: 5.7});
  TweenMax.from(".border-top", 0.5, {height: 0, delay: 4.8});
  TweenMax.from("#little-mundi", 0.5, {autoAlpha: 0, delay: 5.2});
  TweenMax.from(".border-bottom", 0.5, {height: 0, delay: 4.8});
  TweenMax.from(".border-left", 0.5, {width: 0, delay: 4.8});  
  TweenMax.from(".border-right", 0.5, {width: 0, delay: 4.8});
  TweenMax.to("#svgOla", 1, {autoAlpha: 1, delay: 5.7, ease: Expo.easeIn});
  TweenMax.to("#face-icon", 0.4, {autoAlpha: 1, height: 25, delay: 6.2, ease: Expo.easeIn});
  TweenMax.to("#in-icon", 0.4, {autoAlpha: 1, height: 25, delay: 6.6, ease: Expo.easeIn});
  TweenMax.to("#insta-icon", 0.4, {autoAlpha: 1, height: 25, delay: 7, ease: Expo.easeIn, onComplete: colocaScroll});
  TweenMax.to(".home-scroll", 1, {autoAlpha: 1, top: '41em', delay: 6.0, ease: Expo.easeInOut});
  //   Vai para o topo, implementar depois
  // TweenLite.to('.container-linguica', 0.8, {scrollTo: {y:0, autoKill:false}, ease: Power3.easeInOut})

  //Loader 
  dot = $('.dot'); 
  loader = $('#loader');
  timelineLoader = new TimelineMax({repeat: 3});

  function tiraScroll(){
    $('.container-linguica').css("height", "100vh");
  }

  function colocaScroll(){
    $('.container-linguica').css("height", "unset");
    playShakes();
  }

  //Shake Face Icon

    var element = $('#face-icon');

    var tlShake1 = new TimelineMax();

    TweenLite.defaultEase = Power0.easeNone;

    var wiggleDuration = 0.1;
    var wiggleAmount = 4;
    var wiggleDistance = 2;
    var pauseDuration = 3;

        tlShake1
        .set(element, {
            x: 0
        })
        .to(element, (wiggleDuration / 2), {
            x: (0 - wiggleDistance)
        })
        .fromTo(element, wiggleDuration, {
            x: (0 - wiggleDistance),
            immediateRender: false
        }, {
            x: wiggleDistance,
            yoyo: true,
            repeat: wiggleAmount
        })
        .to(element, (wiggleDuration / 2), {
            x: 0
        })
        .repeatDelay(pauseDuration)
        .repeat(-1);

    tlShake1.pause();

    //Shake linkedin Icon

    var element = $('#in-icon');

    var tlShake2 = new TimelineMax();

    TweenLite.defaultEase = Power0.easeNone;

    var wiggleDuration = 0.1;
    var wiggleAmount = 2;
    var wiggleDistance = 2;
    var pauseDuration = 4;

        tlShake2
        .set(element, {
            x: 0
        })
        .to(element, (wiggleDuration / 2), {
            x: (0 - wiggleDistance)
        })
        .fromTo(element, wiggleDuration, {
            x: (0 - wiggleDistance),
            immediateRender: false
        }, {
            x: wiggleDistance,
            yoyo: true,
            repeat: wiggleAmount
        })
        .to(element, (wiggleDuration / 2), {
            x: 0
        })
        .repeatDelay(pauseDuration)
        .repeat(-1);

    tlShake2.pause();

    //Shake insta Icon

    var element = $('#insta-icon');

    var tlShake3 = new TimelineMax();

    TweenLite.defaultEase = Power0.easeNone;

    var wiggleDuration = 0.1;
    var wiggleAmount = 3;
    var wiggleDistance = 2;
    var pauseDuration = 3;

        tlShake3
        .set(element, {
            x: 0
        })
        .to(element, (wiggleDuration / 2), {
            x: (0 - wiggleDistance)
        })
        .fromTo(element, wiggleDuration, {
            x: (0 - wiggleDistance),
            immediateRender: false
        }, {
            x: wiggleDistance,
            yoyo: true,
            repeat: wiggleAmount
        })
        .to(element, (wiggleDuration / 2), {
            x: 0
        })
        .repeatDelay(pauseDuration)
        .repeat(-1);

    tlShake3.pause();


    //Play shakes

    function playShakes() {
        tlShake1.play();
        setTimeout(() => {
            tlShake2.play();
        }, 1000);
        setTimeout(() => {
            tlShake3.play();
        }, 2000);
    }

    // Balanço phones e cartão
    $(window).on('mousemove', function(e){
        centerX = $(this).width();
        centerY = $(this).height();
        
        moveX = (centerX - e.offsetX)/90;
        moveY = (centerY - e.offsetY)/90;
        
        $(".phone-1").css("transform", 'rotateY('+ (moveX/2) + 'deg) rotateX('+ (moveY/2) + 'deg)');
        $(".phone-2").css("transform", 'rotateY('+ (moveX/2) + 'deg) rotateX('+ (moveY/2) + 'deg)');
        $(".cartao-credito").css("transform", 'rotateY('+ (moveX/2) + 'deg) rotateX('+ (moveY/2) + 'deg)');
    })

  timelineLoader.staggerFromTo(dot, 
                               0.3, 
                               {y: 0, autoAlpha: 0}, 
                               {y: 20, autoAlpha: 1, ease: Back.EaseInOut}, 
                               0.2)
                .fromTo(loader, 
                        0.3,
                        {autoAlpha: 1, scale: 1.3},
                        {autoAlpha: 0, scale: 1, ease: Power0.easeNone},
                        0.9);

  window.wasScrolled = false;
  
    setTimeout(() => {
        $(window).bind('scroll',function(){
            //Se é o primeiro scroll
            if (!window.wasScrolled){ 
               //Manda o vermelho para a direita
               TweenMax.to("#firstTransitionDiv", 0.6, {transform:"0%", ease: Sine.easeInOut});
                //Cria o parallax
                tl = new TimelineLite();
                tl.
                   to(".home-scroll", 0.2, {autoAlpha: 0, top: '43em', ease: Expo.easeIn}).
                   to("#svgOla", 0.4, {right: "-10%", ease: Sine.easeIn}).
                   to("#text-home", 0.3, {y: -20, autoAlpha:1, ease: Sine.easeInOut});
                window.wasScrolled = true;
            }
    
            //pos é a posição da barra de scroll
            // var pos = $(window).scrollTop();
            // //Quando atinge o topo
            //     if (pos == 0) {
            //         window.wasScrolled = false;
            //         //Volta o vermelho para esquerda
            //         TweenMax.to("#firstTransitionDiv", 1, {xPercent:-50, ease: Sine.easeInOut, delay: 0.4});
            //         //cria parallax
            //         tl = new TimelineLite();
            //             tl.
            //             to("#text-home", 0.4, {y: 20, autoAlpha:0, ease: Sine.easeInOut}).
            //             to("#svgOla", 0.3, {right: "-13%", ease: Sine.easeIn}).
            //             to("#svgOla", 0.7, {right: "-10%", ease: Sine.easeOut})
            //     }
        })
    }, 4000);

    //Animação Scroll
    const controller = new ScrollMagic.Controller();

    //animação de fechar o home
    let tlHome = new TimelineLite();
    tlHome.add('hide') 
    .to("#svgOla", 0.5, {top: 0, ease: Sine.easeInOut}, 'hide')
    .to("#text-home", 0.5, {bottom: '30%', ease: Sine.easeInOut}, 'hide')

    //Cena fechar home
    const sceneHome = new ScrollMagic.Scene({
        triggerElement: '.second-step',
        duration: 700,
        triggerHook: 0.9
    })
    .setTween(tlHome)
    .addTo(controller);

    //animação big-mundi 1
    let tlBig1 = new TimelineLite();
    tlBig1
    .to('#big-mundi', 1.5, {left: -290, onStart: playSecond})

    //Cena big-mundi 1
    const sceneBigMundi1 = new ScrollMagic.Scene({
        triggerElement: '.second-step',
        duration: 450
    })
    .setTween(tlBig1)
    .addTo(controller);

    //animação big-mundi 2 -- do lugar certo até só sobrar bank
    let tBigMundi2 = new TimelineLite();
    tBigMundi2
    .to('#big-mundi', 3, {left: -1247})
    .to('#big-mundi', 3, {left: -2400, onStart: playThirdText});

    //Cena big-mundi 2
    const sceneBigMundi2 = new ScrollMagic.Scene({
        triggerElement: '.third-container',
        duration: 1200,
        triggerHook: 0.9
    })
    .setTween(tBigMundi2)
    .addTo(controller);

    //Animação colunas
    let tlColumns = new TimelineLite();
    tlColumns
    .from('.column1', 0.3, {top: -120, autoAlpha: 0}, 'grow1')
    .from('.column7', 0.3, {top: -120, autoAlpha: 0}, 'grow1')
    .from('.column2', 0.3, {top: -190, autoAlpha: 0}, 'grow2')
    .from('.column6', 0.3, {top: -190, autoAlpha: 0}, 'grow2')
    .from('.column3', 0.3, {top: -210, autoAlpha: 0}, 'grow3')
    .from('.column5', 0.3, {top: -210, autoAlpha: 0}, 'grow3')
    .from('.column4', 0.3, {top: -80, autoAlpha: 0}, 'grow4')
    
    //Cena columns
    const sceneColumns = new ScrollMagic.Scene({
        triggerElement: '.third-container',
        duration: 300,
    })
    .setTween(tlColumns) 
    .addTo(controller);
 
    function stopColumns() {
        tlColumns.pause();
    }

    //animação terceiro SVG
    let tlThirdSvg = new TimelineLite();
    tlThirdSvg
    .to('#BLANK', 6, {left: -1673});

    //Cena third SVG 
    const sceneThirdSvg = new ScrollMagic.Scene({
        triggerElement: '.third-container',
        duration: 2000,
        triggerHook: 0.1
    })
    .setTween(tlThirdSvg)
    .addTo(controller)

    //animação text do terceiro
    const tTextThird = new TimelineLite();
    tTextThird
    .from('.third-text-1', 0.8, {autoAlpha: 0, left: 50}, '-=0.5')
    .from('.third-text-2', 0.8, {autoAlpha: 0, right: 50}, '-=0.5')
    .from('.third-text-3', 0.4, {autoAlpha: 0}, '-=0.7');

    tTextThird.pause();

    function playThirdText() {
        tTextThird.play();
    }

    //animação segunda página
    const tlSecond = new TimelineLite(); 
    tlSecond
    .from('.textLeftSection', 0.6, {left: 40, autoAlpha: 0}, '-=0.2')
    .from('.textLeftSection p', 0.8, {left: -90, autoAlpha: 0}, '-=0.2');

    tlSecond.pause();

    function playSecond() {
        tlSecond.play();
    }

    //Animação segundo texto subindo
    const tlSecondUp = new TimelineLite();
        tlSecondUp
    .to('.textLeftSection', 0.1, {top: -200})

    //Cena second subindo
    const sceneSecondUp = new ScrollMagic.Scene({
        triggerElement: '.second-container',
        duration: 200,
        triggerHook: 0
    })
    .setTween(tlSecondUp)
    .addTo(controller)

    //animação phones
    const tlPhones = new TimelineLite();
    tlPhones
    .from('.phone-2', 1, {top: 300, autoAlpha: 0})
    .from('.phone-1', 0.8, {top: 300, autoAlpha: 0}, '-=0.7')

    //Cena cartão
    const scenePhones = new ScrollMagic.Scene({
        triggerElement: '.third-container',
        duration: 400,
    })
    .setTween(tlPhones)   
    .addTo(controller);

    //animação cartão
    const tlCartao = new TimelineLite();
    tlCartao
    .from('.cartao-credito', 1, {left: 40, autoAlpha: 0, ease: Back.easeOut.config(1.7), onStart: playFourth})

    //Cena cartão
    const sceneCartao = new ScrollMagic.Scene({
        triggerElement: '.fourth-container',
        duration: 500,
        triggerHook: 0.7
    })
    .setTween(tlCartao)   
    .addTo(controller);

    function pauseCartao() {
        tlCartao.pause();
    }

    //animação quarta página
    const tlFourth = new TimelineLite(); 
    tlFourth
    .from('.fourth-text h2', 0.6, {left: 40, autoAlpha: 0}, '+=0.2') 
    .from('.fourth-text h4', 0.6, {left: -90, autoAlpha: 0}, '-=0.4')
    .from('.fourth-text a', 0.4, {left: -90, autoAlpha: 0}, '-=0.4')
    
    tlFourth.pause();
 
    function playFourth() {
        tlFourth.play();
    }

    //animação internacional
    const tlInter = new TimelineLite();
    tlInter.
        to('#internacional-svg', 1, {left: -1880})

    //Cena Internacional
    const sceneInter = new ScrollMagic.Scene({
        triggerElement: '.fourth-container',
        duration: 1600
    })
    .setTween(tlInter)
    .addTo(controller)

    //animação fourth-step > pra você
    const tlFifithText = new TimelineLite();
    tlFifithText
        .from('#text-fifith', 0.4, {top: 60, autoAlpha: 0, onComplete: playPraVc})

    //Cena fifith
    const sceneFifith = new ScrollMagic.Scene({
        triggerElement: '.fifith-container',
        duration: 100,
        triggerHook: 0.1
    })
    .setTween(tlFifithText)
    .addTo(controller)

    //Animação pra você
    const tlPraVc = new TimelineLite();
    tlPraVc
        .from('#praVoce', 1, {left: -400, autoAlpha: 0, onComplete: playFooter})
        
    tlPraVc.pause();

    function playPraVc() {
        tlPraVc.play();
    }

    //show footer
    const tlFooter = new TimelineLite();
    tlFooter
        .to('.footer', 0.5, {height: '60vh', ease: Sine.easeIn, onComplete: desceFooter})

        tlFooter.pause();

    function playFooter() {
        tlFooter.play();
    }

    function desceFooter() {  
        let $el = $('.footer');   
        let bottom = $el.position().top + $el.offset().top + $el.outerHeight(true);

        TweenLite.to($(window), 0.8, {delay: 0.2, scrollTo: {y:bottom, autoKill:false}, ease: Power3.easeInOut});
    }

};

