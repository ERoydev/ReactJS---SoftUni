import { Link } from "react-router-dom"

export default function GameItem({
    title,
    imageUrl,

}) {
    return (
        <div className="game card">
                <div className="image-wrap">
                    <img src={imageUrl}/>
                </div>

                <h3>{title}</h3>
                <div className="rating">
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                </div>

                <div className="data-buttons">
                    <Link to={`/games/`} className="btn details-btn">
                    Details
                    </Link>
                </div>
            </div>
    );
}