import './technologies.css'

import { GoToCap } from "../components/gotocap"
import { useEffect, useRef } from "react"

import { ChaptersBuilder } from "../functions/chaptersbuilder"
import { Navigation } from '../components/navigation'

export const Technologies = () => {
    const chapters = useRef([
        '#primeira-linguagem', '#aprendendo-java', '#mudando-para-dotnet',
    ]);

    useEffect(() => {
        ChaptersBuilder(chapters.current);
    }, [])

    return (
        <>
            <Navigation />
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
                                [chapters.current[1], 'Aprendendo python'],
                                [chapters.current[1], 'Aprendendo C#']]],
                            [chapters.current[1], 'Git', [
                                [chapters.current[2], 'Aprendendo Git'],
                                [chapters.current[2], 'Problemas com GitHub']]],
                            [chapters.current[2], 'Visual Studio'],
                            [chapters.current[1], 'Git', [
                                [chapters.current[2], 'Aprendendo Git'],
                                [chapters.current[2], 'Problemas com GitHub']]],
                            [chapters.current[1], 'Git', [
                                [chapters.current[2], 'Aprendendo Git'],
                                [chapters.current[2], 'Problemas com GitHub']]],
                            [chapters.current[1], 'Git', [
                                [chapters.current[2], 'Aprendendo Git'],
                                [chapters.current[2], 'Problemas com GitHub']]],
                            [chapters.current[1], 'Git', [
                                [chapters.current[2], 'Aprendendo Git'],
                                [chapters.current[2], 'Problemas com GitHub']]]
                        ]
                    } />
                    <div className="info">
                        <h2 id={chapters.current[0]}>Tecnologias!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur animi error quae cumque accusantium nemo ipsum maiores eos ullam, suscipit corporis eius beatae, <span className="highlighted-text">perspiciatis alias rerum</span> cum repellendus eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iusto aliquid neque enim iste beatae, placeat similique laboriosam. Rerum quaerat error excepturi similique? Commodi, fugiat voluptate rerum eligendi maiores adipisci.</p>
                        <br />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum nisi dolore explicabo, velit quidem placeat error aliquid ea non mollitia sapiente, voluptatem, debitis ducimus. Possimus minus libero saepe culpa sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil sint totam numquam unde sunt incidunt quae ducimus dolorem sapiente esse sequi, optio cumque aliquid placeat illo modi nam soluta?</p>
                        <hr id="text-divisor" />
                        <h2 id={chapters.current[1]}>Aprendendo Java</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur animi error quae cumque accusantium nemo ipsum maiores eos ullam, suscipit corporis eius beatae, <span className="highlighted-text">perspiciatis alias rerum</span> cum repellendus eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iusto aliquid neque enim iste beatae, placeat similique laboriosam. Rerum quaerat error excepturi similique? Commodi, fugiat voluptate rerum eligendi maiores adipisci.</p>
                        <figure>
                            <img src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg" alt="program" width={700} />
                        </figure>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum nisi dolore explicabo, velit quidem placeat error aliquid ea non mollitia sapiente, voluptatem, debitis ducimus. Possimus minus libero saepe culpa sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil sint totam numquam unde sunt incidunt quae ducimus dolorem sapiente esse sequi, optio cumque aliquid placeat illo modi nam soluta?</p>
                    </div>
                </div>
            </main>
        </>
    )
}