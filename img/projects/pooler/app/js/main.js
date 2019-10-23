$(document).ready(function() {

    var $loginBox = $('.fblogin'),
    $loginButton = $loginBox.find('.button'),
    $welcomeBox = $('.welcome'),
    $searchButton = $('.search-frm .button'),
    tl = new TimelineMax();
    

    document.onreadystatechange = function() {

        if (document.readyState === "complete") {
                var tl = new TimelineMax();

                tl.to($('.loading'), 0.5, {
                    opacity: 0,
                    onComplete: function () {
                        $('.loading').detach(); 

                        // Play Logo animation
                        aniLog.play();

                        // Reveal Login Box
                        introAnimation.delay(2).play();
                    }
                });
                
               



        }
    };

    
    // // Test Loader Animation
    // $('header').click(function(){
        
    //    // changeBackground();
        
        
    // });

    // $('footer').click(function(){
        
    //   //  restartLoader.play(0);
        
        
    // });

    // Expand Login Box
    $loginBox.on('click', function() {
        openLogin.play();
    });

    // Close Login Box
    $loginButton.on('click', function() {
        closeLogin.play();
        revealLoader.timeScale(1.1).delay(1.5).play();
        loaderMove("moveUp1", $('#loader'), 0.5, "50%", "15%", 5);
        //changeBackground();
        revealProfile(5.5);
    });

    $searchButton.on('click', function(){
        scrollToTop();
        hideProfile(0);
        loaderMove("moveDown1", $('#loader'), 0.5, "50%", "50%", 2.5);
        loaderRestarter(3);
        loaderMove("moveUp2", $('#loader'), 0.5, "50%", "20%", 7.3);
        //changeBackground();
        showResults(7.5);

    });

    $('.login-frm').submit(function(e){
        e.preventDefault();
        var name = $(this).find('#name').val();
        
        $('#profile-name').html("Hi "+name);
    });

    $('.search-frm').submit(function(e){
        e.preventDefault();
        var from = $(this).find('#from').val();
        var to = $(this).find('#to').val();
        
        $('#search-display').html('<p>Search Results:</p><p id="search-details">' + from + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="lnr lnr-arrow-right"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + to + '</p>');
    });



    $('.backarrow').on('click', function(){
        scrollToTop();
        hideResults(0);
        loaderMove("moveDown2", $('#loader'), 0.5, "50%", "50%", 0.9);
        loaderRestarter(1.3);
        loaderMove("moveUp3", $('#loader'), 0.5, "50%", "15%", 5.5);
        revealProfile(5.8);
    });



    $('.results').renderData();
    




});