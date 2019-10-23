$(document).ready(function() {


    var $body = $('body'),
        $gallery = $('.gallery'),
        $black = $('.black'),
        $preloader = $('.preloader'),
        $loader = $preloader.find('.loader'),
        // $spinner = $preloader.find('.loader svg'),
        $loading = $preloader.find('.loader p'),
    tl = new TimelineMax();

    // TweenMax.to($spinner, 1, {
    //     rotation: "360",
    //     repeat: -1
    // });

    document.onreadystatechange = function() {

        if (document.readyState === "complete") {


            $body.datGallery();

            

            $body.amaze();

            tl.set($('#home header'), {
                opacity: 0
            }).set($('#home header h2'), {
                opacity: 0,
                marginTop: 0
            }).set($('#home main'), {
                opacity: 0
            }).set($('#home main nav ul li'), {
                opacity: 0,
                marginTop: 20
            }).set($('#home footer p'), {
                opacity: 0,
                marginTop: 0
            });

            var paths = $('path:not(defs path)');
                paths.each(function(i, e) {
                e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
                });
                paths.css({
                    opacity: 0
                });
var navItems = $('nav ul li');

var sequence = [];

var loaderAnim = TweenLite.to($loader, 0.3, {
    opacity: 0
});
sequence.push(loaderAnim);

var preloaderAnim = TweenLite.to($preloader, 2, {
                opacity: 0,
                ease: RoughEase.ease.config({
                    template: Power0.easeNone,
                    strength: 2.5,
                    points: 120,
                    taper: "none",
                    randomize: true,
                    clamp: false
                }),
                y: 0
            });
sequence.push(preloaderAnim);

var headerAnim = TweenLite.to($('#home header'), 0.1, {
                opacity: 1,
                delay: 2
            });
sequence.push(headerAnim);

    for(var i=0; i < paths.length ; i++){
                    var anim1 = TweenLite.to(paths.eq(i), 0.1, {
                        opacity: 1,
                        delay: (2+(0.05*i))
                    });
                    var anim2 = TweenLite.to(paths.eq(i), 1, {
                        strokeDashoffset: 0,
                        delay: (2+(0.05*i)),
                        ease: Power1.easeOut
                    });
                           sequence.push(anim1);
                           sequence.push(anim2);
                }

var h2Anim = TweenLite.to($('#home header h2'), 0.6, {
    opacity: 1,
    marginTop: -10,
    delay: 5
});
sequence.push(h2Anim);

var mainAnim = TweenLite.to($('#home main'), 0.1, {
                opacity: 1,
                delay: 3
            });
sequence.push(mainAnim);

for (var j = 0; j < navItems.length ; j++){
    var navAnim = TweenLite.to(navItems.eq(j), 0.6, {
        opacity: 1,
        marginTop: 0,
        ease: Power1.easeOut,
        delay: (5.2+(0.3*j))
    });
    sequence.push(navAnim);
}

var footerAnim = TweenLite.to($('#home footer p'), 0.6, {
                opacity: 1,
                marginTop: 0,
                delay: 6,
                onComplete: function() {
                    $preloader.detach();
                }
            });
sequence.push(footerAnim);

tl.add([sequence]);

            var flicker = tl.to($black, 5, {
                opacity: 0.175  ,
                repeat: -1,
                ease: RoughEase.ease.config({
                    template: Power0.easeNone,
                    strength: 1.75,
                    points: 60,
                    taper: "none",
                    randomize: true,
                    clamp: false
                }),
                y: 0
            }, "-=7.8");

$body.gallerySlider();



$('.contact-form').formValidation();
        }
    }


});