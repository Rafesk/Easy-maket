var animationSpeed = 1000;
disabledClick = false;
function begin(sID, sD) {
    if (disabledClick === true) {
        return false;
    }
    disabledClick = true;
    setTimeout(function () {
        disabledClick = false;
    }, animationSpeed);

    start(sID, sD);
}
function start(sID, sD) {
    var cS = document.getElementById(sID);
    var sliders = cS.getElementsByClassName('slider');
    for (var i = 0; i < sliders.length; i++) {
        if (sliders[i].classList.contains('slider_on')) {
            sliders[i].classList.remove('slider_on');
            sliders[i].classList.add('slider_off');

            if (sD == 'l') {
                if (i == 0) {
                    i = sliders.length - 1;
                }
                else {
                    i--;
                }
            }
            else {
                if (i == sliders.length - 1) {
                    i = 0;
                }
                else {
                    i++;
                }
            }
            sliders[i].classList.remove('slider_off');
            sliders[i].classList.add('slider_on');
            break;
        }
    }
}