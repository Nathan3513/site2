window.onload = function() {

// Add date to an element with Id "datediv"
d = new Date();
document.getElementById("datediv").innerHTML = d;
document.getElementById("contactform").addEventListener("submit", function(e){
    e.preventDefault();
    //sendmail(MAILURL);
     alert("this is a JS popup dialogue box");
});

};

function changeDate() {
document.getElementById("datediv").innerHTML = "Back to the future!";
};