    
const tabuleiro = document.querySelectorAll(".celula");
const mensagem = document.getElementById("mensagem");
const reiniciar = document.getElementById("reiniciar");

let jogadorAtual = "X";
let jogoAtivo = true;
let estadoDoJogo = ["", "", "", "", "", "", "", "", ""];

// Combinacões vencedoras
const combinacoesVencedoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Atualiza o tabuleiro
function verificarVencedor() {
  for (const condicao of combinacoesVencedoras) {
    const [a, b, c] = condicao;
    if (
      estadoDoJogo[a] &&
      estadoDoJogo[a] === estadoDoJogo[b] &&
      estadoDoJogo[a] === estadoDoJogo[c]
    ) {
      mensagem.textContent = `Jogador ${estadoDoJogo[a]} venceu!`;
      jogoAtivo = false;
      return;
    }
  }

  if (!estadoDoJogo.includes("")) {
    mensagem.textContent = "Empate!";
    jogoAtivo = false;
  }
}

// Clique em uma célula
function cliqueCelula(e) {
  const index = e.target.dataset.index;

  if (!estadoDoJogo[index] && jogoAtivo) {
    estadoDoJogo[index] = jogadorAtual;
    e.target.textContent = jogadorAtual;

    verificarVencedor();

    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    if (jogoAtivo) mensagem.textContent = `Vez do jogador ${jogadorAtual}`;
  }
}

// Reinicia o jogo
function reiniciarJogo() {
  estadoDoJogo = ["", "", "", "", "", "", "", "", ""];
  jogadorAtual = "X";
  jogoAtivo = true;
  mensagem.textContent = "Vez do jogador X";

  tabuleiro.forEach((celula) => (celula.textContent = ""));
}

// Adiciona eventos
tabuleiro.forEach((celula) => celula.addEventListener("click", cliqueCelula));
reiniciar.addEventListener("click", reiniciarJogo);
