window.onload = function() {
    if(window.matchMedia("(max-width: 1110px)").matches){
        //mobile
    }else{
        this.process();
    }
};
 
function process() {
    tiraScroll();  
  TweenMax.to("#firstTransitionDiv", 0.5, {xPercent:-50, delay: 5.7});
  TweenMax.from(".border-top", 0.5, {height: 0, delay: 4.8});
  TweenMax.from("#little-mundi", 0.5, {autoAlpha: 0, delay: 5.2});
  TweenMax.from(".border-bottom", 0.5, {height: 0, delay: 4.8});
  TweenMax.from(".border-left", 0.5, {width: 0, delay: 4.8});  
  TweenMax.from(".border-right", 0.5, {width: 0, delay: 4.8});
  TweenMax.to("#svgOla", 1, {autoAlpha: 1, delay: 5.7, ease: Expo.easeIn});
  TweenMax.to("#face-icon", 0.4, {autoAlpha: 1, height: 20, delay: 6.2, ease: Expo.easeIn});
  TweenMax.to("#in-icon", 0.4, {autoAlpha: 1, height: 20, delay: 6.6, ease: Expo.easeIn});
  TweenMax.to("#insta-icon", 0.4, {autoAlpha: 1, height: 20, delay: 7, ease: Expo.easeIn, onComplete: colocaScroll});
  TweenMax.to(".home-scroll", 1, {autoAlpha: 1, top: '41em', delay: 6.0, ease: Expo.easeInOut});
  //   Vai para o topo, implementar depois
  // TweenLite.to('.container-linguica', 0.8, {scrollTo: {y:0, autoKill:false}, ease: Power3.easeInOut})

  //Loader 
  dot = $('.dot'); 
  loader = $('#loader');
  timelineLoader = new TimelineMax({repeat: 4, onComplete: hideLogo});

  function hideLogo() {
      TweenMax.to(loader, 0.4, {autoAlpha: 0, scale: 0.5});
  }

  function tiraScroll(){
    $('.container-linguica').css("height", "100vh");
  }

  function colocaScroll(){
    $('.container-linguica').css("height", "unset");
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
    // $(window).on('mousemove', function(e){
    //     centerX = $(this).width();
    //     centerY = $(this).height();
        
    //     moveX = (centerX - e.offsetX)/90;
    //     moveY = (centerY - e.offsetY)/90;

    //     console.log(moveX);
    //     console.log(moveY);
        
    //     $(".phone-1").css("transform", 'rotateY('+ (moveX/2) + 'deg) rotateX('+ (moveY/2) + 'deg)');
    //     $(".phone-2").css("transform", 'rotateY('+ (moveX/2) + 'deg) rotateX('+ (moveY/2) + 'deg)');
    //     $(".cartao-credito").css("transform", 'rotateY('+ (moveX/2) + 'deg) rotateX('+ (moveY/2) + 'deg)');
    // })

  timelineLoader.fromTo(loader, 
                        1,
                        {rotation: 0},
                        {rotation: 360, ease: Power0.easeNone});

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
                   to("#text-home", 0.3, {x: 40, autoAlpha:1, ease: Sine.easeInOut});
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
    
    // function animaTextHome() {
    //     setTimeout(() => {
    //         TweenMax.to("#text-home", 0.4, {margin: 0, ease: Sine.easeInOut});
    //         $("#text-home").css("text-align", "center");
    //     }, 500);
    // }

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

    //animação big-mundi 2 -- do lugar certo até só sobrar bank
    let tBigMundi2 = new TimelineLite();
    tBigMundi2
    .to('#big-mundi', 3, {left: -2400});

    //Cena big-mundi 2
    const sceneBigMundi2 = new ScrollMagic.Scene({
        triggerElement: '.second-container',
        duration: 1650,
        triggerHook: 0.8
    })
    .setTween(tBigMundi2)
    .addTo(controller);

    //Animação colunas
    let tlColumns = new TimelineLite();
    tlColumns
    .from('.column1', 0.6, {top: -120, autoAlpha: 0, ease: Back.easeOut.config(1.7)}, 'grow1')
    .from('.column7', 0.6, {top: -120, autoAlpha: 0, ease: Back.easeOut.config(1.7)}, 'grow1')
    .from('.column2', 0.6, {top: -190, autoAlpha: 0, ease: Back.easeOut.config(1.7)}, 'grow2')
    .from('.column6', 0.6, {top: -190, autoAlpha: 0, ease: Back.easeOut.config(1.7)}, 'grow2')
    .from('.column3', 0.6, {top: -210, autoAlpha: 0, ease: Back.easeOut.config(1.7)}, 'grow3')
    .from('.column5', 0.6, {top: -210, autoAlpha: 0, ease: Back.easeOut.config(1.7)}, 'grow3')
    .from('.column4', 0.6, {top: -80, autoAlpha: 0, ease: Back.easeOut.config(1.7) , onComplete: playThirdText}, 'grow4')
    
    //Cena columns
    const sceneColumns = new ScrollMagic.Scene({
        triggerElement: '.third-container',
        duration: 300,
    })
    .setTween(tlColumns) 
    .addTo(controller);

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

    //Cena Segunda Página
    const sceneSecondPage = new ScrollMagic.Scene({
        triggerElement: '.second-container',
        duration: 200,
        triggerHook: 0.33
    })
    .setTween(tlSecond)
    .addTo(controller)


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
    .from('.phone-2', 1, {top: 500, autoAlpha: 0, ease: Sine.easeIn})
    .from('.phone-1', 0.8, {top: 500, autoAlpha: 0, ease: Sine.easeIn}, '-=0.7')

    //Cena cartão
    const scenePhones = new ScrollMagic.Scene({
        triggerElement: '.third-container',
        duration: 300,
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
        .from('#text-fifith', 0.6, {top: "30vh", autoAlpha: 0, onComplete: playFooter})

    //Cena fifith
    const sceneFifith = new ScrollMagic.Scene({
        triggerElement: '.fifith-container',
        duration: 130,
        triggerHook: 0.1 
    })
    .setTween(tlFifithText)
    .addTo(controller)

    //show footer
    const tlFooter = new TimelineLite();
    tlFooter
        .to('.footer', 0.1, {height: '45vh', ease: Sine.easeIn, onComplete: desceFooter})

        tlFooter.pause();

    function playFooter() {
        setTimeout(() => {
            tlFooter.play();    
        }, 400);
    }

    function desceFooter() {  
        let $el = $('.footer');   
        let bottom = $el.position().top + $el.offset().top + $el.outerHeight(true);

        TweenLite.to($(window), 1.5, {scrollTo: {y:bottom, autoKill:false}, onComplete: playShakes});
    }

    //animação footer
    const tlFooterFooter = new TimelineLite();
        tlFooterFooter
    .to('.form-footer', 0.1, {autoAlpha: 1});

    //Cena footer
    const sceneFooter = new ScrollMagic.Scene({
        triggerElement: '.form',
        duration: 70,
        triggerHook: 0.1 
    })
    .setTween(tlFooterFooter)
    .addTo(controller)

    $("#tel")
        .mask("(99) 9999-9999?9")
        .focusout(function (event) {  
            var target, phone, element;  
            target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
            phone = target.value.replace(/\D/g, '');
            element = $(target);  
            element.unmask();  
            if(phone.length > 10) {  
                element.mask("(99) 99999-999?9");  
            } else {  
                element.mask("(99) 9999-9999?9");  
            }  
        });
}
 
function clickPecaJa() {
    //show footer
    const tlFooter = new TimelineLite();
    tlFooter
        .to('.form', 0.1, {height: '100vh', onComplete: desceForm})
}

function desceForm() {
        let $el = $('.form');   
        let bottom = $el.position().top + $el.offset().top + $el.outerHeight(true);

        TweenLite.to($(window), 0.01, {scrollTo: {y:bottom, ease: Sine.easeIn, autoKill:false}});
}

function clickPecaJaMobile() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#form-mobile").offset().top
    }, 500);
}

function enviarMobile() {
    
}

