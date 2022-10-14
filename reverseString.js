

export default function reverseString(string){
    let arr = string.split(''); 
    let result = '';
    while (arr.length !== 0){
        result += arr.pop();
    } 
    return result; 
    
}

