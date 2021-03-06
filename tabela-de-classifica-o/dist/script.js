var jogadores = []

function adicionarNome(){
  var adicionarJogador = document.querySelector('#nomeDoJogador')  
  jogadorValor ={}
  jogadorValor.nome = adicionarJogador.value
  jogadorValor.vitorias = 0
  jogadorValor.empates = 0
  jogadorValor.derrotas = 0
  jogadorValor.pontos = calculaPontos(jogadorValor)
  jogadores.push(jogadorValor)
  exibirJogadoresNaTela(jogadores)
  adicionarJogador.value = ""
}

function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}
function exibirJogadoresNaTela (jogadores){
  var html = ""
  for(var i = 0; i < jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    html += "<td><button onClick='removerJogador(" + i + ")'>Remove</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

//exibirJogadoresNaTela(jogadores)

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function removerJogador(i){
 var jogador = jogadores.splice(i,1)
 exibirJogadoresNaTela(jogadores)
}

function resetDados() {
  jogadores = []
  exibirJogadoresNaTela(jogadores)
 }