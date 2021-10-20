function slideshow(){
    var x= document.getElementById('check-class');
    if(x.style.display === "none"){
     x.style.display="block";
    }
    else{
     x.style.display="none"; 
    }
  }



var options = {
	"key": "rzp_test_VT7Mz8Zg5qMbKB",
	"amount": 2000, // Example: 2000 paise = INR 20
	"name": "MERCHANT name",
	"description": "description",
	"image": "img/logo.png",// COMPANY LOGO
	"handler": function (response) {
		console.log(response);
		// AFTER TRANSACTION IS COMPLETE YOU WILL GET THE RESPONSE HERE.
	},
	"prefill": {
		"name": "ABC", // pass customer name
		"email": 'A@A.COM',// customer email
		"contact": '+919123456780' //customer phone no.
	},
	"notes": {
		"address": "address" //customer address 
	},
	"theme": {
		"color": "#15b8f3" // screen color
	}
};
console.log(options);
var propay = new Razorpay(options);
propay.open();