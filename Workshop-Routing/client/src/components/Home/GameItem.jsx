export default function GameItem({
    title,
    category,
    maxLevel,
    imageUrl,
    summary,
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
                    <a href="#" className="btn details-btn">
                    Details
                    </a>
                </div>
            </div>
    );
}