var main = document.getElementById('mainContainer')

function popUp(text, header) {
    mainPopup = document.getElementById('popUpDiv');
    mainPopup.style.display = 'block';
    mainPopup.style.height = window.innerHeight * .9;
    mainPopup.style.width = window.innerHeight * .9;
    main.style.filter = 'blur(3px)';
    main.style.userSelect = 'none';
}