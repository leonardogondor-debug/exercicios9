function inserirOperador(value) {
    document.getElementById('display').value += value;
}

const limpaDisplay = () => document.getElementById('display'). value = '';

function calcular() {
    try {
        const resultado = eval(document.getElementById('display').value);
        document.getElementById('display').value = resultado;
    } catch {
        document.getElementById('display').value = 'Erro';
    }
}