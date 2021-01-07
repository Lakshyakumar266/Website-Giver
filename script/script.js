console.log('temp');

function closer(btnId, PlaceId) {
    let btn = document.getElementById(btnId)
    let place = document.getElementById(PlaceId)

    btn.addEventListener('click', () => {
        if (place.style.display != 'none') {
            place.style.display = 'none';
        }
        else {
            place.style.display = 'block';
        }
    })
}

let buttons_div = document.getElementsByClassName('data-hande');
for (let x = 0; x < buttons_div.length; x++) {
    const element = buttons_div[x];
    closer(`btn${x+1}`, `btn-close${x+1}`);
}