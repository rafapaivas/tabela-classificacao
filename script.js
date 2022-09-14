var player1 = {nome:"Player 1", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var player2 = {nome:"Player 2", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var player3 = {nome:"Player 3", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var player4 = {nome:"Player 4", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var player5 = {nome:"Player 5", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};

function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
} 

var jogadores = [player1, player2, player3, player4, player5];

function exibeJogadores(jogadores){
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++ ){
    elemento += "<tr><td>" + jogadores[i].nome + "</td>"
    elemento += "<td>" + jogadores[i].vitorias + "</td>"
    elemento += "<td>" + jogadores[i].empates + "</td>"
    elemento += "<td>" + jogadores[i].derrotas + "</td>"
    elemento += "<td>" + jogadores[i].pontos + "</td>"
    elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
    elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
    elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}
exibeJogadores(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadores(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadores(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadores(jogadores);
} 