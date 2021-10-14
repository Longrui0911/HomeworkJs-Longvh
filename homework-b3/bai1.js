var array = [1, 2, 4, 5, 6, 7, 8, 9];

function tong(array) {
    var j = 0
    for (var i = 0; i < array.length; i++) {
        j += array[i]
    }
    return j
}
document.write("Tổng: " + tong(array));