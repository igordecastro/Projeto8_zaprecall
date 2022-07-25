import React from 'react';
import Questions from './Questions';
import Home from './Home';
import Footer from './Footer';
import CardBack from './CardBack';

export default function App() {
    const count = 0;

    const [screen, setScreen] = React.useState(false)

    const [cards, setCards] = React.useState([{
        clicked: false,
        type: 'question-1',
        front: "O que é JSX?",
        back: "Uma extensão de linguagem do JavaScript",
    },
    {
        clicked: false,
        type: 'question-1',
        front: "O React é __",
        back: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        clicked: false,
        type: 'question-1',
        front: "Componentes devem iniciar com __",
        back: "letra maiúscula"
    }, {
        clicked: false,
        type: 'question-1',
        front: "Podemos colocar __ dentro do JSX",
        back: "expressões"
    }, {
        clicked: false,
        type: 'question-1',
        front: "O ReactDOM nos ajuda __",
        back: " interagindo com a DOM para colocar componentes React na mesma"
    }, {
        clicked: false,
        type: 'question-1',
        front: "Usamos o npm para __",
        back: " gerenciar os pacotes necessários e suas dependências"
    }, {
        clicked: false,
        type: 'question-1',
        front: "Usamos props para __ ",
        back: " passar diferentes informações para componentes "
    }, {
        clicked: false,
        type: 'question-1',
        front: "Usamos estado (state) para __",
        back: " dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }]
    );

    function random() {
        return Math.random() - 0.5;
    }

    cards.sort(random);

    for (let i = 0; i < cards.length; i++) {
        cards[i].cardTitle = `Pergunta ${i + 1}`;
    }

    return (
        <>
            {!screen ?

                <Home setScreen={setScreen} />
                :
                <>
                    <Questions cards={cards} setCards={setCards} />
                    <Footer cards={cards} count={count} />
                </>
            }{
        /*
        O que falta no projeto: 
        ao clicar no icone de virar o componente é o mesmo mas com layout adaptado
        apos mostrar a resposta deve receber um status na pagina inicial das cartas
        adicionar o status no fim da pagina e incrementar o contador
        quando todos as cartas forem respondidas deve aparecer o resultado final (se tiver uma errada mostrar "Putz" ou "Parabens" pra tudo certo)*/}
        </>
    )
}