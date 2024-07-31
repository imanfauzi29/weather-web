export const debounce = <F extends (...args: unknown[]) => void>(func: F, delay: number) => {
    let timeoutId: number;
    return (...args: Parameters<F>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};