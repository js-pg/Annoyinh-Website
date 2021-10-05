var main = document.getElementById('mainContainer')

function popUp(text, header, toggle) {

    mainPopup = document.getElementById('popUpDiv');
    mainPopupHeader = document.getElementById('popUpHeader');
    mainPopupText = document.getElementById('popUpText');

    mainPopup.style.height = window.innerHeight * .9;
    mainPopup.style.width = window.innerHeight * .9;

    if(toggle === 'enable'){

    mainPopup.style.display = 'block';
    main.style.filter = 'blur(3px)';
    main.style.userSelect = 'none';

    } else if(toggle === 'disable') {
        main.style.filter = 'none';
        mainPopup.style.display = 'none';
        main.style.userSelect = 'none';
    }



}