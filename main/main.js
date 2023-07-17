// Hamburger

const hamburger = document.querySelector('#hamburger')
const navbar = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navbar.classList.toggle('hidden')
})


// Navbar Fixed 

window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top')

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed')
        toTop.classList.add('hidden')
        toTop.classList.remove('flex')
    }
}

// Word Move

const txtElement = ['Web Developer','Web Designer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex)
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 500);

})();

// Klik diluar hamburger

window.addEventListener('click', function (e) {
    if(e.target != hamburger && e.target != navbar) {
        hamburger.classList.remove('hamburger-active')
        navbar.classList.add('hidden')
    }
});

// Dark Mode Toggle

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

    darkToggle.addEventListener('click', function() {
      darkToggle.checked ? html.classList.add('dark') : html.classList.remove('dark');
      darkToggle.checked ? localStorage.theme = 'dark' : localStorage.theme = 'light';
    });

// Switch position mode 

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }