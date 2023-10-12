import useLocalStorage from "./useLocalStorage";

interface AttributeObjType {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const useInput = (key: string, initialValue: string): [string, () => void, AttributeObjType] => {
    const [value, setValue] = useLocalStorage(key, initialValue);

    const clear = () => {
        setValue(initialValue);
    };

    const attributeObj = {
        value,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
    };

    return [value, clear, attributeObj];
};

export default useInput;
