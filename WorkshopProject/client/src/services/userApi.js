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

export const editUser = async (data, _id) => {
    const response = await fetch(`${baseUrl}/${_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            imageUrl: data.imageUrl,
            address: {
                country: data.country,
                city: data.city,
                street: data.street,
                streetNumber: data.streetNumber,
            }
        })
    })

    const result = await response.json();

    return result;
}

export const getOne = async (_id) => {
    const response = await fetch(`${baseUrl}/${_id}`)

    const data = await response.json();

    return data;
}

export const deleteUser = async (_id) => {
    const response = await fetch(`${baseUrl}/${_id}`, {
        method: 'DELETE',
    }); 

    const result = await response.json();
    return result;
}