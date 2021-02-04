document.querySelector('nav').innerHTML = `
    <div class="navigation flex flex-center" id="navigation">
        <div class="logo">
            <a href="index.html">
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

// footer
document.querySelector('footer').innerHTML = `
    Copyright &copy; all Rights reserved &#8205; <span id="year-holder"></span>
    <span class="space">&#8205; &#8205; | &#8205; &#8205;</span>
    <!-- Images Copyright -->
    <div>
        Vector Images From -<a href="https://www.freepik.com/vectors" target="_blank"> freepik.com</a>
    </div>
    <br>
    <div>
        <span class="and"> &#8205; &#8205; With &#8205; &#8205; </span>
        <a href="https://www.freepnglogos.com" target="_blank">freepnglogos.co</a>
        <span class="and"> &#8205; &#8205; And &#8205; &#8205; </span>
        <a href="https://secure.logomaker.com/" target="_blank">logomaker.com</a>
    </div>
`;

$(window).on('scroll', () => {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
        $('.scroll').addClass('black');
        $('.links').addClass('black')
    }
    else {
        $('.scroll').removeClass('black');
        $('nav').removeClass('black');
        $('.links').removeClass('black')
    }
})