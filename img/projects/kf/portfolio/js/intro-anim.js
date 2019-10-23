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

var	headerAnim = TweenLite.to($('#home header'), 0.1, {
                opacity: 1,
                delay: 2
            });
sequence.push(headerAnim);

	for(var i=0; i < paths.length ; i++){
                    var anim1 = TweenLite.to(paths.eq(i), 0.1, {
                        opacity: 1,
                        delay: (0.05*i)
                    });
					var anim2 = TweenLite.to(paths.eq(i), 1, {strokeDashoffset: 0, delay: (0.05*i)});
					       sequence.push(anim1);
                           sequence.push(anim2);
				}

var h2Anim = TweenLite.to($('#home header h2'), 0.6, {
	opacity: 1,
	delay = 2.5
});
sequence.push(h2Anim);

var h2SpanAnim = TweenLite.to($('#home header h2 span'), 0.6, {
	opacity: 1,
	delay = 2.8
});
sequence.push(h2SpanAnim);

var mainAnim = TweenLite.to($('#home main'), 0.1, {
                opacity: 1,
                delay: 3
            });
sequence.push(mainAnim);

for (var j = 0; j < navItems.length ; j++){
	var navAnim = TweenLite.to(navItems.eq(j), 0.6, {
		opacity: 1,
		delay: (0.3*j)
	});
	sequence.push(navAnim);
}

var footerAnim = TweenLite.to($('#home footer'), 0.6, {
                opacity: 1,
                delay: 3.5,
                onComplete: function() {
                    $preloader.detach();
                }
            });
sequence.push(footerAnim);