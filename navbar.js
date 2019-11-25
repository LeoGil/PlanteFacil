let isUsuario = (localStorage.getItem('usuario') && localStorage.getItem('usuario') == 'usuario')

document.write(`
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top nav-plante-facil" id="menu">
    <div class="container">
    <a class="navbar-brand" href="home.html">
    <img src="images/logo.png" width="50" height="50" class="d-inline-block align-top" alt=""></a>
    <a class="navbar-brand" href="home.html"> Plante Fácil</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto font-weight-bold">
        ${isUsuario ?
        `<li class="nav-item">
                <a class="nav-link navbar-brand" href="cupons.html"><b>Seu saldo: <span class="badge badge-pill badge-primary"><span id="span_saldo"></span></span></b></a>
            </li>` : ''}
            ${!isUsuario ?
        `<li class="nav-item">
                        <a class="nav-link link-grow" href="admin_index.html">Administrativo</a>
                    </li>` : ''}
            <li class="nav-item">
                <a class="nav-link link-grow" href="mapa.html">Mapa</a>
            </li>
            <li class="nav-item">
                <a class="nav-link link-grow" href="cupons.html">Cupons</a>
            </li>
            <li class="nav-item">
                <a class="nav-link link-grow" href="sobre_nos.html">Nossa idéia</a>
            </li>
            <li class="nav-item">
                <a class="nav-link link-grow" href="contato.html">Contato</a>
            </li>
            <li class="nav-item">
                <a class="nav-link link-grow" href="index.html">Sair</a>
            </li>
        </ul>
    </div>
    </div >
    </nav > `
)