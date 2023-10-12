import useLocalStorage from "./useLocalStorage";

const useToggle = (key: string, initialValue: boolean): [boolean, (value: any) => void] => {
    const [checked, setChecked] = useLocalStorage(key, initialValue);

    // Toggle or set the 'checked' variable based on the 'value' argument
    const toggle = (value: any) => {
        setChecked((prevChecked) => {
            if(typeof value === "boolean") return value;
            else return !prevChecked;
        })
    };

    return [checked, toggle];
}

export default useToggle;
