(function($) {

    $.fn.datGallery = function() {

        return this.each(function() {

            var _this = $(this),
                $body = $('body'),
                $gallery = $('.gallery .slider'),
                $work = $('#work'),
                $workWrapper = $work.find('.wrapper'),
                $thumbsContainer,
                $overlay,
                lastIndex = dataModel.images.length - 1,
                total = dataModel.images.length,
                tl = new TimelineMax();

            var init = function() {
                renderThumbnails();
                addThumbsController();
                renderOverlayView();
                addOverlayControllers();
            };

            var renderThumbnails = function() {
                // console.log(dataModel.images);
                $gallery.html(Templates.gallery(dataModel));
                createSlides(); 
                
            };

            var addThumbsController = function() {
                var $thumbs = $gallery.find('img');

                $thumbs.on('click', function() {
                    dataModel.currentIndex = $thumbs.index($(this));
                    addOverlay();
                    loadImage();
                });
            };

            var renderOverlayView = function() {
                $overlay = $(Templates.overlay(dataModel));
            };

            var loadImage = function() {
                var image = dataModel.images[dataModel.currentIndex],
                    $image = $(Templates.image(image));

                $overlay.find('.imagecontainer .img').html(Templates.fullImage(image));
                $overlay.find('.imagecontainer .title').html(Templates.title(image));
                $overlay.find('.imagecontainer .meta').html(Templates.meta(image));
                $overlay.find('.imagecontainer .description').html(Templates.intro(image));
                showNumber();

                tl.set($('.overlay'), {
                    opacity: 0
                }).set($('.imagecontainer'), {
                    opacity: 0
                }).set($('.title'), {
                    opacity: 0
                }).set($('.img img'), {
                    opacity: 0,
                    marginTop: -10
                }).set($('.meta span'), {
                    marginLeft: -10,
                    opacity: 0
                }).set($('.description'), {
                    marginTop: -15,
                    opacity: 0
                });

                tl.to($('.overlay'), 0.6, {
                    opacity: 1
                }).to($workWrapper, 0.6, {
                    className: "+=blur"
                }, "-=0.6").to($('.imagecontainer'), 0.6, {
                    opacity: 1
                }).to($('.title'), 0.4, {
                    opacity: 1
                }).staggerTo($('.meta span'), 0.4, {
                    marginLeft: 0,
                    opacity: 1
                }, 0.2).to($('.description'), 0.6, {
                    marginTop: 0,
                    opacity: 1
                }).staggerTo($('.img img'), 0.4, {
                    opacity: 1,
                    marginTop: 0
                }, 0.2);
            };

            var nextImage = function() {
                var image = dataModel.images[dataModel.currentIndex],
                            $image = $(Templates.image(image));
                    
                    tl.to($('.imagecontainer'), 0.5, {
                    marginLeft: -200,
                    opacity: 0,
                    ease: Power1.easeIn,
                    onComplete: function() {
                        

                $overlay.find('.imagecontainer .img').html(Templates.fullImage(image));
                $overlay.find('.imagecontainer .title').html(Templates.title(image));
                $overlay.find('.imagecontainer .meta').html(Templates.meta(image));
                $overlay.find('.imagecontainer .description').html(Templates.intro(image));

                    tl.set($('.imagecontainer'), {
                        marginLeft: 200,
                        opacity: 0
                    });

                    tl.to($('.imagecontainer'), 0.6, {
                        marginLeft: 0,
                        opacity: 1,
                        scrollTop: 0,
                        ease: Power1.easeOut
                    });

                    }
                });


            };

            var prevImage = function() {
                var image = dataModel.images[dataModel.currentIndex],
                            $image = $(Templates.image(image));
                            tl.to($('.imagecontainer'), 0.5, {
                    marginLeft: 200,
                    opacity: 0,
                    ease: Power1.easeIn,
                    onComplete: function() {
                        

                        $overlay.find('.imagecontainer .img').html(Templates.fullImage(image));
                $overlay.find('.imagecontainer .title').html(Templates.title(image));
                $overlay.find('.imagecontainer .meta').html(Templates.meta(image));
                $overlay.find('.imagecontainer .description').html(Templates.intro(image));

                    tl.set($('.imagecontainer'), {
                        marginLeft: -200,
                        opacity: 0
                    });

                    tl.to($('.imagecontainer'), 0.6, {
                        marginLeft: 0,
                        opacity: 1,
                        scrollTop: 0,
                        ease: Power1.easeOut
                    });

                    }
                });


            };

            var showNumber = function() {
                var $identifier = $overlay.find('.identifier');

                $identifier.html((dataModel.currentIndex + 1)+" / "+total);
            };

            var addOverlay = function() {
                $body.append($overlay);
            };

            var addOverlayControllers = function() {
                $overlay.find('.close').on('click', function() {
                    removeOverlay();
                });
                // $overlay.on('click', function(e) {
                //     if (e.target === this) {
                //         removeOverlay();
                //     }
                // });
                $overlay.find('.navright').on('click', function() {
                    dataModel.currentIndex = dataModel.currentIndex < lastIndex ? dataModel.currentIndex + 1 : 0;
                    nextImage()
                    showNumber();
                });
                $overlay.find('.navleft').on('click', function() {
                    dataModel.currentIndex = dataModel.currentIndex > 0 ? dataModel.currentIndex - 1 : lastIndex;
                    prevImage()
                    showNumber();
                });
            }

            var removeOverlay = function() {

                tl.to($workWrapper, 0.6, {
                    className: "-=blur"
                }).to($('.overlay'), 0.6, {
                    opacity: 0,
                    onComplete: function() {
                        tl.set($('.imagecontainer'), {
                            scrollTop: 0
                        });
                        $overlay.detach();

                    }
                }, "-=0.6");

            };

            var createSlides = function() {
                var counter = 0,
                    $images = $gallery.find('img'),
                    numImages = $images.length;

                var addContent = function() {
                    var $slide = $('<div class="slide"></div>');
                    for (var j = counter - 4; j < counter; j++) {
                        $slide.append($images.eq(j));
                    };
                    return $slide;
                };

                var addNondivisibleContent = function() {
                    var $slide = $('<div class="slide"></div>'),
                        multiplier = $('.slide').length;
                    for (var k = multiplier * 4; k < counter; k++) {
                        $slide.append($images.eq(k));
                    };
                    return $slide;
                };

                for (i = counter; i < numImages; i++) {
                    counter++;

                    if (counter % 4 === 0) {
                        var addSlide = addContent();
                        $gallery.append(addSlide);
                        // console.log('added');
                    } else if (counter === numImages) {
                        var addSlide = addNondivisibleContent();
                        $gallery.append(addSlide);
                        // console.log('last');
                    }
                };

            };

            $(document).keyup(function(e) {
                 if (e.keyCode == 27) { 
                    removeOverlay();
                }
            });
            
            init();

        });
    }
})(jQuery)