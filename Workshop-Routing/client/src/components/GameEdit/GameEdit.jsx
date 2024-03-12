import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import * as api from '../../services/api';

export default function GameEdit() {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
        api.getOne(gameId)
            .then(result => {
                setGame(result)
            })
    }, [gameId])

    const editGameSubmitHandler = async (values) => {

    }

    const { values, onChange, onSubmit } = useForm(editGameSubmitHandler, {
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    })

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        value={values.title}
                        onChange={onChange}
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                        value={values.category}
                        onChange={onChange}
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                        value={values.maxLevel}
                        onChange={onChange}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        value={values.imageUrl}
                        onChange={onChange}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={values.summary} onChange={onChange} />
                    <input className="btn submit" type="submit" value='Edit Game' />
                </div>
            </form>
        </section>

    );
}