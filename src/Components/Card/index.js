import './styles.css';


function Card(props) {


    return (
        <div className="cardContainer">
            <div className="cardInnerBorder">
                <div className="photo">
                    <img src={props.imgUrl} alt="userInputedImage"></img>
                </div>

                <div className="content">
                    <p>Name: {props.name}</p>
                    <p>{props.propriedade1}</p>
                    <p>{props.propriedade2}</p>
                </div>

                <div className="email">
                    <a href={`mailto:${props.email}`}>{props.email}</a>
                </div>
            </div>
        </div>
    );
}

export default Card;
