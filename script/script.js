console.log('temp');

function closer(btnId, PlaceId) {
    let btn = document.getElementById(btnId)
    let place = document.getElementById(PlaceId)

    btn.addEventListener('click', () => {
        if (place.style.display != 'none') {
            place.style.display = 'none'
            
        }
        else {
            place.style.display = 'block'
        }
    })
}
closer('btn1', 'btn-close1');
closer('btn2', 'btn-close2');
closer('btn3', 'btn-close3');
closer('btn4', 'btn-close4');
closer('btn5', 'btn-close5');
closer('btn6', 'btn-close6');
closer('btn7', 'btn-close7');
closer('btn8', 'btn-close8');
closer('btn9', 'btn-close9');
closer('btn10', 'btn-close10');