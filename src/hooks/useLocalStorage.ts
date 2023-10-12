import { useState, useEffect } from 'react';

const getInitialValue = <Type>(key: string, initialValue: Type) => {
    // If there's no 'window' object, the 'localStorage' isn't accessible
    if(typeof window === "undefined") return initialValue;

    const localStorageItem = localStorage.getItem(key);
    if(localStorageItem) return JSON.parse(localStorageItem);

    if(initialValue instanceof Function) return initialValue();
    return initialValue;
}

// TODO: remove this
// The "<Type>" is a "type parameter/argument" that is being defined for the "useLocalStorage" function. It means that, when we call the "useLocalStorage" function we can supply the type that we want to be used in it.
// Now, when calling "useLocalStorage", we can call like this "const [value, setValue] = useLocalStorage<string>(key, initialValue)". But we can also call it without the "<string>" when the type can be infered (if it's known that "initialValue" has a "string" type, the type will be infered)
const useLocalStorage = <Type>(key: string, initialValue: Type): [Type, React.Dispatch<React.SetStateAction<Type>>] => {
    const [value, setValue] = useState<Type>(() => getInitialValue<Type>(key, initialValue));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage
