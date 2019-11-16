var comprar_arvore = function (valor) {
    if (localStorage.saldo == undefined) {
        localStorage.setItem('saldo', 0)
    } else {
        localStorage.setItem('saldo', parseInt(localStorage.saldo) + parseInt(valor))
    }

    $('#span_saldo').html(localStorage.saldo)
}

function loadPage(page) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', page, true);
    xhr.onreadystatechange = function () {
        document.getElementById('corpo_pill').innerHTML = this.responseText;
        document.documentElement.scrollTop = 0;
    };
    xhr.send();
}