function getTwoMaxValues(arr) {
    let maxValue1= 0;
    let maxValue2= 0;
    for (let i = 0; i < arr.length; i++){
        let iter_number = arr[i];
        if (maxValue1 < iter_number){
            maxValue1 = iter_number;
        }
        if (maxValue2 > maxValue1 && maxValue2 < iter_number){
            maxValue2 = iter_number;
        }
    }
    // for (let i = 0; i < arr.length; i++){
    //     let iter_number = arr[i];
    //     if (maxValue2 < iter_number && iter_number != maxValue1){
    //         maxValue2 = iter_number;
    //     }
    // }
    return [maxValue1, maxValue2];
}

console.log(getTwoMaxValues([1,2,3,4,5]))
console.log(getTwoMaxValues([3,4,5,6,7]))
console.log(getTwoMaxValues([1,2,3,4,100]))
console.log(getTwoMaxValues([1,200,3,7]))
console.log(getTwoMaxValues([1,500,3,5]))