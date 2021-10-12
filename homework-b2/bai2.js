function checkDay() {
    with(form) {
        var m = eval(month.value);
        switch (m) {
            case 4:
            case 6:
            case 9:
            case 11:
                ketQua.value = 'Tháng' + ' ' + m + ' ' + 'năm' + ' ' + year.value + ' ' + 'có 30 ngày';
                break;
            case 2:
                if ((year.value % 4 == 0 && year.value % 100 != 0) || (year.value % 400 == 0)) {
                    ketQua.value = 'Tháng' + ' ' + m + ' ' + 'năm' + ' ' + year.value + ' ' + 'có 29 ngày';

                } else {
                    ketQua.value = 'Tháng' + ' ' + m + ' ' + 'năm' + ' ' + year.value + ' ' + 'có 28 ngày';
                }
                break;
            default:
                ketQua.value = 'Tháng' + ' ' + m + ' ' + 'năm' + ' ' + year.value + ' ' + 'có 31 ngày';
        }
    }
    return false;
}