(function($) {

    $.fn.renderData = function() {

    	return this.each(function() {


    		var _this = $(this),
    			$results = $('.results'),
    			lastIndex = dataModel.users.length - 1,
                total = dataModel.users.length,
                tl = new TimelineMax();

            var init = function() {
            	renderUsers();
            	expandCollapseUser();
            };

            var renderUsers = function() {
            	$('.results').append(Templates.user(dataModel));
                var $userProfiles = $('.user');

                for(var i = 0; i < total;  i++) {
                    var userData = dataModel.users[i],
                        stars = userData.rating,
                        $friends = $userProfiles.eq(i).find($('.friends')),
                        $interests = $userProfiles.eq(i).find($('.interests')),
                        $rating = $userProfiles.eq(i).find($('.rating'));

                    $friends.append(Templates.friends(userData));
                    $interests.append(Templates.interests(userData));

                    for (var j = 0; j < stars; j++) {
                        $rating.append('<span class="lnr lnr-star"></span>');
                    }




                }

            };

            var expandCollapseUser = function () {
                var $expander = $('.user-footer img'),
                    $infoContainer = $('.user-info'),
                    $wrapper = $('.usercontent-wrapper');

                    tl.set($wrapper, {
                        css: {
                            marginTop: "-300%"
                        }
                    });

                    $expander.each(function(i){
                        var clicked = false;

                        $(this).on('click', function(){
                            var $content = $wrapper.eq(i).find('*');



                            if(!clicked) {
                                tl.set($content, {
                                    opacity: 0
                                }).to($(this), 0.3, {
                                    transformOrigin: "50% 50%",
                                    rotationZ: 180
                                }).to($wrapper.eq(i), 1, {
                                    css: {
                                        marginTop: 0
                                    },
                                    ease: Sine.easeOut
                                }, "-=0.3").staggerTo($content, 0.3, {
                                    opacity: 1
                                }, 0.1);

                                clicked = true;

                            } else if (clicked){
                                tl.to($(this), 0.3, {
                                    transformOrigin: "50% 50%",
                                    rotationZ: 0
                                }).to($wrapper.eq(i), 1, {
                                    css: {
                                        marginTop: "-300%"
                                    },
                                    ease: Sine.easeOut
                                }, "-=0.3").to($content, 1, {
                                    opacity: 0
                                }, "-=0.6");

                                clicked = false;
                            }

                            
                        });
                    });
                

            };

            init();







 		});
    }
})(jQuery)