var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 50) {
        nav.classList.add('bg-dark', 'shadow')
    } else {
        nav.classList.remove('bg-dark', 'shadow')
    }
})

// ------------- Change title when user leaves ----------->

var docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Prince ~ See ya! 👋";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})

var typed = new Typed(".typing", {
    strings: ["Student", "Developer", "Fresher"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// <---------------- Page links ---------------->

function toAbout() {
    location.href='about.html';
}
function toContact() {
    location.href='contact.html';
}

// <---------------- Links to my Social Accounts ---------------->

function linkedinLink() {
    window.open("https://www.linkedin.com/in/prince-sharma-3b3716227","_blank");
}
function facebookLink() {
    window.open("https://www.facebook.com/prince.attrish.5?mibextid=ZbWKwL","_blank");
}
function githubLink() {
    window.open("https://github.com/Prince-Attrish/","_blank");
}
function instaLink() {
    window.open("https://instagram.com/___prince_sharma?igshid=YmMyMTA2M2Y=","_blank");
}

// <---------------- Links to my Certificates ---------------->

function javaCert() {
    location.href='documents/Java-Certificate.pdf';
}
function htmlCert() {
    location.href='documents/Html-Certificate.pdf';
}
function cssCert() {
    location.href='documents/css.pdf';
}
function noCert() {
    alert('Currently No Certificate Avaliable. Sorry... 😭');
}

// <---------------- Links to my Personal Details ---------------->

function mailto() {
    location.href='mailto: vs3031999@gmail.com?subject=Portfolio Visitor';
}
function tel() {
    location.href='tel: +919910254105';
}
function myAlertMsg() {
    alert("Sorry... I can't share my location");
}