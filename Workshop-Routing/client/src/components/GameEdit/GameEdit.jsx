import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import * as api from '../../services/api';

export default function GameEdit() {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    });

    useEffect(() => {
        api.getOne(gameId)
            .then(result => {
                setGame(result)
            })
    }, [gameId])
        
    const editGameSubmitHandler = async (e) => {
        e.preventDefault();
        
        try {
            await api.editGame(gameId, game);
            
            navigate('/games');
        } catch (err) {
            console.log(err)
        }
    }
        
    const onChange = (e) => {
        setGame(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
    return (
        
        <section id="create-page" className="auth">
            <form id="create" onSubmit={editGameSubmitHandler}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        value={game.title}
                        onChange={onChange}
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                        value={game.category}
                        onChange={onChange}
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                        value={game.maxLevel}
                        onChange={onChange}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        value={game.imageUrl}
                        onChange={onChange}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={game.summary} onChange={onChange} />
                    <input className="btn submit" type="submit" value='Edit Game' />
                </div>
            </form>
        </section>

    );
}