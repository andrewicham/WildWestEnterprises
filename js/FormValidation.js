$(document).ready(function(){
//my own functions are at the bottom of the page

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
    values: [25 ,75 ],
    slide: function(){
        lowest = "Lowest price: $" + $("#myslider").slider("values")[0];
        $("#lower").html(lowest);
        highest = "Highest price: $" + $("#myslider").slider("values")[1];
        $("#higher").html(highest);
    }
});






$( "#progressbar" ).progressbar({
	value: 20
});

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


// Hover states on the static widgets
$( "#dialog-link, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
);

//
$.validator.setDefaults({
    submitHandler: function() {
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

    var customerEmail = new String($("#customerEmail").val());
    var customerPassword = $("#customerPassword").val();
    var telephone = new String($("#customerTel").val());
    var message = new String($("#Message").val());
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
    var strMessage = "<br>Your message for us: <br>" + message;
    var strEmailMsg = "<br>Your email address: <br>" + customerEmail;
    
    var strPasswordMsg = "<br> Your Password: <br>" + customerPassword;
    var strTelephoneMsg = "<br> Your Phone Numbers: <br>" + telephone;

    var formPassed = "<br> Form Submitted and validated";
    outputMessage = outputMessage + strMessage + strEmailMsg + strTelephoneMsg + strPasswordMsg + formPassed;
    
    
    $("#output").html(outputMessage);
    

    return false;

}

});

$( "#form2" ).validate();



});
