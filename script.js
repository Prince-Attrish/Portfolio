var nav = document.querySelector('nav');
window.addEventListener('scroll', function(){
    if (window.pageYOffset > 50) {
        nav.classList.add('bg-dark', 'shadow')
    } else {
        nav.classList.remove('bg-dark', 'shadow')
    }
})

// ------------- Change title when user leaves ----------->

var docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Prince ~ See ya!";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})