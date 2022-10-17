

export default function analyzeArray(array){
    const object = {
        average: array.reduce((a, b) => a + b, 0) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
    return object; 
}