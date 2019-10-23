(function($) {

    $.fn.amaze = function() {

        return this.each(function() {

            var _this = $(this),
                $aboutTrigger = _this.find('#home .main-container .wrapper main nav ul li p a#about-link'),
                $workTrigger = _this.find('#home .main-container .wrapper main nav ul li p a#work-link'),
                $contactTrigger = _this.find('#home .main-container .wrapper main nav ul li p a#contact-link'),
                $homeSection = _this.find('#home'),
                $aboutSection = _this.find('#about'),
                $workSection = _this.find('#work'),
                $contactSection = _this.find('#contact'),
                $black = _this.find('.black'),
                $abtBackToHome = _this.find('#about .main-container .wrapper header .svg p img'), 
                $workBackToHome = _this.find('#work .main-container .wrapper header .svg p img'),
                $contactBackToHome = _this.find('#contact .main-container .wrapper header .svg p img'),
                tl = new TimelineMax(),
                windowWidth = $(window).width(),
                windowHeight = $(window).height(),
                leftCoordinates,
                rightCoordinates,
                downCoordinates,
                fullCoordinates;

            var setCoordinates = function() {
                leftCoordinates = "rect(0 0 " + windowHeight + "px 0)";
                rightCoordinates = "rect(0 " + windowWidth + "px " + windowHeight + "px " + windowWidth + "px)";
                downCoordinates = "rect(" + windowHeight + "px " + windowWidth + "px " + windowHeight + "px 0)";
                fullCoordinates = "rect(0 " + windowWidth + "px " + windowHeight + "px 0)";
            }

            var setLeft = function($section) {
                tl.set($section, {
                    clip: leftCoordinates
                });
            };

            var setRight = function($section) {
                tl.set($section, {
                    clip: rightCoordinates
                });
            };

            var setDown = function($section) {
                tl.set($section, {
                    clip: downCoordinates
                });
            };

            var setFull = function($section) {
                tl.set($section, {
                    clip: fullCoordinates
                });
            };

            var workSlide = function(coordinates){
                var content = $workSection.find('.content'),
                    title = $workSection.find('.title');
                tl.set(content, {
                    opacity: 0,
                    className: "+=blurred"
                });

                var workTitle = tl.set(content, {
                        css: {
                            flex: "0 0 0",
                            height: 0
                        }
                    }).set(title, {
                        css: {
                            marginTop: (title.height()-title.find('p span.titlename').height()+6)/2
                        }
                    });

                    var slideAnimate = tl.set($('#home'), {
                        zIndex: 10
                    }).set($workSection, {
                        zIndex: 100,
                        left: 0
                    }).to($workSection, 1, {
                        clip: coordinates,
                        ease: Expo.easeInOut
                    }).to(content, 0.3, {
                        css: {
                            flex: "6.6 6.6 66.6666px",
                            height: "auto"
                        },
                        ease: Back.easeOut
                    }).to(title, 0.3, {
                        css: {
                            marginTop: 20
                        }
                    }).to(content, 1, {
                        opacity: 1,
                        className: "-=blurred",
                        ease: Power1.easeOut
                    });



            };

            var slide = function(section, coordinates) {
                var content = section.find('.content');
                tl.set(content, {
                    opacity: 0,
                    className: "+=blurred"
                });

            
                    var slideAnimate = tl.set($('#home'), {
                        zIndex: 10
                    }).set(section, {
                        zIndex: 100,
                        left: 0
                    }).to(section, 1, {
                        clip: coordinates,
                        ease: Expo.easeInOut
                    }).to(content, 1, {
                        opacity: 1,
                        className: "-=blurred",
                        ease: Power1.easeOut
                    });

            };

            var swap = function(currentSection, coordinates, targetSection) {
                var content = targetSection.find('.content');
                tl.set(content, {
                    opacity: 0,
                    className: "+=blurred"
                });
                var swapAnimate = tl.to(currentSection, 1, {
                    clip: coordinates,
                    ease: Expo.easeInOut
                }).set(currentSection, {
                    zIndex: 10
                }).set(targetSection, {
                    zIndex: 100,
                    left: 0
                }).to(targetSection, 1, {
                    clip: fullCoordinates,
                    ease: Expo.easeInOut
                }).set(currentSection, {
                    left: '-100%'
                }).to(content, 1, {
                    opacity: 1,
                    className: "-=blurred",
                    ease: Power1.easeOut
                });
            };

            var homeSlide = function(currentSection, coordinates) {

                

                var homeAnimate = tl.to(currentSection, 1, {
                    clip: coordinates,
                    ease: Expo.easeInOut,
                    zIndex: 10
                }).set($('#home'), {
                    zIndex: 100
                }).set(currentSection, {
                    left: '-100%'
                });
            };

            var checkSizes = function() {
                if (windowWidth < windowHeight) {
                    setDown($contactSection);
                    setDown($aboutSection);
                    setDown($workSection);
                } else if (windowWidth > windowHeight) {
                    setLeft($contactSection);
                    setRight($aboutSection);
                    setDown($workSection);
                }
            };

            var sectionSwap = function() {

                var $aboutHome = $aboutSection.find('footer .icons a#aboutHome'),
                    $aboutWork = $aboutSection.find('footer .icons a#aboutWork'),
                    $aboutContact = $aboutSection.find('footer .icons a#aboutContact'),
                    $workHome = $workSection.find('footer .icons a#workHome'),
                    $workAbout = $workSection.find('footer .icons a#workAbout'),
                    $workContact = $workSection.find('footer .icons a#workContact'),
                    $contactHome = $contactSection.find('footer .icons a#contactHome'),
                    $contactAbout = $contactSection.find('footer .icons a#contactAbout'),
                    $contactWork = $contactSection.find('footer .icons a#contactWork');


                if (windowWidth < windowHeight) {
                    var clipTo = downCoordinates;
                    $aboutHome.on('click', function(e) {
                        e.preventDefault();
                        homeSlide($aboutSection, clipTo);
                    });
                    $abtBackToHome.on('click', function(e) {
                        e.preventDefault();
                        homeSlide($aboutSection, clipTo);
                    });
                    $aboutWork.on('click', function(e) {
                        e.preventDefault();
                        swap($aboutSection, clipTo, $workSection);
                    });
                    $aboutContact.on('click', function(e) {
                        e.preventDefault();
                        swap($aboutSection, clipTo, $contactSection);
                    });
                    $workHome.on('click', function(e) {
                        e.preventDefault();
                        homeSlide($workSection, clipTo);
                    });
                    $workBackToHome.on('click', function(e) {
                        e.preventDefault();
                        homeSlide($workSection, clipTo);
                    });
                    $workAbout.on('click', function(e) {
                        e.preventDefault();
                        swap($workSection, clipTo, $aboutSection);
                    });
                    $workContact.on('click', function(e) {
                        e.preventDefault();
                        swap($workSection, clipTo, $contactSection);
                    });
                    $contactHome.on('click', function(e) {
                        e.preventDefault();
                        homeSlide($contactSection, clipTo);
                    });
                    $contactBackToHome.on('click', function(e) {
                        e.preventDefault();
                        homeSlide($contactSection, clipTo);
                    });
                    $contactAbout.on('click', function(e) {
                        e.preventDefault();
                        swap($contactSection, clipTo, $aboutSection);
                    });
                    $contactWork.on('click', function(e) {
                        e.preventDefault();
                        swap($contactSection, clipTo, $workSection);
                    });

                } else {
                    $aboutHome.on('click', function(e) {
                        e.preventDefault();
                        homeSlide($aboutSection, rightCoordinates);
                    });
                    $abtBackToHome.on('click', function(e) {
                        e.preventDefault();
                        homeSlide($aboutSection, rightCoordinates);
                    });
                    $aboutWork.on('click', function(e) {
                        e.preventDefault();
                        swap($aboutSection, rightCoordinates, $workSection);
                    });
                    $aboutContact.on('click', function(e) {
                        e.preventDefault();
                        swap($aboutSection, rightCoordinates, $contactSection);
                    });
                    $workHome.on('click', function(e) {
                        e.preventDefault();
                        homeSlide($workSection, downCoordinates);
                    });
                    $workBackToHome.on('click', function(e) {
                        e.preventDefault();
                        homeSlide($workSection, downCoordinates);
                    });
                    $workAbout.on('click', function(e) {
                        e.preventDefault();
                        swap($workSection, downCoordinates, $aboutSection);
                    });
                    $workContact.on('click', function(e) {
                        e.preventDefault();
                        swap($workSection, downCoordinates, $contactSection);
                    });
                    $contactHome.on('click', function(e) {
                        e.preventDefault();
                        homeSlide($contactSection, leftCoordinates);
                    });
                    $contactBackToHome.on('click', function(e) {
                        e.preventDefault();
                        homeSlide($contactSection, leftCoordinates);
                    });
                    $contactAbout.on('click', function(e) {
                        e.preventDefault();
                        swap($contactSection, leftCoordinates, $aboutSection);
                    });
                    $contactWork.on('click', function(e) {
                        e.preventDefault();
                        swap($contactSection, leftCoordinates, $workSection);
                    });
                }
            };


            var reveal = function() {
                $contactTrigger.on('click', function(e) {
                    e.preventDefault();
                    slide($contactSection, fullCoordinates);
                    
                });

                $aboutTrigger.on('click', function(e) {
                    e.preventDefault();
                    slide($aboutSection, fullCoordinates);
                    
                });

                $workTrigger.on('click', function(e) {
                    e.preventDefault();
                    workSlide(fullCoordinates);
                    
                });

            };
            


            $(window).resize(function() {
                var newWidth = $(window).width(),
                    newHeight = $(window).height();

                windowWidth = newWidth;
                windowHeight = newHeight;
                setCoordinates();
                checkSizes();
            });

            
            setCoordinates();
            checkSizes();
            reveal();
            sectionSwap();





        });
    }
})(jQuery)