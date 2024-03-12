import { useState } from "react"

export default function usePersistedState (key, defaultValue) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);

        if (persistedState) {
            // If i have persistedState set it as initial value. For example if page refreshed i will keep be loged in :)
            return JSON.parse(persistedState);
        }

        return defaultValue;
    });

    // Everytime i update my auth state i also update the token in my localStorage
    const setPersistedState = (value) => {
        setState(value);

        let serializedValue;
    
        // If setAuth is function like => ...state [e.target.name]: e.target.value thing..
        if (typeof value === 'function') {
            serializedValue = JSON.stringify(value(state));
        } else {
            serializedValue = JSON.stringify(value);
        }

        localStorage.setItem(key, serializedValue);
    };

    return [
        state,
        setPersistedState,
    ];
}