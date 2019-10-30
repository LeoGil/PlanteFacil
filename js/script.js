$('#btn_comprar').click(function () {
    if (localStorage.saldo == undefined) {
        localStorage.setItem('saldo', 1000)
    } else {
        localStorage.setItem('saldo', parseInt(localStorage.saldo) + parseInt(1000))
    }

    $('#span_saldo').html(localStorage.saldo)
})