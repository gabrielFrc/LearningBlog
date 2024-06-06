import './gotocap.css'

export const GoToCap = () => {
    return(
        <>
            <div className='chapter-list'>
                <h3>Topics</h3>
                <ul>
                    <li>
                        <a href="#primeira-linguagem">
                            <p>Primeira linguagem</p>
                        </a>
                    </li>
                    <li>
                        <a href="#aprendendo-java">
                            <p>Aprendendo Java</p>
                        </a>
                    </li>
                    <li>
                        <a href="#mudando-para-dotnet">
                            <p>Mudando para .NET</p>
                        </a>
                    </li>
                </ul>
                
            </div>
        </>
    )
}