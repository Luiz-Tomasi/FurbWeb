import './styles.css';


function Header() {

    const hamburguer = document.querySelector(".hamburguer");
    const navMenu = document.querySelector(".nav-menu");

    const handleMenuClick = () => {
        const hamburguer = document.querySelector(".hamburguer");
        const navMenu = document.querySelector(".nav-menu");
        hamburguer.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    // if(localStorage.getItem("username") == "" || localStorage.getItem("username") == null || localStorage.getItem("username") == undefined ) {
    //     document.getElementById("usernameHeader").innerHTML = "Usuario não authenticado";
    // } else {
    //     document.getElementById("usernameHeader").innerHTML = localStorage.getItem("username");
    // }



    return (
        <header>
            <nav class="navbar">
                <a href="/index.html" class="logo">Logo</a>
                <ul class="nav-menu">
                    <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="/funcionarios" class="nav-link">Funcionarios</a></li>
                    <li class="nav-item"><a href="/cadastro2" class="nav-link">CADASTRO2</a></li>
                    <li class="nav-item-user"><a href="/" class="nav-link" id="usernameHeader">Luiz Cirilo Tomasi Neto</a> <span><img class="icon" src="https://i.pinimg.com/736x/43/9e/3b/439e3b0ab3af60282120774ff2144391.jpg" alt="chopper-icon"></img></span> </li>
                </ul>
                <div class="hamburguer" onClick={handleMenuClick}>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
