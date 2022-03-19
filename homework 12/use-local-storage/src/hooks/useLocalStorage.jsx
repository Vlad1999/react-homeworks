const useLocalStorage = (keyName, value) => {
    if(keyName && value) {
        localStorage.setItem(keyName, JSON.stringify(value));
    }

    const get = (keyName) => {
        return localStorage.getItem(keyName);
    }

    const set = (keyName, value) => {
        if(keyName && value) {
            localStorage.setItem(keyName, JSON.stringify(value));
        }
    }

    const remove = (keyName) => {
        localStorage.removeItem(keyName);
    }
    
    const clear = () => {
        localStorage.clear();
    }

    const key = (index) => {
        return localStorage.key(index)
    }

    return {
        get,
        set,
        remove,
        clear,
        key
    }
}   

export default useLocalStorage;