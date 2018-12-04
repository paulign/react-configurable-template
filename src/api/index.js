const api_config = {
    api_url: 'http://demo4452328.mockable.io/',
}

export const apiRequest = async ({ url, method = 'GET', body = null}) => {
    try {
        const { api_url } = api_config;
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        

        const res = await fetch(`${api_url}${url}`, {
            method,
            headers,
            body,
        });

        let json = await res.json();

        if (res.ok) {
            return json;
        } else {
            return Promise.reject(json || { error: true, message: 'Something went wrong...' });
        }
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
}