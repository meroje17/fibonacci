export function isNumber(string) {    
    return !isNaN(parseInt(string));
}

export function containOnlyNumber(string) {
    return /^\d+$/.test(string);
}

export function isEmpty(string) {
    return string === "";
}
