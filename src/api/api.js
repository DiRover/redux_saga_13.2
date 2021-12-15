export const loaderList = async () => {
    const response = await fetch(`${process.env.REACT_APP_SEARCH_URL}/services`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
};

export const loaderDescription = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_SEARCH_URL}/services/${id}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
};