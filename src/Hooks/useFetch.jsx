import {useState} from "react";

export const useFetch = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const result = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (e) {
            setError('Oops, something go wrong:' + e);
        } finally {
            setIsLoading(false);
        }
    }

    return [result, isLoading, error];
}