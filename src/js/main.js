let buttons = document.querySelectorAll('.js-clipboard');
let popup = document.querySelector('.popup-window');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        navigator.clipboard.writeText(e.target.getAttribute('alt')).then(() => {
            popup.style.visibility = "visible";
            popup.style.opacity = "1";
            document.execCommand("copy");
            setTimeout(() => {
                popup.style.opacity = "0";
                popup.style.visibility = "hidden";
            }, 3000);
        });
    });
});