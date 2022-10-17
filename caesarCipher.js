

export default function encryption(string, key){
    let arr = []
    let text = string.toUpperCase(); 
    for(let i=0; i< text.length; i++){
        let result = (text.charCodeAt(i) - 65); 
        arr.push(result); 
    }
    caesarCipher(arr, key);  
}

function caesarCipher(arr, key){
    let array = []
    for(let i=0; i<arr.length; i++){
        let cipher = (Number(arr[i]) + key); 
        array.push(cipher);

    }
    decryption(array); 
}

function decryption(array){
    let finalArr = [];
    for(let i=0; i<array.length; i++){
        let result = (Number(array[i]) + 65); 
        finalArr.push(result); 
    }
    let str = String.fromCharCode(...finalArr);
    let phrase = str.toLowerCase(); 
    return phrase;
    
}


console.log(encryption('attack at dawn', 1))
