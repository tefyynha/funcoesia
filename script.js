const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1- Na atualidade o uso do celular pode ser considerado um problema ecológico e sustentável motivado pelo  elevado consumo  e descarte irregular de aparelhos tecnológicos. Um dos motivos para este elevado número de descarte se refere a  velocidade com que as versões são lançadas no mercado e alterações ocorrem nos hardwares e processadores.  Como a IA pode contribuir para o destino correto dos descartes dos eletrônicos?",
        alternativas: [
            {
                texto: "A- Oferecer mais recursos para o direcionamento dos descartes e otimização das rotas de coleta de resíduos eletrônicos.",
                afirmacao: "Gerar políticas públicas e conscientização para o controle sobre os descartes."
            },
            {
                texto: "B- Prever tendências de descarte com base em dados de vendas de novos modelos e padrões de consumo",
                afirmacao: "Educar os consumidores sobre a importância do descarte adequado e fornecer informações sobre os pontos de coleta mais próximos."
            }
        ]
    },
    {
        enunciado: "2- Como o comportamento consumista influencia o desenvolvimento e a aplicação de tecnologia de Inteligência Artificial, considerando os impactos ecológicos e a sustentabilidade?",
        alternativas: [
            {
                texto: "A- O consumismo pode impulsionar a demanda por produtos tecnológicos, reduzindo o ciclo de vida desses dispositivos e gerando mais resíduos eletrônicos, afetando a sustentabilidade ambiental.",
                afirmacao: "O Consumismo pode afetar a sustentabilidade por conta da demanda de aparelhos com IA."
            },
            {
                texto: "B- O consumismo também pode influenciar o desenvolvimento de tecnologias de IA voltadas para  o consumo, aumentando a coleta e o processamento de recursos naturais, o que pode impactar negativamente a pegada de carbono e a sustentabilidade energética.",
                afirmacao: "O consumismo pode acabar afetando a sustentabilidade energética por conta do descarte dos produtos."
            }
        ]
    },
    {
        enunciado: "3- A IA pode usar grandes volumes de dados para analisar e prever padrões de consumo, ajudando a promover práticas mais sustentáveis. Isso é importante porque o consumismo excessivo tem um impacto negativo no meio ambiente. Ao usar a IA, podemos identificar formas de reduzir o desperdício e otimizar o uso de recursos, contribuindo para a ecologia e sustentabilidade. O uso de IA na análise de dados pode reduzir o impacto ambiental do consumismo. Como o uso de IA na análise de dados pode efetivamente reduzir o impacto ambiental do consumismo?",
        alternativas: [
            {
                texto: "a- A IA pode auxiliar a todos na  melhora decisão ou escolhas de respostas quanto ao desperdício e exploração de recursos naturais.",
                afirmacao: "A IA pode prever a demanda de produtos, ajudando as empresas a ajustar a produção e evitar excessos, o que reduz o desperdício e a exploração de recursos naturais."
            },
            {
                texto: "B- A IA pode oferecer melhores as opções sobre os produtos mais sustentáveis ou mesmo indicando ou influenciando na escolha e compra de produtos para o consumo ecologicamente correto.",
                afirmacao: "A IA pode educar e informar os consumidores sobre escolhas mais sustentáveis, incentivando a a compra de produtos ecologicamente corretos e a adoção de práticas de consumo responsáveis."
            }        
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}
function mostraResultado() {
    caixaPerguntas.textContent = "Você sabe qual é o futuro da IA!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();