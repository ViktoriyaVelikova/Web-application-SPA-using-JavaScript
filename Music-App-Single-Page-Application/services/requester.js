const request = async(method, url, body) => {
    let options = {
        method,
    };

    if (body) {
        Object.assign(options, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...body, returnSecureToken: true }),
        });
    }
    console.log(url)
    let response = await fetch(url, options);
    let data = await response.json();
    console.log(data)
    return data;
};

export const get = request.bind(this, 'GET');
export const post = request.bind(this, 'POST');
export const put = request.bind(this, 'PUT');
export const patch = request.bind(this, 'PATCH');
export const del = request.bind(this, 'DELETE');