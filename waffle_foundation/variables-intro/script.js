'use strict'
// Please don't delete the 'use strict' line above
//変数入門　演習問題
// 例
const school = "Waffle College";
console.log(school); // "Waffle College" を表示
let week = 1;
console.log(week); // "1" を表示


// 以下  にあなたのコードを書いてください
//演習1
const name = "Akane Kawamura"; //名前は変わらないのでconst
console.log(name); // あなたの名前を表示
let age = 21; //年齢は変わる可能性があるし、計算方法もあるからlet
console.log(age); // あなたの年齢を表示
const isProgrammer = true;  //isProgrammerは変わらないのでconst
console.log(isProgrammer); // "true" を表示
let currentTask = 1 //この後変えることもあり得るためlet
console.log(currentTask); // "1" を表示

//演習2
currentTask = 2; //値の再代入
console.log (currentTask); //"2"を表示

//演習3
// 正方形の面積を計算して保存
const squareSideLength = 2;
// ここにあなたのコードを書いてください
let squareArea = squareSideLength ** 2; //1辺＊1辺だが、同じ長さのため2乗
console.log(squareArea); // "4" を表示

// 長方形の面積を計算して保存
const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
// ここにあなたのコードを書いてください
let rectangleArea = rectangleBaseLength * rectangleHeightLength; //底辺*高さ
console.log(rectangleArea); // "12" を表示

// 三角形の面積を計算して保存
const triangleBaseLength = 4;
const triangleHeightLength = 5;
// ここにあなたのコードを書いてください
let triangleArea = triangleBaseLength * triangleHeightLength / 2; //底辺*高さ/2
console.log(triangleArea); // "10" を表示

//変数のタイプ-1
// 例
const variableString = "I am a string";
console.log(typeof variableString); // "string"と表示されましたか？→OK

// 問題1
const variableNumber = 2;         // "number"と表示させるにはどんな値を代入すればいいでしょう？→数字
console.log(typeof variableNumber); // "number"と表示されましたか？

// 問題2
// ここにコードを書いて、"boolean"と表示されるようにしてください。
const variableBoolean = true; //booleanはtrueかfalseのためどちらかをいれたらいい
console.log(typeof variableBoolean);


// 問題3
//ここにコードを書いて、"undefined"と表示されるようにしてください。
let variableUndefined; //undefinedは宣言のみ（値が入っていない）変数、もしくは実引数が存在しない仮引数に自動的に割り当てられるメソッドを持たないデータなどを入れた場合に出るらしい。
console.log(typeof variableUndefined);

//constで定義なしはできない⇨constは初期値がないと使えない


//変数のタイプ-2
const numberA = 200; //数字を入れた
const numberB = 400;

const average = (numberA + numberB) / 2; //2つの値の合計/2だから普通の演算と同じように（）で括った。
console.log(average); // numberA と numberB の平均が表示される。

//中級演習-----------------------------------------
//1
// 円の円周と面積を計算して保存する
const circleDiameter = 10;
// ここにあなたのコードを書いてください
const circleRadius = circleDiameter / 2; //半径を指定してみた
const circleCircumference = circleDiameter * Math.PI; //直径*π
const circleArea = circleRadius ** 2 * Math.PI; //半径2乗＊π
console.log(circleCircumference); // "31.41592653589793" に近い値を表示
console.log(circleArea); // "78.53981633974483" に近い値を表示


//2
let a = "B"; 
let b = "A";
let c = b; // c = "A"
b = a; // b = "B"
a = c; // a = "A"

console.log(a); // "A" を表示
console.log(b); // "B" を表示

//任意課題------------------------------------

//応用演習1
let value = 1;

console.log(value); // "1" を表示

// value に何かを行う
value = value * 2;
console.log(value); // "2" を表示

// value に何かを行う
value = value * 2;
console.log(value); // "4" を表示

// value に何かを行う
value = value * 2;
console.log(value); // "8" を表示

// value に何かを行う
value = value * 2;
console.log(value); // "16" を表示

// value に何かを行う
value = value * 2;
console.log(value); // "32" を表示

// value に何かを行う
value = value * 2;
console.log(value); // "64" を表示

for (value = 0; value++; value <8) {
    console.log(value * 2);
}

//--------------------------------------------------

//応用演習2
const firstName = "Yan";
const lastName = "Fan";
const city = "Tokyo";

console.log("Hello, my name is " + firstName + " " + lastName +". I live in " + city + "."); // "Hello, my name is Yan Fan. I live in Tokyo." を表示

//--no finish-------------no finish----------no finish-------------

//応用演習3
// ヒント： ここで何かする必要があるかもしれません
let test = 0;

function counter(number) {
// ここにあなたのコードを書いてください
 number = number + 1;
  }

counter(); // => 1
counter(); // => 2
counter(); // => 3

//-------------------------------------------

//応用演習4
function isOdd(givenNumber) {
// ここにあなたのコードを書いてください
// 与えられた数値によって、"Yes, it's odd" もしくは "No, it's even" を表示

if (givenNumber % 2 == 1) {
  console.log("Yes, it's odd");
} 
else {
  console.log("No, it's even");
}
  }


