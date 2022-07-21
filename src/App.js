import React from 'react'
import Questions from './Questions'
import Home from './Home'

export default function App() {
    const count = 0;

    const [screen, setScreen] = React.useState(false)

    const cards = [{
        type: 'question-1',
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    },
    {
        type: 'question-1',
        question: "O React é __",
        answer: "uma biblioteca JavaScript para construção de interfaces"        
    },
    {
        type: 'question-1',
        question: "Componentes devem iniciar com __",
        answer: "letra maiúscula"        
    }, {
        type: 'question-1',
        question: "Podemos colocar __ dentro do JSX",
        answer: "expressões"        
    }
    ]

    cards.sort(compare);

    function compare() {
        return Math.random() - 0.5;
    }

    for (let i = 0; i < cards.length; i++) {
        cards[i].index = `Pergunta ${i + 1}`;
    }  

    return (
        <>
        { !screen ?

            <Home setScreen={setScreen} />
            :
            <Questions cards={cards} count={count} /> 
        }{
        /*
        O que falta no projeto:
        ao clicar na carta a pergunta ou termo deve aparecer sem animação 
        ao clicar no icone de virar o componente é o mesmo mas com layout adaptado
        apos mostrar a resposta deve receber um status na pagina inicial das cartas
        adicionar o status no fim da pagina e incrementar o contador
        quando todos as cartas forem respondidas deve aparecer o resultado final (se tiver uma errada mostrar "Putz" ou "Parabens" pra tudo certo)*/} 
        </>
    )
}