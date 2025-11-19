const botaoFiltrar = document.querySelector('.btn-filtrar');

botaoFiltrar.addEventListener('click', function () {
    
    const categoriaSelecionada = document.querySelector('#categoria').value;
    const precoMaximoSelecionado = document.querySelector('#preco').value;
    
    const cartas = document.querySelectorAll('.cartas li');
    cartas.forEach(function (carta) {        

        const categoriaCarta = carta.dataset.categoria || "";
        const precoCarta = parseFloat(carta.dataset.preco);

        let mostrarCarta = true;


        const temFiltroDeCategoria = categoriaSelecionada !== "";

        const cartaNaoBateComFiltro = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

        const temFiltroDePreco = precoMaximoSelecionado !== "";

        const precoMaximo = parseFloat(precoMaximoSelecionado);

        const cartaNaoBateComFiltroDePrecoMaximo = (precoCarta) > parseFloat(precoMaximo);

        if (temFiltroDeCategoria && cartaNaoBateComFiltro) {
            mostrarCarta = false;
        }

        if (temFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo) {
            mostrarCarta = false;
        }

        if (mostrarCarta) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        } else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }

    })
   

});