var form = document.querySelector(".contact-form");
var Name = document.getElementById('name');
var email = document.getElementById('email');
var message = document.getElementById('message');

// <------- Make Contact form validate and send mail -------->

form.addEventListener('submit', (e) => {
    e.preventDefault(); // auto-submit / actions stop
    
    document.querySelector('.name').classList.add('d-none');
    document.querySelector('.email').classList.add('d-none');
    document.querySelector('.message').classList.add('d-none');
    
    if (Name.value === null || Name.value === "") {
        var msg = document.querySelector('.name')
        return emptyField(msg);
    } 
    else {
        var msg = document.querySelector('.email')
        if (email.value === null || email.value === "") {
            return emptyField(msg);
        } 
        else if(!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            return notmatch(msg);
        } 
        else {
            var msg = document.querySelector('.message')
            if(message.value === null || message.value === "") {
                return emptyField(msg);
            }
            else {
                document.querySelector('.message').classList.add('d-none');
                SendMail();
            }
        }
    }
})

function emptyField(e)
{
    e.innerHTML = "***Please fill this field";
    e.classList.remove('d-none');
}

function notmatch(e) {
    e.innerHTML = "***Please enter valid address"
    e.classList.remove('d-none');
}

// <----- Send Mail if all inputs are valid ------->

function SendMail() {
    (function(){
        emailjs.init("9F70tr6Fry0QSXWpW"); // EmailJs Public Key
    })();
    
    // Change Btn Text on Click 
    var sendBtn = document.querySelector('.sendBtn');
    sendBtn.innerHTML = "Sending...";
    sendBtn.style.cursor ="wait";
    
    // parameters for the email
    var params = {
        from_name: Name.value,
        email_id: email.value,
        message: message.value
    }
    
    var serviceID = "service_cp2aqpe";
    var templateID = "template_gxqaa0q";
    
    //<--------- Sending Mail ---------->
    emailjs.send(serviceID,templateID,params).then((res) => {
        sendBtn.innerHTML = "Send";
        sendBtn.style.cursor ="pointer";
        form.reset(); // reset form
        // Success Message
        alert("✅ Message sent sucessfully! 😇");
    }, 
    (err) => {
        sendBtn.innerHTML = "Send";
        sendBtn.style.cursor ="pointer";
        // Failed Message
        alert("⚠️ Failed!!! \nDue to "+ err.text);
    }) 
}