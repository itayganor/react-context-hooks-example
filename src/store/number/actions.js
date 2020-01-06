import {requestNumber} from '../../api';


export async function fetchNumber(setCurrent, setIsLoading) {
    setIsLoading(true);

    const result = await requestNumber();

    setCurrent(result);
    setIsLoading(false);
}

export function increment(setCurrent) {
    setCurrent(current => current + 1);
}
