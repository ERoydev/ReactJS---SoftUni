import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import GameContext from "../../contexts/gameContext";

export default function GameCreate() {

    const { createGameHandler } = useContext(GameContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const createGameSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)

        if (!data.title || !data.category || !data.maxLevel) {
            setError('Title, category and maxLevel fields should not be empty.')
        } else {
            
            if (!data.imageUrl) {
                data.imageUrl = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            }

            try {
                await createGameHandler(data);
                navigate('/games')
            } catch (err) {
                setError('Cannot create a new game.')
            }      
        }
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createGameSubmitHandler}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={""} />
                    {error && <p className="error-msg">{error}</p>}
                    <input className="btn submit" type="submit" value='Create Game' />
                </div>
            </form>
        </section>

    );
}