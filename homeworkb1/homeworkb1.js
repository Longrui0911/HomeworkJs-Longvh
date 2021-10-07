// 1. Khai báo 5 tên biến đúng, 5 tên biến sai
//ten dung
let myName = 'long';
let myPhoneNumber = '0326887695';
let userName = 'Longrui';
let myEmail = 'longrui0911@gmail.com';
let myAge = 20;

// ten sai 
let 1laso = '';
let li@09 = '';
let ba%5 = '';
let my@gmail = '';
let ten*cua*ban = '';


// 2. Làm 5 bài toán sử dụng 5 toán tử: + - * / %

let x = 5;
let y = 10;

//toan tu +
console.log(x + y) // 15
    // toan tu -
console.log(y - x) // 5
    // toan tu *
console.log(x * y) // 50
    // toan tu /
consolog.log(y / x) // 2
    // toan tu %
consolog.log(y % x) // 0 


// 3. Tính kết quả các bài tập sau đây, in ra màn hình và giải thích tại sao lại ra được kết quả như vậy:
//    3.1 x = 5. Tính: ++x + x++ - --x - x--
//    3.2 x = 6, y = 10. Tính: ++y - y++ + x++ + x-- - --x - --y
//    3.3 x = 10, y = 12, z = 16. Tính: x++ + z-- - --x + --y - y-- + ++y + ++z + --z + x--
//    enter, tính lần 2 bài 3.3: ++x - x++ + z++ + ++y - y--

// 3.1 ++x (6) + x++ (6)- --x(6) - x--(6) = 0
// 3.2 ++y(11) - y++(11) + x++(6) + x-- (7) - --x(5) - --y(11)= -3
// 3.3-1 x++(10) + z--(16) - --x(10) + --y (11)- y--(11) + ++y(11) + ++z (16) + --z(15) + x--(10) =68
// 3.3-2 ++x (11) - x++ (11) + z++ (16) + ++y(13) - y-- (13) = 16

// 4. Khai báo 5 biến với 5 kiểu dữ liệu 
let a = 10; //number
let b = 'hello'; //string
let c = {
    ten: 'long',
    ho: 'vo'
}; //object
let d = ["vo", "hoang", "long"]; //array
let e = true; //boolean 

// 5 5. Khai báo biến với kiểu dữ liệu Array như sau: [1,2,3,4,5,6,7,8,9,10]
//    5.1 Tính tổng (+) phần tử đầu tiên (0) và phần từ thứ 2 (1)
//    5.2 Tính tích (*) phần tử đầu tiên (0) và phần từ cuối cùng (9)

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//5.1
console.log(number[0] + number[1]);
// 5.2
console.log(number[0] + number[9]);

// 6. Khai báo 1 biến với kiểu dữ liệu Object, bào gồm firstName, lastName, age, favorite
//    6.1 Thay đổi firstName, lastName với text bất kỳ
//    6.2 In ra màn hình firstName + lastName mới

var myInfo = {
    firstName: "long",
    lastName: "vo",
    age: 19,
    favorite: "leomessi"
};

//6.1
myInfo.firstName = 'toi'
myInfo.lastName = 'la ai'

//6.2
console.log(myInfo.firstName + ' ' + myInfo.lastName);