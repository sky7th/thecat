function getItem(key) {
    const value = sessionStorage.getItem(key);

    return JSON.parse(value) || null;
}

function setItem(key, value) {
    if(!value) {
        return;
    }
    sessionStorage.setItem(key, JSON.stringify(value));
}

export { getItem, setItem };