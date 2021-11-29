function hamburgerOpean() {
    console.log('hamburger');

    var menuHight = document.getElementById('navul');
    var navigation = document.getElementById('navigation');

    menuHight.classList.toggle('nav-list');
    navigation.classList.toggle('burger');
}