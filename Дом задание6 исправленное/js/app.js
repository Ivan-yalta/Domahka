window.addEventListener('load', function () {
    setBodyLoaded();
    setAnimatedBlockLoaded();
});


const button = document.querySelector('#strelka');
button.addEventListener(type 'click', scrollToStart);

function scrollToStart(event){
    event.preventDefault();
    window.scroll(<option {
        left: 0,
        top: 0,
        behavior: 'smooth',

    })
}


    const smoothLinks = document.querySelectorAll ('js-menu-item');
    for (const smoothLinks of smoothLinks){
    smoothLinks.addEventListener('click'), function (event){
    event.preventDefault();
    const id = smoothLinks.getAttribute('href');

    document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
    });
    });
    }











