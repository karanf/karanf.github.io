var tl = new TimelineMax();

// Setting up Snap paths
var p = Snap("#loader");
var circular = p.path("M151,3c26.5,0,48,21.5,48,48s-21.5,48-48,48s-48-21.5-48-48S124.5,3,151,3z");
var path1 = p.path("M151 51H3");
var path2 = p.path("M151 51h148");


// Grouping Paths
var loaderGroup = p.group(circular, path1, path2);


// Adding Shadow and basic style to Group
var snapShadow = p.filter(Snap.filter.shadow(0, 0, 2, "rgba(0,0,0,0.4)"));
loaderGroup.attr({
    stroke: '#ffffff',
    "stroke-linecap": "round",
    fill: "rgba(255,255,255,0)",
    // filter: snapShadow
});


// Finding lengths of each path
var lengthLine1 = path1.getTotalLength();
var lengthLine2 = path2.getTotalLength();
var lengthCircle = circular.getTotalLength();


// Setting attributes of all paths
circular.attr({
    strokeWidth: 3,
    strokeDasharray: lengthCircle,
    strokeDashoffset: lengthCircle
});

path1.attr({
    strokeWidth: 4,
    strokeDasharray: lengthLine1,
    strokeDashoffset: lengthLine1
});

path2.attr({
    strokeWidth: 4,
    strokeDasharray: lengthLine2,
    strokeDashoffset: lengthLine2
});


// Setting Load Animation
var revealLoader = new TimelineMax({paused: true});

revealLoader.set(circular, {
    snap: {
        opacity: 0,
        strokeDashoffset: 0
    }
}).to(circular, 0.5, {
    snap: {
        opacity: 1
    }
}).to(circular, 1, {
    snap: {
        strokeDashoffset: -lengthCircle
    },
    ease: Quad.easeOut
}).set(circular, {
    snap: {
        strokeDashoffset: lengthCircle
    }
}).to(circular, 0.5, {
    snap: {
        strokeDashoffset: 0
    },
    ease: Quad.easeIn
}).to(circular, 1, {
    snap: {
        strokeDashoffset: -lengthCircle
    },
    ease: Quad.easeOut
}, "-=0.4").set(circular, {
    snap: {
        strokeDashoffset: lengthCircle
    }
}).to(circular, 0.5, {
    snap: {
        strokeDashoffset: 0
    },
    ease: Quad.easeIn
}).to(circular, 0.5, {
    snap: {
        d: "M151,50c-0.6,0-1,0.4-1,1s0.4,1,1,1c0.6,0,1-0.4,1-1S151.6,50,151,50L151,50z"
    }
}).to([path1, path2], 0.5, {
    snap: {
        strokeDashoffset: 0
    },
    ease: Quad.easeOut
}, "-=0.08").to(circular, 0.01, {
    snap: {
        opacity: 0
    },
    onComplete: function(){
        changeBackground();
    }
}, "-=0.5");




// Restart Load Animation
var loaderRestarter = function(wait) {
    var restartLoader = new TimelineMax({paused: true});

    restartLoader.to([path1, path2], 0.5, {
        snap: {
            strokeDashoffset: lengthLine1
        },
        ease: Quad.easeOut,
        onComplete: function(){
            changeBackground();
        }
    }).to(circular, 0.01, {
        snap: {
            opacity: 1
        }
    }, "-=0.01").to(circular, 0.5, {
        snap: {
            d: "M151,3c26.5,0,48,21.5,48,48s-21.5,48-48,48s-48-21.5-48-48S124.5,3,151,3z"
        }
    }).to(circular, 1, {
        snap: {
            strokeDashoffset: -lengthCircle
        },
        ease: Quad.easeOut
    }).set(circular, {
        snap: {
            strokeDashoffset: lengthCircle
        }
    }).to(circular, 0.5, {
        snap: {
            strokeDashoffset: 0
        },
        ease: Quad.easeIn
    }).to(circular, 1, {
        snap: {
            strokeDashoffset: -lengthCircle
        },
        ease: Quad.easeOut
    }, "-=0.4").set(circular, {
        snap: {
            strokeDashoffset: lengthCircle
        }
    }).to(circular, 0.5, {
        snap: {
            strokeDashoffset: 0
        },
        ease: Quad.easeIn
    }).to(circular, 0.5, {
        snap: {
            d: "M151,50c-0.6,0-1,0.4-1,1s0.4,1,1,1c0.6,0,1-0.4,1-1S151.6,50,151,50L151,50z"
        }
    }).to([path1, path2], 0.5, {
        snap: {
            strokeDashoffset: 0
        },
        ease: Quad.easeOut
    }, "-=0.08").to(circular, 0.01, {
        snap: {
            opacity: 0
        },
        onComplete: function(){
            changeBackground();
        }
    }, "-=0.5");

    restartLoader.delay(wait).play();

};







// Function to change the background gradient
    var changeBackground = function(){
        var tl = new TimelineMax(),
            gradients = [
            'linear-gradient(100deg, rgb(255,81, 47) 10%, rgb(221, 36, 118) 90%)',
            'linear-gradient(100deg, rgb(229, 93, 135) 10%, rgb(95, 195, 228) 90%)',
            'linear-gradient(100deg, rgb(67, 206, 162) 10%, rgb(24, 90, 157) 90%)',
            'linear-gradient(100deg, rgb(85, 98, 112) 10%, rgb(255, 107, 107) 90%)',
            'linear-gradient(100deg, rgb(244, 107, 69) 10%, rgb(238, 168, 73) 90%)',
            'linear-gradient(100deg, rgb(123, 67, 151) 10%, rgb(220, 36, 48) 90%)',
            'linear-gradient(100deg, rgb(255, 78, 80) 10%, rgb(249, 212, 35) 90%)',
            'linear-gradient(100deg, rgb(252, 0, 255) 10%, rgb(0, 219, 222) 90%)',
            'linear-gradient(100deg, rgb(235, 51, 73) 10%, rgb(244, 92, 67) 90%)',
            'linear-gradient(100deg, rgb(170, 7, 107) 10%, rgb(97, 4, 95) 90%)',
            'linear-gradient(100deg, rgb(253, 116, 108) 10%, rgb(255, 144, 104) 90%)',
            'linear-gradient(100deg, rgb(178, 69, 146) 10%, rgb(241, 95, 121) 90%)'
            ],
            currentGradient = $('main').css('background'),
            selectedGradient;

            var bodyGradientValue = currentGradient.substring(currentGradient.lastIndexOf("linear-gradient("),currentGradient.lastIndexOf(" repeat"));
            var newGradient = gradients[Math.floor(Math.random() * gradients.length)];


            

        while (newGradient === bodyGradientValue) {
                var random = gradients[Math.floor(Math.random() * gradients.length)];

                newGradient = random;

            }

            var $gradientSwapper = $('.gradient');
            

            tl.set($gradientSwapper, {
                css: {
                    background: bodyGradientValue,
                    opacity: 1
                }
            }).set($('main'), {
                css: {
                    background: newGradient
                }
            }).to($gradientSwapper, 1.5, {
                opacity: 0
            });

        
    };
    



// Reveal Login page
var introAnimation = new TimelineMax({
    paused: true
});
introAnimation.set([$('.welcome'), $('.fblogin')], {
    opacity: 0
}).staggerTo([$('.welcome'), $('.fblogin')], 0.6, {
    opacity: 1
}, 0.3);


// Logo Leter animatiom
var aniLog = new TimelineMax({
        paused: true
    }),
    letters = $('.logo svg path');

aniLog.staggerFrom(letters, 0.6, {
    opacity: 0,
    scale: 1.5,
    transformOrigin: "50% 50%",
    ease: Back.easeOut
}, 0.2);


// Reveal logged in profile
var revealProfile = function(wait) {
    var profileReveal = new TimelineMax({
        paused: true
        }),
        stats = $('.stats .statistic'),
        stWidth = stats.width();


    profileReveal.set($('#profile-name'), {
        scale: 3,
        opacity: 0
    }).set($('#stats-intro'), {
        opacity: 0,
        marginTop: 10
    }).set(stats, {
        opacity: 0,
        scale: 3
    }).set($('#search-form *'), {
        opacity: 0
    }).set([$('.name-intro'), $('.stats')], {
        css: {
            opacity: 1,
            display: "block"
        }
    }).to($('#profile-name'), 0.6, {
        scale: 1,
        opacity: 1
    }).set($('#search-form'), {
        opacity: 1
    }).staggerTo($('#search-form *'), 0.6, {
        opacity: 1
    }, 0.2).to($('#stats-intro'), 0.3, {
        opacity: 1,
        marginTop: 0
    }).staggerTo(stats, 0.6, {
        opacity: 1,
        scale: 1
    }, 0.2);

    profileReveal.delay(wait).play();


};







// Login Animations
// Open Login Box
var $loginBox = $('.fblogin'),
    $loginButton = $loginBox.find('.button'),
    $welcomeBox = $('.welcome'),
    $searchButton = $('.search-frm button');

var openLogin = new TimelineMax({
    paused: true
});

openLogin.to($loginBox, 0.6, {
    css: {
        width: '80%',
        height: 175,
        borderRadius: 10
    },
    ease: Expo.easeOut
}).to($loginBox.find('.icon'), 0.6, {
    css: {
        top: '15%',
        fontSize: 24
    },
    ease: Expo.easeOut
}, '-=0.3').to($loginBox.find('.login-frm'), 0.6, {
    opacity: 1
});



//Close Login Box
var closeLogin = new TimelineMax({
    paused: true
});

closeLogin.to($loginBox.find('.login-frm'), 0.6, {
    opacity: 0,
    onComplete: function() {
        $loginBox.find('.login-frm').detach();
    }
}).to($loginBox.find('.icon'), 0.6, {
    css: {
        top: '50%',
        fontSize: 40
    },
    ease: Expo.easeOut
}).to($loginBox, 0.6, {
    css: {
        width: 100,
        height: 100,
        borderRadius: '50%'
    },
    ease: Expo.easeOut
}, '-=0.3').to([$welcomeBox, $loginBox], 0.8, {
    opacity: 0,
    onComplete: function() {
        tl.set($('.login'), {
            left: '-100%'
        });
        $('.login').detach();
    }
});


// Move the loader
var loaderMove = function(name, elem, time, horizontal, vertical, wait){
    name = new TimelineMax({paused: true});

    name.to(elem, time, {
        css: {
            top: vertical,
            left: horizontal
        },
        ease: Back.easeOut
    });

    name.delay(wait).play();
};


// Scroll top
var scrollToTop = function() {
    tl.to($('.appframe'), 0.5, {
        scrollTop: 0
    });
};


// Hide profile 
var hideProfile = function(wait) {

    var profileHide = new TimelineMax({paused:true});

    profileHide.staggerTo($('.statistic'), 0.5, {
        opacity: 0
    }, -0.2).to($('.stats'), 0.5, {
        opactiy: 0
    }, '-=0.2').set($('.stats'), {
        css: {
            display: "none"
        }
    }).to($('#search-form'), 0.5, {
        opacity: 0
    }, '-=0.2').to($('#profile-name'), 0.5, {
        opacity: 0
    }).set($('#name-intro'), {
        opacity: 0,
        css: {
            display: "none"
        }
    });

    profileHide.delay(wait).play();

};



// Reveal Search results
var showResults = function(wait) {
    var resultsShow = new TimelineMax({paused:true}),
        $users = $('.user');

    resultsShow.set($('.results'), {
        css: {
            display: "block"
        }
    }).to($('.results'), 1, {
        opacity: 1
    }).set($('.backarrow'), {
        css: {
            display: "block"
        }
    }).to($('.backarrow'), 0.3, {
        opacity: 1
    });

    resultsShow.delay(wait).play();
};




// Hide Results and back button
var hideResults = function(wait) {
    var resultsHide = new TimelineMax({paused: true});
        
        resultsHide.to($('.backarrow'), 0.3, {
        opacity: 0
    }).set($('.backarrow'), {
        css: {
            display: "none"
        }
    }).to($('.results'), 1, {
        opacity: 0
    }).set($('.results .user .user-info .usercontent-wrapper'), {
        marginTop: "-300%",
        opacity: 0
    }).set($('.results'), {
        css: {
            display: "none"
        }
    });

    resultsHide.delay(wait).play();
};














