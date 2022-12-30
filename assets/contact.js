var form = document.querySelector(".contact-form");
var Name = document.getElementById('name');
var email = document.getElementById('email');
var message = document.getElementById('message');

// <------- Make Contact form work -------->

(function(){
    emailjs.init("9F70tr6Fry0QSXWpW"); // EmailJs Public Key
})();

form.addEventListener('submit', (e) => {
    e.preventDefault(); // auto-submit / actions stop

    var sendBtn = document.querySelector('.sendBtn'); // Button

    sendBtn.innerHTML = "Sending..."; // Button Inner Text change
    sendBtn.style.cursor ="wait"; // cursor change to wait

    // parameters for the email
    var params = {
        from_name: Name.value,
        email_id: email.value,
        message: message.value
    }
    console.log(params);

    var serviceID = "service_cp2aqpe";
    var templateID = "template_gxqaa0q";

    //<--------- Sending Mail ---------->
    emailjs.send(serviceID,templateID,params).then((res) => {
        sendBtn.innerHTML = "Send";
        sendBtn.style.cursor ="pointer";
        form.reset(); // reset form
        // Success Message
        alert("Details : " + res.text + "\n✅Message sent sucessfully! 😇");
    }, 
    (err) => {
        sendBtn.innerHTML = "Send";
        sendBtn.style.cursor ="pointer";
        // Failed Message
        alert("⚠️Failed! \nDue to "+ err.text);
    })
})