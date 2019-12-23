export function distancArray(arr, key) {
    const cats = arr.map(q => q[key]);
    return cats.filter((q, idx) =>
        cats.indexOf(q) === idx)

}