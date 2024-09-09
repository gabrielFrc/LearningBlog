import { Navigation } from "../components/navigation";
import { GoToCap } from "../components/gotocap";
import { useRef, useEffect } from "react";
import { ChaptersBuilder } from "../functions/chaptersbuilder";

export const Learn = () => {
    const chapters = useRef([
        '#estrutura-de-dados', '#algoritmo', '#sla',
    ]);

    useEffect(() => {
        ChaptersBuilder(chapters.current);
    }, [])

    return(
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
                            [chapters.current[0], 'Fundamento de programação', [
                                [chapters.current[1], 'Estrutura de dados'],
                                [chapters.current[2], 'Algoritmos']
                            ]],
                            // [chapters.current[2], 'JavaScript e C#', [
                            //     [chapters.current[2], 'Aprendendo Git'],
                            //     [chapters.current[2], 'Problemas com GitHub']]],
                        ]
                    } />
                    <div className="info">
                        <h1>Lista de coisas que preciso estudar!</h1>
                        <h2 id={chapters.current[0]}>Algoritmos e estrutura de dados</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore error omnis. In nemo adipisci modi, maxime soluta numquam saepe, asperiores, assumenda voluptatum consequatur culpa excepturi velit minima! Assumenda, ipsum!</p>
                        <h2>A</h2>

                        <hr id="text-divisor"/>
                    </div>
                </div>
            </main>
        </>
    )
}