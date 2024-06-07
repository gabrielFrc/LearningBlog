import './languages.css'

import { GoToCap } from "../components/gotocap"
import { useEffect, useRef } from "react"

import { ChaptersBuilder } from "../functions/chaptersbuilder"
import { Navigation } from '../components/navigation'

export const Languages = () => {
    const chapters = useRef([
        '#primeira-linguagem', '#poo', '#csharp-vs-javascript',
    ]);

    useEffect(() => {
        ChaptersBuilder(chapters.current);
    }, [])

    return (
        <>
            <Navigation/>
            <main>
                <div className="container-divisor">
                    {/*
                        [Main chapter hashcode, main chapter name on list, [
                            [Sub chapter hashcode, sub chapter name on list]
                        ]]
                     */}
                    <GoToCap chapters={
                        [
                            [chapters.current[0], 'Primeira Linguagem', [
                                [chapters.current[1], 'POO'],
                            ]],
                            [chapters.current[1], 'JavaScript e C#', [
                                [chapters.current[2], 'Aprendendo Git'],
                                [chapters.current[2], 'Problemas com GitHub']]],
                            [chapters.current[2], 'Visual Studio'],
                        ]
                    } />
                    <div className="info">
                        <h1>Linguagens!</h1>
                        <h2 id={chapters.current[0]}>Primeiras linguagens e POO</h2>
                        <p>Quando eu ainda tinha 15 anos, no ensino fundamental, houve a oportunidade de concorrer a uma bolsa de estudos sobre desenvolvimento de jogos, agarrei ela com força e a consegui. No curso, comecei aprendendo lógica com <span className='highlighted-text'>Python</span> e posteriormente estudei Unity junto de <span className="highlighted-text">C#</span>, nesse tempo eu já tinha 16 anos, os conceitos eram algo muito novo pra mim e estranho, então era difícil entender certas coisas.</p>
                        <p id={chapters.current[1]}> POO ( Programação orientada a objeto ) foi algo que demorou pra entrar na minha cabeça e entender o porque de ser utilizada, porém, agora consigo explicar ela e porque de a utilizar: É o ato de modelar o sistema em objetos, através dela, conseguimos fazer um código mais limpo, mais manutenibilidade e capacidade de reutilizar códigos. Ainda lembro dos meus primeiros projetos Unity, códigos macarronicos e de dificil entendimento após dias, criando mais e mais arquivos .cs podendo simplesmente criar um único e ajeitar para que sirva as necessidades de cada comportamento no jogo.</p>
                        <p>Em resumo, POO vai facilitar a sua vida, olhar o código após terminado, vai ser uma sensação de conforto e satisfação ao invés de estresse e insegurança, irá economizar tempo e cortar problemas críticos como recodar vários scripts que quase fazem ou tem o mesmo comportamento, isso tudo porque um parametro ou variável precisa ser mudada. <span className='highlighted-text'>Mas antes de aprender POO, acredito que seja essencial você entender a syntax da sua linguagem antes</span>, o aprendizado de POO se mantém, você conseguirá aplicar o conhecimento em qualquer linguagem de programação.</p>
                        <figure>
                            <img src="https://media.licdn.com/dms/image/C5612AQEB6RARzPezHA/article-cover_image-shrink_720_1280/0/1614614289446?e=2147483647&v=beta&t=dv0X7VbTmFMmS2824AhRKiy9EwqZT1VsPG2Jv6iT3eQ" alt="program" width={700}/>
                        </figure>
                        <hr id="text-divisor"/>
                        <h2 id={chapters.current[3]}>JavaScript e C#</h2>
                        <p>Quando parei de estudar desenvolvimento de jogos por acreditar que não seria um mercado bom pra mim e iniciei a estudar Web, percebi logo o quanto diferente era o JavaScript do C#, JavaScript que irei passar a chamar de JS, era muito confuso pra mim, por ser muito "direto" e "simples". As principais diferenças pra mim era: JS sendo de tipagem dinâmica ( o tipo das variáveis é determinado em tempo de execução. ) e fraca ( uma variável pode facilmente mudar de tipo ) enquanto C# tipagem estática ( o tipo das variáveis é conhecido em tempo de compilação. ) e forte ( menos suscetível a erros de tipo, pois as variáveis mantêm seus tipos. ).</p>
                        <figure>
                            <img src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg" alt="program" width={700}/>
                        </figure>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum nisi dolore explicabo, velit quidem placeat error aliquid ea non mollitia sapiente, voluptatem, debitis ducimus. Possimus minus libero saepe culpa sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil sint totam numquam unde sunt incidunt quae ducimus dolorem sapiente esse sequi, optio cumque aliquid placeat illo modi nam soluta?</p>
                    </div>
                </div>
            </main>
        </>
    )
}