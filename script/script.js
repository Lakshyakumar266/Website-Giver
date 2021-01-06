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
closer('btn11', 'btn-close11');
// closer('btn12', 'btn-close12');
// closer('btn13', 'btn-close13');
// closer('btn14', 'btn-close14');
// closer('btn15', 'btn-close15');
// closer('btn16', 'btn-close16');
// closer('btn17', 'btn-close17');
// closer('btn18', 'btn-close18');
// closer('btn19', 'btn-close19');
// closer('btn20', 'btn-close20');
// closer('btn21', 'btn-close21');
// closer('btn22', 'btn-close22');