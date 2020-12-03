var posicao = 0;
var start = 0;
var respcorreta = 0;
var respA, respB, respC, respD;
var verifica, verfica_status;
var pergunta, resposta, respostas;
var imgperg;

var perguntas = [
    {
      pergunta: "Onde se originou o Covid-19",
      a: "Itália",
      b: "China",
      c: "França",
      d: "Portugal",
      correta: "B",
      graf: "img/1.png"
      },
    {
        pergunta: "Que porcentagem de álcool em produtos para esfregar as mãos e desinfetantes é necessária para matar a doença coronavírus (COVID-19)? ",
        a: "60%",
        b: "40%",
        c: "50%",
        d: "35%",
        correta: "A",
        graf: "img/2.jpg"
      },
    {
        pergunta: "o Covid-19 é definido como um?",
        a: "Vírus",
        b: "Bactéria",
        c: "Protozoário",
        d: "Parasita",
        correta: "A",
        graf: "img/3.jpg"
      },
    {
        pergunta: "Qual sintoma é considerado um dos piores sintomas do Covid-19? ",
        a: "Euforia",
        b: "Fome",
        c: "Falta de ar",
        d: "Coceira",
        correta: "C",
        graf: "img/4.jpg"
      },
      {
          pergunta: "O que se deve fazer ao sair de casa e tocar algum objeto com as mãos ?",
          a: "Limpar as mãos em uma toalha",
          b: "Lavar as mãos apenas com água",
          c: "Não fazer nada",
          d: "Lavar as mãos com água e sabão",
          correta: "D",
          graf: "img/5.jpg"
        },
        {
            pergunta: "-Qual a cidade onde teve o primeiro caso de covid-19 ",
            a: "Xangai",
            b: "washington",
            c: "Wuhan",
            d: "Lisboa",
            correta: "C",
            graf: "img/6.jpg"
          },
          {
              pergunta: "O que usar no rosto para se proteger do Covid-19? ",
              a: "Máscara",
              b: "Protetor auricular",
              c: "Hidratante",
              d: "Protetor solar",
              correta: "A",
              graf: "img/7.jpg"
            },
            {
                pergunta: "Qual tipo de remédio estão criando para o combate ao Covid-19?",
                a: "Antibiótico",
                b: "Vacina",
                c: "Soro ",
                d: "Hormônio ",
                correta: "B",
                graf: "img/8.jpg"
              },
              {
                  pergunta: "Em uma quarentena o que se deve fazer?",
                  a: "Ir à praia",
                  b: "Ficar em casa",
                  c: "Sair com os amigos",
                  d: "Ir ao shopping",
                  correta: "B",
                  graf: "img/9.jpg"
                },
                {
                    pergunta: "Qual o tempo de incubação do covid-19? ",
                    a: "5 - 25 dias",
                    b: "3 - 20 dias;",
                    c: "40 - 80 dias",
                    d: "1 - 14 dias",
                    correta: "D",
                    graf: "img/10.jpg"
                  },
                  {
                      pergunta: "Qual o orgão que o coronavírus normalmente ataca primeiro?",
                      a: "Coração",
                      b: "Pulmões",
                      c: "Figado",
                      d: "Rins",
                      correta: "B",
                      graf: "img/11.jpg"
                    },
                    {
                        pergunta: "Que nome se dá ao isolamento devido à uma doença contagiosa?",
                        a: "Férias",
                        b: "Isolamento social",
                        c: "Quarentena",
                        d: "Retiro",
                        correta: "C",
                        graf: "img/12.jpg"
                      }  
];

function buscaElements(x){
    return document.getElementById(x);
  }

function IniciaQuiz(){
  divinic = buscaElements("dquestoes");
  divinic.innerHTML = "<div id='imgquestoes'><img src='img/corona-quiz.png'></div>";
  divinic.innerHTML += "<h3>Teste seu conhecimento sobre Covid-19 respondendo a 12 Perguntas sobre o virus!</h3><br>";
  divinic.innerHTML += "<h3>Clique no botão Iniciar abaixo e ao final do Quiz, veja sua pontuação...</h3><br><br>";
  divinic.innerHTML += "<h3>Boa sorte!</h3>";
  divinicbt = buscaElements("wdquestoes");
  divinicbt.innerHTML = "<button onclick='Fverificaquiz()'>INICIAR</button>";
}  

function Fverificaquiz(){
    if(start == 0){
      start = 1;
      divinic = buscaElements("dquestoes");
      divinicbt = buscaElements("wdquestoes");
      divinicbt.innerHTML = "";
      divinic.innerHTML = "";
    }
    else {
      posicao++;
    }
    
    verifica = buscaElements("dquestoes");

    if(posicao >= perguntas.length){
        verifica.innerHTML = "<h4>Você Acertou "+respcorreta+" de "+perguntas.length+" Perguntas</h4><br><br><br><br>";
        verifica.innerHTML += "<h4>Unigranrio... Vá além da sala de aula!</h4>";
        verifica.innerHTML += "<img src='img/uni.png'></a>";
        buscaElements("progresso").innerHTML = "Parabéns, Quiz Concluído!";
        btfinal = buscaElements("wdquestoes");
        btfinal.innerHTML = "<button onclick='Fverificaquiz()' id='btprinp'>REINICIAR</button>";
        posicao = 0;
        start = 0;
        respcorreta = 0;
        return false;
    }
 
    pergunta = perguntas[posicao].pergunta;
    respA = perguntas[posicao].a;
    respB = perguntas[posicao].b;
    respC = perguntas[posicao].c;
    respD = perguntas[posicao].d;
    imgperg = perguntas[posicao].graf;


    verifica.innerHTML = "<div id='imgquestoes'><img src="+imgperg+"></div>";
    verifica.innerHTML += "<h3>"+pergunta+"</h3>";
    verifica.innerHTML += "<div   id='rA'><label> <input type='radio' name='lresp' value='A' onclick='VerResposta()' id='rA1'> "+respA+"</label></div><br>";
    verifica.innerHTML += "<div  id='rB'><label> <input type='radio' name='lresp' value='B' onclick='VerResposta()' id='rB1'> "+respB+"</label></div><br>";
    verifica.innerHTML += "<div  id='rC'><label> <input type='radio' name='lresp' value='C' onclick='VerResposta()' id='rC1'> "+respC+"</label></div><br>";
    verifica.innerHTML += "<div   id='rD'><label> <input type='radio' name='lresp' value='D' onclick='VerResposta()' id='rD1'> "+respD+"</label></div><br><br>";
    

    buscaElements("progresso").innerHTML = (posicao+1)+" / "+perguntas.length;

    
  }


  function VerResposta(){

    respostas = document.getElementsByName("lresp");

    for(var i=0; i<respostas.length; i++){
        if(respostas[i].checked){
            resposta = respostas[i].value;
        }
    }
    
    if(resposta == perguntas[posicao].correta){
      var la = document.getElementById('rA1');
      la.setAttribute("disabled", "disabled");
      var lb = document.getElementById('rB1');
      lb.setAttribute("disabled", "disabled");
      var lc = document.getElementById('rC1');
      lc.setAttribute("disabled", "disabled");
      var ld = document.getElementById('rD1');
      ld.setAttribute("disabled", "disabled");
      respcorreta++;
      iddiv = 'r'+resposta;
      document.getElementById(iddiv).style.backgroundColor = 'rgb(79 255 79)';
    }
    else {
      var la = document.getElementById('rA1');
      la.setAttribute("disabled", "disabled");
      var lb = document.getElementById('rB1');
      lb.setAttribute("disabled", "disabled");
      var lc = document.getElementById('rC1');
      lc.setAttribute("disabled", "disabled");
      var ld = document.getElementById('rD1');
      ld.setAttribute("disabled", "disabled");
      iddiv = 'r'+perguntas[posicao].correta;
      document.getElementById(iddiv).style.backgroundColor = 'rgb(79 255 79)';
      iddivselc = 'r'+resposta;
      document.getElementById(iddivselc).style.backgroundColor = 'rgb(242 36 56)';
    }
    btcontinua = buscaElements("wdquestoes");
    btcontinua.innerHTML = "<button onclick='Fverificaquiz()' id='btprinp'>Continuar</button>";
      iddivsel = 'r'+resposta;
      document.getElementById(iddivsel).style.boxShadow = '0em .1em 0.4em .4em rgba(225,243,7,.5)';
  }

  window.addEventListener("load", IniciaQuiz);