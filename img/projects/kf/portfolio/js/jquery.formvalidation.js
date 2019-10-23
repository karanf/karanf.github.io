function isValidEmail(email) {
    var emailRx = /^[\w\.-]+@[\w\.-]+\.\w+$/;
    return emailRx.test(email);
}
(function($) {
    $.fn.formValidation = function() {
        return this.each(function() {
            var $form = $(this),
                $name = $form.find('#name'),
                $message = $form.find('#message'),
                $email = $form.find('#email'),
                $spam = $form.find('#spam'),
                $reset = $form.find('input[type=reset]'),
                $fields = $form.find('input[type=text], textarea');
            
            var setError = function(errorMessage, $field) {
                    
                    tl.to($field, 0.5, {
                        className: "+=error"
                    });
                    $field.focus();
                    $field.attr("placeholder", errorMessage);
                }

            var emailError = function(errorMessage, $field) {
                var fakeVal = $field.val(),
                    message = fakeVal+" "+errorMessage;
                    
                    tl.to($field, 0.5, {
                        className: "+=error"
                    });
                    $field.focus();
                    $field.val("");
                    $field.attr("placeholder", message);
                }
                //Initialise

            $form.submit(function(e) {
                e.preventDefault();
                $fields.removeClass('error');
                if (!$name.val()) {
                    setError("Knowing your name would be nice", $name);
                } else if (!$email.val()) {
                    setError("How do I email you?", $email);
                } else if (!isValidEmail($email.val())) {
                    emailError("  <- Really? A fake email?", $email);
                } else if (!$message.val()) {
                    setError("Some information here would help me a lot.", $message);
                } else if ($spam.val()) {
                    setError("Die you spamming bastard!", $spam);
                } else {
                    $form.html("Thanks for your message. I'll get back to you shortly.").fadeIn(300);
                    //Send the email
                    var formData = $form.serialize();
                    $.post("send-mail.php", formData, function(sent) {
                        if (sent) {
                            $form.html("Thanks for your message "+ $name.val()+". I'll get back to you shortly.").fadeIn(300);
                        } else {
                            $form.html("The microprocessors on the server are on strike and the email was rejected from being sent. We are trying to diffuse the situation. Please try sending the message again later").fadeIn(300);
                        }
                    }, "json");
                }
            });
            $reset.on('click', function() {
                $name.attr("placeholder", "Your Name");
                $email.attr("placeholder", "Your Email");
                $message.attr("placeholder", "Your Message");
                tl.to($fields, 0.5, {
                    className: "-=error"
                });

            })
        });
    }
})(jQuery);