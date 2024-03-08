import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as api from '../../services/api.js';
import * as commentService from '../../services/commentService.js'
import AuthContext from "../../contexts/authContext.js";


export default function GameDetails() {
    const { email } = useContext(AuthContext).values;
    const [game, setGame] = useState([]);
    const [comments, setComments] = useState([]);
    const { gameId } = useParams();
    
    useEffect(() => {
        api.getOne(gameId)
            .then(data => setGame(data))
            .catch(err => console.log(err))

        commentService.getAll(gameId)
            .then(setComments)
    }, [gameId])

    const createCommentClickHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            gameId,
            formData.get('comment')
        );



        setComments(state => [...state, {...newComment, author: { email }}])
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                {game.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* Destructuriram ownera na email */}
                        {comments.map(({_id, text, owner: { email }}) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={createCommentClickHandler}>
                    <textarea type="text" name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    );
}