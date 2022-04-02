const leftPadNumber = (number: number, length: number = 6): string => {
    const string = number.toString(10);
    const strLen = string.length;
    let result: string = "";

    for (let i = 0; i < length - strLen; i++) {
        result += "0";
    }

    return result + string;
};

export default leftPadNumber;