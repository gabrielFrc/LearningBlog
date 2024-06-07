import './gotocap.css'

export const GoToCap = (props) => {
    return (
        <>
            <div className='chapter-list'>
                <h3>Topics</h3>
                {props.chapters?.map((element, i) => {
                    if (element.length > 2) {
                        return <ul key={i}>
                            <li>
                                <a href={element[0]}>
                                    <p>{element[1]}</p>
                                </a>
                            </li>
                            <ul>
                                {element[2].map((subchapter, i2) => {
                                    return <li key={i2}>
                                        <a href={subchapter[0]}>
                                            <p>{subchapter[1]}</p>
                                        </a>
                                    </li>
                                })}
                            </ul>
                        </ul>
                    } else {
                        return (
                            <ul key={i}>
                                <li>
                                    <a href={element[0]}>
                                        <p>{element[1]}</p>
                                    </a>
                                </li>
                            </ul>
                        )
                    }
                })}

            </div>
        </>
    )
}