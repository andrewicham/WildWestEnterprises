/*
    Filename: CustomValidation.js
    Written by: Andrew Chambers
    Purpose: final project form with custom validation added
    Date: 12/2/2018
    Modification History: Original Build
    Last Modified: 12/2/2018
*/
$(document).ready(function(){
    
    $( "input[type='submit']" ).button();
    $( "input[type='reset']" ).button();

    var availableTags = [
        "Ten-gallon hats",
        "Rattlesnake Oil",
        "Covered Wagons",
        "Carriages",
        "Horses",
        "Cowboy",
        "Train",
        "Steam Powered",
        "Snake",
        "Oil"
    ];

    $( "#autocomplete" ).autocomplete({
        source: availableTags
    });

    $( "#radioset" ).buttonset();

    $( "#controlgroup" ).controlgroup();

    $( "#tabs" ).tabs();

    $( "#datepicker" ).datepicker({
        inline: true
    });

    /*****
    Purpose: defines behavior for slider functionality. 
    Parameters: N/A
    Return: N/A
    *****/
    $(function() {								
        $( "#myslider" ).slider({
            range: true,
            min: 0,
            max: 200,
            values: [ 25, 75 ],
            /*****
            Purpose: attaches an event to the slider if the slider is moved.
            Parameters: N/A
            Return: N/A
            *****/					
            slide: function( event, ui ) { //when the slider is moved, lowest and/or highest will have new values
                var lowest = "$" + ui.values[ 0 ]; //ui.values[0] is the lower value of the slider, ui.values[1] is the upper value
                var highest = "$" + ui.values[ 1 ];
                $( "#sliderOutput" ).val(lowest + " - " + highest );
            }
        }); 
        //outputs to the sliderOutput div, and dynamically changes when slider is moved
        $( "#sliderOutput" ).val( $( "#myslider" ).slider( "values", 0 ) +
            " - " + $( "#myslider" ).slider( "values", 1 ) );
    }); 

    
    $.validator.setDefaults({
        /*****
        Purpose: uses the submitHandler object, and collects all user input and stores them into variables, and outputs a permutation of the input to pageOutput div
        Parameters: N/A
        Return: N/A
        *****/
        submitHandler: function() {
            //storing all input values from forms into variables
            var sOil = $("#snakeOil");
            var hat = $("#hats");
            var wag = $("#wagons");
            var sma = $("#small");
            var med = $("#medium");
            var lar = $("#large");
            var xL = $("#xLarge");

            var date = $("#datepicker").val();
            var keyword = $("#autocomplete").val();

            var customerEmail = $("#customerEmail").val();
            var customerPassword = $("#customerPassword").val();
            var telephone = $("#customerTel").val();
            var message = $("#customerMessage").val();

            var outputMessage = "<br>You Searched: <br>" + "<br>Categories: ";
            
            //if hat box is checked, add some output to outputMessage
            if($(sOil).is(':checked'))
            {
                //after each iteration, if one of these is checked, it will add more output to outputMessage
                var oil = "<br>Snake oil";
                outputMessage = outputMessage + oil;
            }
            //same as above for the rest of these if statements
            if($(hat).is(':checked'))
            {
                var hats = "<br>hats";
                outputMessage = outputMessage + hats;
            }
            if($(wag).is(':checked'))
            {
                var wagons = "<br>wagons";
                outputMessage = outputMessage + wagons;
            }
            var outputMessage = outputMessage + "<br><br>Size: ";
            if($(sma).is(':checked'))
            {
                var small = "<br>small";
                outputMessage = outputMessage + small;
            }
            if($(med).is(':checked'))
            {
                var medium = "<br>medium";
                outputMessage = outputMessage + medium;
            }
            if($(lar).is(':checked'))
            {
                var large = "<br>large";
                outputMessage = outputMessage + large;
            }
            if($(xL).is(':checked'))
            {
                var xLarge = "<br>X-Large";
                outputMessage = outputMessage + xLarge;
            }
            //gets the lowest and highest values of the slider
            var lowervalue = $("#myslider").slider("values")[0];
            var uppervalue = $("#myslider").slider("values")[1];
            //split this up for better readability
            outputMessage = outputMessage + "<br><br>Price Range: $" + lowervalue + " - $" + uppervalue;
            outputMessage = outputMessage + "<br><br>Ship Date: <br>" + date + "<br><br>keyword:<br>" + keyword;
            outputMessage = outputMessage + "<br><br>Your search returned no results."
            outputMessage = outputMessage + "<br><br>Your account information: <br>email: " + customerEmail + "<br>password: " + customerPassword + "<br>Phone number:" + telephone;

            //if the user did not leave a message, this will not execute
            if(message != "")
            {
                outputMessage = outputMessage + "<br><br>Your message for us: " + message;
            }

            $("#pageOutput").html(outputMessage);
            
        } 
    }); 
    //the following sets a series of rules with enforcing messages on each form value that requires user keyboard input
    $("#form1").validate({             
        rules: {
            autocomplete: {
                required: true,
                maxlength: 30
            },
            datepicker: {
                required: true,
                date: true
            },
            customerEmail: {
                required: true,
                email: true
            },
            customerPassword: {
                required: true,
                minlength: 5
            },
            customerTel: {
                required: true,
                digits: true,
                maxlength: 10
            },
            customerMessage: {
                required: false, //set this to false, but if there is an entry, must be 5 characters or longer
                minlength: 5
            }
        },
        //defines a series of messages if any of the above rules are violated
        messages: {
            datepicker: {
                required: "Please dont leave the date field blank",
                date: "Please enter a valid date"
            },
            autocomplete: {
                required: "Please fill out the keywords field",
                maxlength: $.validator.format("Can't have more than {0} characters")
            },
            customerEmail: {
                required: "Please fill out email field",
                email: "Enter a valid email address!"
            },
            customerPassword: {
                required: "Please fill out password field",
                minlength: $.validator.format("Must have at least {0} characters")
            },
            customerTel: {
                required: "Please fill out telephone field",
                digits: "You must enter a valid phone number",
                maxlength: 10
            },
            customerMessage: {
                minlength: $.validator.format("Must have at least {0} characters")
            }
        }
    }); 
});