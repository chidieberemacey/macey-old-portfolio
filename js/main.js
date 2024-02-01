let btn = document.getElementById("themeBtn");

btn.onclick = function(){
    if (document.body.classList.toggle('darkTheme')) {
        document.querySelector('#btnText').innerHTML = 'Light'
    } else {
        document.querySelector('#btnText').innerHTML = 'Dark'
    }
}

const header = document.querySelector('header');

window.addEventListener ('scroll', function(){
    header.classList.toggle('headerNav', window.scrollY > 0)
})


let menu = document.querySelector('#menuIcon');
let navlist = document.querySelector('.navList');

menu.onclick = () => {
    // Type in Cancel Icon class
    menu.classList.toggle('bx-menu'); 
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    // Type in Cancel Icon class
    menu.classList.remove('bx-menu'); 
    navlist.classList.remove('active');
};

const sr = ScrollReveal ({
    distance: '45px',
    duration: 2700,
    reset: true
});

sr.reveal('.content',{delay:350, origin:'left'})
sr.reveal('.imageBox',{delay:350, origin:'right'})

sr.reveal('.aboutMe, .portfolio, .sectTwo, .cTa, .contact',{delay:200, origin:'bottom'});