var comprar_arvore = function (valor) {
    if (localStorage.saldo == undefined) {
        localStorage.setItem('saldo', 0)
    } else {
        localStorage.setItem('saldo', parseInt(localStorage.saldo) + parseInt(valor))
    }

    $('#span_saldo').html(localStorage.saldo)
}