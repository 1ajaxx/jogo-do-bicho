// Variáveis globais
let saldo = 10.00;
let valorAposta = 0.50;
let historico = [];
let bichoSelecionado = null;

// Função para escolher um bicho aleatoriamente
function escolherBicho() {
    const bichos = ['peru', 'macaco', 'vaca', 'boi'];
    return bichos[Math.floor(Math.random() * bichos.length)];
}

// Função para selecionar um bicho
function selecionarBicho(bicho) {
    // Remover seleção de todos os botões
    document.querySelectorAll('.bichos button').forEach(button => {
        button.classList.remove('selected');
    });

    // Selecionar o botão do bicho escolhido
    const button = document.querySelector(`.bichos button[data-bicho="${bicho}"]`);
    button.classList.add('selected');

    // Atualizar bicho selecionado
    bichoSelecionado = bicho;
}

// Função para confirmar a aposta
function confirmarAposta() {
    // Verificar se um bicho foi selecionado
    if (!bichoSelecionado) {
        alert('Selecione um bicho antes de apostar!');
        return;
    }

    // Obter o valor da aposta
    const valor = parseFloat(document.getElementById('valorAposta').value);

    // Verificar se o valor da aposta é válido
    if (valor < 0.5 || valor > 10) {
        alert('O valor da aposta deve estar entre $0.50 e $10.00!');
        return;
    }

    // Atualizar o saldo
    saldo -= valor;
    document.getElementById('saldo').innerText = `Saldo: $${saldo.toFixed(2)}`;

    // Escolher um bicho aleatório
    const bichoSorteado = escolherBicho();

    // Mostrar o bicho sorteado
    document.getElementById('resultado').innerText = `O bicho escolhido foi: ${bichoSorteado}`;

    // Verificar se o palpite está correto
    if (bichoSelecionado === bichoSorteado) {
        const ganho = valor * 2;
        saldo += ganho;
        document.getElementById('resultado').innerText += `\nParabéns! Você ganhou $${ganho.toFixed(2)}!`;
    } else {
        document.getElementById('resultado').innerText += '\nQue pena! Você não acertou.';
    }

    // Atualizar histórico
    historico.push({
        bicho: bichoSelecionado,
        aposta: valor.toFixed(2),
        resultado: bichoSelecionado === bichoSorteado ? 'ganhou' : 'perdeu'
    });

    // Atualizar visualização do saldo
    document.getElementById('saldo').innerText = `Saldo: $${saldo.toFixed(2)}`;

    // Mostrar botão de jogar novamente
    document.getElementById('jogarNovamente').style.display = 'block';
}

// Função para mostrar ou ocultar o histórico
function toggleHistorico() {
    const extrato = document.querySelector('.extrato');
    extrato.style.display = extrato.style.display === 'block' ? 'none' : 'block';

    // Atualizar conteúdo do histórico
    const conteudoHistorico = document.querySelector('.conteudo-historico');
    conteudoHistorico.innerHTML = '';
    historico.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.bicho} - Aposta: $${item.aposta} - Resultado: ${item.resultado}`;
        conteudoHistorico.appendChild(div);
    });
}
// Função para selecionar um bicho
function selecionarBicho(bicho) {
    // Remover seleção de todos os botões
    document.querySelectorAll('.bichos button').forEach(button => {
        button.classList.remove('selected');
    });

    // Selecionar o botão do bicho escolhido
    const button = document.querySelector(`.bichos button[data-bicho="${bicho}"]`);
    button.classList.add('selected');

    // Atualizar bicho selecionado
    bichoSelecionado = bicho;
}
