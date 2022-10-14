
export default function capitalize(string){
    let firstLetter = string.charAt(0);
    let result = firstLetter.toUpperCase();
    let rest = string.substring(1);

    let str = `${result}${rest}`
    return str; 
}

