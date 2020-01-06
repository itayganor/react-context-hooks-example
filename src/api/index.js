const URL = 'https://www.random.org/integers/?num=1&min=1&max=99&col=1&base=10&format=plain';


export const requestNumber = async () => {
    const response = await fetch(URL);
    return await response.text();
};
