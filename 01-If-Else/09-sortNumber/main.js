// - เขียนโปรแกรมสำหรับรับตัวเลขจากผู้ใช้งาน 3 ตัวเลข
// - แสดงผลลัพธ์เป็นตัวเลขที่เรียงกันจากมากไปน้อย
//   เช่นรับค่าเป็น -1 ,4, 0 ให้แสดงผลเป็น 4, 0, -1

const a = prompt("a");
const b = prompt("b");
const c = prompt("c");

if (isNaN(+a) || isNaN(+b) || isNaN(+c)) alert("Invalid Number");
else if (a === "" || b === "" || c === "") alert("Please Enter Something");
else alert([a, b, c].sort((i, j) => j - i));
