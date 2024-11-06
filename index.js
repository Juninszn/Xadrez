lass Tabuleiro {
    constructor() {
        this.nome = "Tabuleiroo;"

        this.tabuleiro = [];
        for (let linha=0; linha < 8; linha++) {
            this.tabuleiro[linha] = [];
            for (let coluna = 0; coluna < 8; coluna++) {
                this.tabuleiro[linha][coluna] = new Casa(linha, coluna);
            }
        }
        console.log(this.tabuleiro);
    }

    colocarPeca(peca, linha, coluna) {
        const casa = this.tabuleiro[linha][coluna];
        casa.elementoHtml.innerHTML = peca.simbolo;
    }
}

class Casa {
    constructor(linha, coluna) {
        this.linha = linha;
        this.coluna = coluna;
        this.peca = null;

        this.elementoHtml = document.createElement('div');
        this.elementoHtml.classList.add('casa');

        if((linha + coluna) % 2 == 0) {
            this.elementoHtml.classList.add('clara')
        } else {
            this.elementoHtml.classList.add('escura')
        }
        document.getElementById('tabuleiro').appendChild(this.elementoHtml);
        console.log("foi");
    }
}

class Peca {
    constructor(cor, linha, coluna) {
        this.cor = cor;
        this.linha = linha;
        this.coluna = coluna;
        this.simbolo = "";
    }

    movimentosPossiveis() {
        return [];
    }

    moverPara(novaLinha, novaColuna) {
        this.linha = novaLinha;
        this.coluna = novaColuna;
    }
}

class Peao extends Peca {
    constructor(cor, linha, coluna) {
        super(cor, linha,coluna);
        this.simbolo = cor === 'branca' ? '&#9823;' : '&#9823;';
    }
}

class Torre extends Peca {
    constructor(cor, linha, coluna) {
        super(cor, linha,coluna);
        this.simbolo = cor === 'branca' ? '&#9814;' : '&#9820;';
    }
}

class Cavalo extends Peca {
    constructor(cor, linha, coluna) {
        super(cor, linha,coluna);
        this.simbolo = cor === 'branca' ? '&#9816;' : '&#9822;';
    }
}

class Bispo extends Peca {
    constructor(cor, linha, coluna) {
        super(cor, linha,coluna);
        this.simbolo = cor === 'branca' ? '&#9815;' : '&#9821;';
    }
}

class Rei extends Peca {
    constructor(cor, linha, coluna) {
        super(cor, linha,coluna);
        this.simbolo = cor === 'branca' ? '&#9812;' : '&#9818;';
    }
}

class Rainha extends Peca {
    constructor(cor, linha, coluna) {
        super(cor, linha,coluna);
        this.simbolo = cor === 'branca' ? '&#9813;' : '&#9819;';
    }
}

const tabuleiro = new Tabuleiro();

peao0 = new Peao('branca', 1, 0);
peao1 = new Peao('branca', 1, 1);
peao2 = new Peao('branca', 1, 2);
peao3 = new Peao('branca', 1, 3);
peao4 = new Peao('branca', 1, 4);
peao5 = new Peao('branca', 1, 5);
peao6 = new Peao('branca', 1, 6);
peao7 = new Peao('branca', 1, 7);

torre0 = new Torre('branca', 0, 0);
torre1 = new Torre('branca', 0, 7);
cavalo0 = new Cavalo('branca',0,1);
cavalo1 = new Cavalo('branca',0,6);
bispo0 = new Bispo('branca',0,2);
bispo1 = new Bispo('branca',0,5);
rainha = new Rainha('branca',0,3);
rei = new Rei('branca',0,4);

tabuleiro.colocarPeca(peao0,1,0)
tabuleiro.colocarPeca(peao1,1,1)
tabuleiro.colocarPeca(peao2,1,2)
tabuleiro.colocarPeca(peao3,1,3)
tabuleiro.colocarPeca(peao4,1,4)
tabuleiro.colocarPeca(peao5,1,5)
tabuleiro.colocarPeca(peao6,1,6)
tabuleiro.colocarPeca(peao7,1,7)

alert(tabuleiro.nome);