let a;
a = prompt("Nhập vào số a", "0");
a = parseInt(a);
if (a % 2 == 0) {
    document.write("a là số chẵn");
} else {
    document.write("a là số lẽ");
}
if (a > 0 && a % 1 == 0 && a != 0) {
    document.write("  " + ",a là số dương");
} else if (a != 0) {
    document.write("  " + ",a là số âm");
} else {
    document.write("  " + "nhưng khong xac dinh duoc so âm hay dương");
}