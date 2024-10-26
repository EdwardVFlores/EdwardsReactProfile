import "./card.css"

const Card = ({title, date, description, image, projectLink, codeLink}) => {

    return (
        <div className="card-container">
            <div className="card-header">
                <h2>{title}</h2>
                <div>{date}</div>
            </div>
            <div className="card-image">
                <img src={image}/>
            </div>
            <div className="card-description">
                <p>{description}</p>
            </div>
            <div className="card-buttons-container">
                <div className="card-buttons">
                    <a id="card-project" href={projectLink} target="_blank">Show Project</a>
                    { codeLink && <a id="card-code" href={codeLink} target="_blank">View Code</a> }
                </div>
            </div>
            
        </div>
    )
}

export default Card;