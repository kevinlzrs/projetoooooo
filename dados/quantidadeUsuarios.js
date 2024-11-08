async function quantidadedeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
    const res = await fetch(url);
    const dados = await res.json(res)
    const nomeDasRedes = Object.keys(dados)
    const quantidadedeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadedeUsuarios,
            type: 'bar'
        }
    ]
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-conteiner').appendChild(grafico)
    Plotly.newPlot(grafico, data)
}

quantidadedeUsuarios()