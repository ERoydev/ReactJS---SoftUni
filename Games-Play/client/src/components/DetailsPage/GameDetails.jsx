import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as api from '../../services/api.js';
import * as commentService from '../../services/commentService.js'
import AuthContext from "../../contexts/authContext.jsx";
import Path from "../../Paths.js";
import { pathToUrl } from "../../utils/pathUtils.js";

const reducer = (state, action) => {
    switch (action?.type) {
        case 'GET_ALL_GAMES':
            return [...action.payload];
        case 'ADD_COMMENT':
            // Starite komentari i slagam noviq komentar (dobavqm go)
            return [...state, action.payload];
        case 'EDIT_COMMENT':
            return state.map(c => c._id === action.payload._id ? {...c, text: action.payload.text } : c)
        default:
            return state;
    }
}

export default function GameDetails() {
    const { email, userId } = useContext(AuthContext);
    const [game, setGame] = useState([]);
    // const [comments, setComments] = useState([]);
    const { gameId } = useParams();
    const [comments, dispatch] = useReducer(reducer, {});
    const navigate = useNavigate();

    useEffect(() => {
        api.getOne(gameId)
            .then(data => {
                setGame(data)
            })
            .catch(err => console.log(err))

        commentService.getAll(gameId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_GAMES',
                    payload: result,
                });
            })
    }, [gameId])


    const createCommentClickHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            gameId,
            formData.get('comment')
        );

        newComment.author = email;

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
    }

    const onDeleteButtonClick = async (e) => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${game.title}`)

        if (hasConfirmed) {
            await api.remove(gameId);

            navigate('/games');
        }
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
                        {comments.length > 0 && comments.map(({_id, text}) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

                {userId === game.ownerId && (
                    <div className="buttons">
                        <Link to={pathToUrl(Path.GameEdit, { gameId }) } className="button">Edit</Link>
                        <button className="button" onClick={onDeleteButtonClick}>Delete</button>                    
                    </div>
                )}

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