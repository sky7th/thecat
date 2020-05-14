export const debouncing = () => {
    let debounceCheck;

    return {
        debounce(callback, milliseconds) {
            return function () {
                clearTimeout(debounceCheck);
                debounceCheck = setTimeout(() => {
                    callback(...arguments);
                }, milliseconds);
            }
        }
    };
};