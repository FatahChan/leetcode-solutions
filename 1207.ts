function uniqueOccurrences(arr: number[]): boolean {
    const map = new Map()
    for (let i = 0; i < arr.length; i++){
        if (map.has(arr[i])){
            map.set(arr[i],map.get(arr[i]) + 1)
        }else {
            map.set(arr[i], 1)
        }
    }

    const reverseMap = new Set()

    const mapArray = Array.from(map.values())

    for (let i = 0; i < mapArray.length; i++){

        if (reverseMap.has(mapArray[i])){
            return false;
        }

        reverseMap.add(mapArray[i])
    }

    return true
    
};

console.log(uniqueOccurrences([1,2,2,1,1,3]))
console.log(uniqueOccurrences([1,2]))
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))