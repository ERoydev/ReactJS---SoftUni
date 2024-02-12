const baseUrl = 'http://localhost:3030/jsonstore/users';

export const getAll = async () => {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();

        const users = Object.values(data);

        return users;

    } catch (error) {
        console.log(error);
    }
}

export const CreateUser = async (data) => {
    try {
        const response = await fetch(`${baseUrl}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
    } catch (error) {
        console.log(error)    
    }  
}   