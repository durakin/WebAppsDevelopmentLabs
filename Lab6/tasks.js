console.log("14.Определить, сколько раз встречается максимальный элемент в последовательности.");
function countMax(array) {
    return array.filter(x => x === Math.max(...array)).length;
}
console.log(countMax([1, 2, 3, 4, 5, 2, 3, 1, 5, 5, 5, 2, 5]));
console.log(countMax([1, 2, 3, 4, 5, 2, 3, 1, 5, 5, 5, 2,]));


console.log("7. Найти сумму модулей элементов последовательности.");
function sumAbs(array) {
    return array.reduce((result, x) => result + Math.abs(x));
}
console.log(sumAbs([-1, 1]));
console.log(sumAbs([-1, -1]));
console.log(sumAbs([1, 2, 3, 4]));


console.log("В последовательности натуральных чисел подсчитать их количество, оканчивающихся заданной цифрой.");
function countSuffix(array, suffix) {
    return array.filter(x => String(x).slice(-1 * String(suffix).length) === String(suffix)).length;
}
console.log(countSuffix([123, 122, 124, '222', 322, 232, 223], '22'));