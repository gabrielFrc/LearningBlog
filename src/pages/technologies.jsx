import './technologies.css'

import { GoToCap } from "../components/gotocap"
import { useEffect, useRef } from "react"

import { ChaptersBuilder } from "../functions/chaptersbuilder"
import { Navigation } from '../components/navigation'

export const Technologies = () => {
    const chapters = useRef([
        '#aspnet', '#aprendendo-java', '#mudando-para-dotnet',
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
                            [chapters.current[0], '.NET', [
                                [chapters.current[0], 'Minimal APIs'],
                                [chapters.current[0], 'Controller APIs'],
                                [chapters.current[0], 'Dapper'],
                                [chapters.current[0], 'Entity Framework'],
                                [chapters.current[0], 'Diferença entre Dapper e Entity Framework'],
                            ]
                            ],
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
                        <h1>.NET</h1>

                        <h2 id={chapters.current[0]}>O que são minimals APIs</h2>
                        <p>Minimal APIs são uma maneira mais simples de construir APIs no ASP.NET Core. Introduzidas no .NET 6, elas permitem que você crie APIs com menos configuração e código em comparação ao padrão MVC, facilitando o desenvolvimento de aplicações pequenas e com rotas mais simples.</p>
                        <p id='ex'>Example of a minimal API - 09/2024</p>
                        <pre>
<code>
{
`var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Define uma rota GET simples
app.MapGet("/hello", () => "Hello, world!");

app.Run();`
}
</code>
                        </pre>

                        <h2 id={chapters.current[0]}>Controller APIs</h2>
                        <p>Usam o padrão MVC (Model-View-Controller) para estruturar o código.
Em ASP.NET Core, você define uma classe Controller que lida com solicitações HTTP. Os métodos da classe são mapeados para rotas específicas.
Ideal para aplicações que seguem o padrão MVC tradicional.
                        </p>
                        <p id='ex'>Example of a controller API  - 09/2024</p>
                        <pre>
<code>
{
`[ApiController]
[Route("api/[controller]")]
public class WeatherForecastController : ControllerBase
{
    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
        // Código para retornar dados
    }
}`
}
</code>
                        </pre>

                        <h2>O que é arquitetura?</h2>
                        <p>Distribuidas: processos diferentes, servidores diferentes, ex: Microserviços, SOA</p>
                        <p>Monoliticas: no mesmo processo</p>

                        <h2>Arquitetura Limpa</h2>
                        <p>Arquitetura cebola, domain-driven design</p>
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