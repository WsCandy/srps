const addClass = (className: string, condition: boolean): string => {
    return condition ? className : "";
};

export default addClass;