var tl = new TimelineMax();

// Setting up Raphael paths
var p = Raphael("loader");
var constant = p.path("M151,3c26.5,0,48,21.5,48,48s-21.5,48-48,48s-48-21.5-48-48S124.5,3,151,3z").attr({
    "stroke-width": 3,
    stroke: '#ffffff',
    "stroke-linecap": "round"
});
var path1 = p.path("M151 51H3").attr({
    "stroke-width": 4,
    stroke: '#ffffff',
    "stroke-linecap": "round"
});
var path2 = p.path("M151 51h148").attr({
    "stroke-width": 4,
    stroke: '#ffffff',
    "stroke-linecap": "round"
});

var loaderGroup = p.set(constant, path1, path2);
loaderGroup.dropShadow(1, 0, 0, 0.3);

// Setting Load Animation
var paths = $('#loader svg path'),
    circularPath = paths[0],
    lineOnePath = paths[1],
    lineTwoPath = paths[2];

circularPath.style.strokeDasharray = circularPath.style.strokeDashoffset = circularPath.getTotalLength();

lineOnePath.style.strokeDasharray = lineOnePath.style.strokeDashoffset = lineOnePath.getTotalLength();

lineTwoPath.style.strokeDasharray = lineTwoPath.style.strokeDashoffset = lineTwoPath.getTotalLength();

var loadAnimationReverse = new TimelineMax({
    paused: true
});

loadAnimationReverse.to([lineOnePath, lineTwoPath], 0.5, {
    strokeDashoffset: lineTwoPath.getTotalLength(),
    ease: Power3.easeOut,
    onComplete: function() {
        constant.animate({
            path: "M151,3c26.5,0,48,21.5,48,48s-21.5,48-48,48s-48-21.5-48-48S124.5,3,151,3z"
        }, 500, '<');
    }
}).to(circularPath, 0.5, {
    strokeDashoffset: -circularPath.getTotalLength(),
    ease: Sine.easeOut
},"+=0.5").set(circularPath, {
    strokeDashoffset: circularPath.getTotalLength()
}).to(circularPath, 1, {
    strokeDashoffset: 0,
    ease: Power3.easeOut
}).to(circularPath, 0.5, {
    strokeDashoffset: -circularPath.getTotalLength(),
    ease: Sine.easeOut
}, "-=0.45").set(circularPath, {
    strokeDashoffset: circularPath.getTotalLength()
}).to(circularPath, 1, {
    strokeDashoffset: 0,
    ease: Power3.easeOut,
    onComplete: function() {
        constant.animate({
            path: "M151,50c-0.6,0-1,0.4-1,1s0.4,1,1,1c0.6,0,1-0.4,1-1S151.6,50,151,50L151,50z"
        }, 500, '<');
    }
}).to([lineOnePath, lineTwoPath], 0.5, {
    strokeDashoffset: 0,
    ease: Power3.easeOut
}, "+=0.4");



var loadAnimationVisible = new TimelineMax({
    paused: true
});

loadAnimationVisible.set(circularPath, {
    strokeDashoffset: 0
}).to(circularPath, 0.5, {
    strokeDashoffset: -circularPath.getTotalLength(),
    ease: Sine.easeOut
}, "+=0.45").set(circularPath, {
    strokeDashoffset: circularPath.getTotalLength()
}).to(circularPath, 1, {
    strokeDashoffset: 0,
    ease: Power3.easeOut
}).to(circularPath, 0.5, {
    strokeDashoffset: -circularPath.getTotalLength(),
    ease: Sine.easeOut
}, "-=0.45").set(circularPath, {
    strokeDashoffset: circularPath.getTotalLength()
}).to(circularPath, 1, {
    strokeDashoffset: 0,
    ease: Power3.easeOut,
    onComplete: function() {
        constant.animate({
            path: "M151,50c-0.6,0-1,0.4-1,1s0.4,1,1,1c0.6,0,1-0.4,1-1S151.6,50,151,50L151,50z"
        }, 500, '<');
    }
}).to([lineOnePath, lineTwoPath], 0.5, {
    strokeDashoffset: 0,
    ease: Power3.easeOut
}, "+=0.4");


// Function to create dynamic loader

// function loaderDisplay(loopamount, animdelay){
//     var loadAnimationVisible = new TimelineMax({
//         paused: true
//     }),
//         loop = '.set(circularPath, { strokeDashoffset: circularPath.getTotalLength() }).to(circularPath, 1, { strokeDashoffset: 0, ease: Power3.easeOut }).to(circularPath, 0.5, { strokeDashoffset: -circularPath.getTotalLength(), ease: Sine.easeOut }, "-=0.45")',
//         end = '.set(circularPath, { strokeDashoffset: circularPath. }).to(circularPath, 1, { strokeDashoffset: 0, ease: Power3.easeOut, onComplete: function() { constant.animate({ path: "M151 50.5c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5z" }, 500, "<"); } }).to([lineOnePath, lineTwoPath], 0.5, { strokeDashoffset: 0, ease: Power3.easeOut }, "+=0.4")',
//         loopString;

//         for(var i = 1; i <= loopamount; i++) {
//             loopString += loop ;
//         }

//     loadAnimationVisible.set(circularPath, {
//         strokeDashoffset: 0
//     }).to(circularPath, 0.5, {
//         strokeDashoffset: -circularPath.getTotalLength(),
//         ease: Sine.easeOut
//     }, "+=0.45")+loopString+end;
//     loadAnimationVisible.timeScale(0.75).delay(animdelay).play();
// }





// Function to change the background gradient

var changeBackground = function() {
    var tl = new TimelineMax(),
        gradients = [
            'linear-gradient(100deg, rgb(255,81, 47) 10%, rgb(221, 36, 118) 90%)',
            'linear-gradient(100deg, rgb(229, 93, 135) 10%, rgb(95, 195, 228) 90%)',
            'linear-gradient(100deg, rgb(0, 201, 255) 10%, rgb(146, 254, 157) 90%)',
            'linear-gradient(100deg, rgb(67, 206, 162) 10%, rgb(24, 90, 157) 90%)',
            'linear-gradient(100deg, rgb(131, 164, 212) 10%, rgb(182, 251, 255) 90%)',
            'linear-gradient(100deg, rgb(85, 98, 112) 10%, rgb(255, 107, 107) 90%)',
            'linear-gradient(100deg, rgb(244, 107, 69) 10%, rgb(238, 168, 73) 90%)',
            'linear-gradient(100deg, rgb(123, 67, 151) 10%, rgb(220, 36, 48) 90%)',
            'linear-gradient(100deg, rgb(255, 78, 80) 10%, rgb(249, 212, 35) 90%)'
        ],
        currentGradient = $('body').css('background'),
        selectedGradient;

    var bodyGradientValue = currentGradient.substring(currentGradient.lastIndexOf("linear-gradient("), currentGradient.lastIndexOf(" no-repeat"));
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
    }).set($('body'), {
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
introAnimation.set($('.login'), {
    opacity: 0
}).to($('.login'), 0.6, {
    opacity: 1,
    delay: 2.2
}, 0.2);


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
var profileReveal = new TimelineMax({
        paused: true
    }),
    stats = $('.profile .stats .statistic'),
    stWidth = stats.width();


profileReveal.set($('#profile-name'), {
    scale: 3,
    opacity: 0
}).set($('#profile-intro'), {
    opacity: 0,
    marginTop: 10
}).set(stats, {
    opacity: 0,
    scale: 3
}).set($('#search-form *'), {
    opacity: 0
}).set($('.profile'), {
    left: 0,
    opacity: 1
}).to($('#profile-name'), 0.6, {
    scale: 1,
    opacity: 1
}).set($('#search-form'), {
    opacity: 1
}).staggerTo($('#search-form *'), 0.6, {
    opacity: 1
}, 0.2).to($('#profile-intro'), 0.3, {
    opacity: 1,
    marginTop: 0
}).staggerTo(stats, 0.6, {
    opacity: 1,
    scale: 1
}, 0.2);





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
        height: 235,
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
        changeBackground();
    }
});