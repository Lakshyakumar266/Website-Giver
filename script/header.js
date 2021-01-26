document.querySelector('nav').innerHTML = `
    <div class="navigation flex flex-center" id="navigation">
        <div class="logo">
            <a href="#">
                <img src="static/images/logoprev.png" alt="Logo">
            </a>
        </div>
        <div class="hamburger">
            <a onclick="hamburgerOpean();">
                <i class="fa fa-bars"></i>
            </a>
        </div>
        <ul class="flex" id="navul">
            <li class="scroll"><a href="index.html" class="links">Home</a></li>
            <li class="scroll"><a href="games.html" class="links">Games</a></li>
            <li class="scroll"><a href="index.html" class="links">Websites</a></li>
            <li class="scroll"><a href="contact.html" class="links">Contact</a></li>
        </ul>
    </div>
`;