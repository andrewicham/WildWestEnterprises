$(document).ready(function(){
//my own functions are at the bottom of the page



$( "#accordion" ).accordion();



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



$( "button" ).button();
$( "#button-icon" ).button({
	icon: "ui-icon-gear",
	showLabel: false
});




$( "#radioset" ).buttonset();



$( "#controlgroup" ).controlgroup();



$( "#tabs" ).tabs();



$( "#dialog" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Ok",
			click: function() {
				$( this ).dialog( "close" );
			}
		},
		{
			text: "Cancel",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

// Link to open the dialog
$( "#dialog-link" ).click(function( event ) {
	$( "#dialog" ).dialog( "open" );
	event.preventDefault();
});



$( "#datepicker" ).datepicker({
	inline: true
});


//altered this a bit to add a larger range and to display the current value
$( "#myslider" ).slider({
    range: true,
    min: 1,
    max: 200,
    values: [ 25, 75 ],
    slide: function(event, ui){}
});
$( "#mySlider" ).on( "slide", function( event, ui ) {
    lower = $('#slider').slider("values")[0]; // for slider with single knob or lower value of range
    higher = $('#slider').slider("values")[1];
    $("#lower").html(lower);
    $("#upper").html(higher);
} );


$( "#progressbar" ).progressbar({
	value: 20
});



$( "#spinner" ).spinner();



$( "#menu" ).menu();



$( "#tooltip" ).tooltip();



$( "#selectmenu" ).selectmenu();


// Hover states on the static widgets
$( "#dialog-link, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
);


//My own added functions are below:
$( "#submitCustomer" ).click( submitCustomer );
function submitCustomer(){
    var message = new String($("#Message").val());
    var email = new String($("#customerEmail").val());
    var password = new String($("#customerPassword").val());
    var telephone = new String($("#customerTel").val());
    var thankYou = "<br>Thank you for your comments, " + email + "! our team will contact you at " + telephone + " as soon as we are able to. <br><br>Message: " + message;
    $("#output2").html(thankYou);
};



$( "#submitForm" ).click( submitForm );
function submitForm(){
    //as per the assignment instrucitons, I created a variable for all of the below items.
    var outputMessage = new String("Your search turned up no results with the following parameters: <br>");
    
    var lowervalue = $("#myslider").slider("values")[0];
    var uppervalue = $("#myslider").slider("values")[1];
    var maxprice = "<br>Highest Price: $" + uppervalue;
    var minprice = "<br><br>Lowest Price: $" + lowervalue;
    
    var sOil = $("#snakeOil");
    var hat = $("#hats");
    var wag = $("#wagons");
    var sma = $("#small");
    var med = $("#medium");
    var lar = $("#large");
    var xL = $("#xLarge");
    
    var date = new String($("#datepicker").val());
    var key = new String($("#autocomplete").val());
    var keywords = "<br>Keywords: <br>" + key;
    var pickupDate = "<br><br>Pickup Date: " + date;
    var outputMessage = outputMessage + keywords + pickupDate;

    var outputMessage = outputMessage + minprice + maxprice + "<br><br>Categories: ";
    

    //all of the following if statements will check if the variable is checked, and if so, add a message to the variable outputMessage
    if($(sOil).is(':checked'))
    {
        var oil = "<br>Snake oil";
        outputMessage = outputMessage + oil;
    }
    
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
    $("#output").html(outputMessage);
    
    
}

});