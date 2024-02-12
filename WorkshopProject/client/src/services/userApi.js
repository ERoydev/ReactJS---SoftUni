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

export const createUser = async (data) => {
    const body = {
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        email: data.get('email'),
        imageUrl: data.get('imageUrl'),
        phoneNumber: data.get('phoneNumber'),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        address: {
            country: data.get('country'),
            city: data.get('city'),
            street: data.get('street'),
            streetNumber: data.get('streetNumber'),
        }
    }

    const response = await fetch(`${baseUrl}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const result = response.json();
    return result
}   