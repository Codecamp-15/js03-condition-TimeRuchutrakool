// - จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลขเข้ามา 2 ค่า
// - ให้โชว์ข้อความผลบวกของตัวเลขทั้ง 2
// - หากมี input อันนึงไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”

let a = +prompt("Number a");
let b = +prompt("Number b");
console.log(a);
console.log(b);

if (isNaN(a) || isNaN(b)) alert("Invalid number");
else alert(a + b);
