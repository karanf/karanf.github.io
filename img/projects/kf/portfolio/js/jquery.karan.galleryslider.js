(function($) {

    $.fn.gallerySlider = function() {

        return this.each(function() {
            var _this = $(this),
                $slider = _this.find('.slider'),
                $gallery = _this.find('.gallery'),
                $slides = $slider.find('.slide'),
                $content = _this.find('.content'),
                contentHeight = $content.height(),
                slideHeight = $slides.height(),
                $images = $slides.find('img'),
                $arrowContainers = _this.find('.arrow'),
                $arrowSymbol = _this.find('.arrowsymbol'),
                $left = _this.find('#leftArrow'),
                $right = _this.find('#rightArrow'),
                scrollAmount = $slides.width(),
                numImages = $images.length,
                lastIndex = $slides.length - 1,
                currentIndex = 0,
                arrowFix,
                tl = new TimelineMax();


            

            

            $slider.css({
                width: 100+"%",
                //height: slideHeight
            });

            $gallery.height(contentHeight);
            $arrowContainers.height(contentHeight);
            // console.log($slides.length);
            $slides.css({
                width: 100+"%"
            });

            if($(window).height()>$(window).width()){
                arrowFix = $images.width();
            } else {
                arrowFix = $images.width()/2;
            };
            $arrowSymbol.css({"top": arrowFix});
            // $arrowContainers.css({
            //     height: $slider.height()+"px"
            // });

// console.log(contentHeight);

            $slides.not($slides.eq(currentIndex)).css({
                "z-index": 1,
                opacity: 0
            });
            $slides.eq(currentIndex).css("z-index", 10);
            

            $left.on('click', function(){
                var fadeOut = $slides.eq(currentIndex).find('img');
                tl.staggerTo(fadeOut, 0.3, {
                    opacity: 0,
                    ease: Sine.easeOut
                }, 0.2).set($slides.eq(currentIndex), {
                    css: {
                        zIndex: 1,
                        opacity: 0
                    }
                });
                currentIndex = currentIndex > 0 ? currentIndex - 1 : lastIndex;
                
                tl.set($slides.eq(currentIndex), {
                    css: {
                        zIndex: 10,
                        opacity: 1
                    }
                }).staggerFrom($slides.eq(currentIndex).find('img'), 0.3, {
                    opacity: 0,
                    ease: Sine.easeOut
                }, 0.2).set(fadeOut, {
                    opacity: 1
                });
            });

            $right.on('click', function(){
                var fadeOut = $slides.eq(currentIndex).find('img');
                tl.staggerTo(fadeOut, 0.3, {
                    opacity: 0,
                    ease: Sine.easeOut
                }, 0.2).set($slides.eq(currentIndex), {
                    css: {
                        zIndex: 1,
                        opacity: 0
                    }
                });

                currentIndex = currentIndex < lastIndex ? currentIndex + 1 : 0;
                
                tl.set($slides.eq(currentIndex), {
                    css: {
                        zIndex: 10,
                        opacity: 1
                    }
                }).staggerFrom($slides.eq(currentIndex).find('img'), 0.3, {
                    opacity: 0,
                    ease: Sine.easeOut
                }, 0.2).set(fadeOut, {
                    opacity: 1
                });
            });

        });
    }
})(jQuery)