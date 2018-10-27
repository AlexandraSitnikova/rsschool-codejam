function sumOfOther(arr) {
    const sum = arr.reduce((sum, element) => sum += element, 0);
    const res = arr.map(element => sum - element);

    return res;
}