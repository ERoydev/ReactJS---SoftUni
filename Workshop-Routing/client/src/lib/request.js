const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            "Content-Type": "application/json",
        };
    }

    const token = localStorage.getItem('auth');
    
    if (token && token !== '{}') {
        const accessToken = JSON.parse(token).accessToken;
        options.headers = {
            // Ako ima stari headers kakto po gore da ne gi prezapisva, ami prosto da dobavi moq authorization token
            ...options.headers, 
            'X-Authorization': accessToken
        }
    }

    return options;
};

export const request = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data), // I destructure the option (body and header)
        method,
    });

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');

// ```
// This give me the opportunity to call it like that:
// request.post(url, {'data object here...'}), request.get().....

// This is a request library created from scrap for the project specific needs.
// ```