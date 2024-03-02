const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            "Content-Type": "application/json",
        };
    }

    return options;
}

export const request = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data), // I destructure the option (body and header)
        method,
    });

    const result = await response.json();
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