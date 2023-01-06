// document.getElementById('header-top').innerHTML='Hi'
// var number=100;
// var name='ali';
// var seg=true;
// console.log(number);
// alert(number);
// console.log(typeof number);
// console.log(typeof name);
// console.log(typeof seg);

// =======================================OBJECT============================================================
// var person={name:`Ali`, family:`sabori`, age:35}
// console.log(person);
// console.log(person.age);

// var test;
// console.log(test);
// =============================CONST==========================================================================
// const name;
// const name = 'mamad'
// console.log(name);

// var name=Symbol('ali');
// console.log(name);
// console.log(typeof name);
// =============================SYMBOL=========================================================================
// let id1 = Symbol('id')
// let id2 = Symbol('id')

// let id1 = "id"
// let id2 = "id"

// id1 == id2 //false
// ==================================bigint=========================================================================
// var number=25466654654654n;
// console.log(typeof number);

// let users = [
//     {
//         id: Symbol(1),
//         name: 'ali',
//         age: 20
//     },
//     {
//         id: Symbol(1),
//         name: 'reza',
//         age: 15}]
// console.log(users  );
// console.log(users.filter(function (o) { return o.id == 1 }));
// users.find(o=> o.id == 1)


// =================================Arithnic==================================================================================
// ---------------------------(+++++++++)---------------------------------
// let x=20;
// let y=10;
// var result=x+y;
// console.log(result);

// ---------------------------(-------------)---------------------------------
// let x=20;
// let y=10;
// var result=x-y;
// console.log(result);

// ---------------------------(************)---------------------------------
// let x=20;
// let y=10;
// var result=x*y;
// console.log(result);

// ---------------------------(///////////)---------------------------------
// let x=20;
// let y=10;
// var result=x/y;
// console.log(result);

// ---------------------------(%%%%%%%%%%%)---------------------------------
// let x=20;
// let y=10;
// var result=x%y;
// console.log(result);

// ---------------------------(++Y)---------------------------------
// let x=20;
// let y=10;
// var result=++y;
// console.log(result);

// ---------------------------(--Y)---------------------------------

// let x=20;
// let y=10;
// var result=--y;
// console.log(result);

// ---------------------------(Y++)---------------------------------
// let x=20;
// let y=10;
// var result=y++;
// console.log(result);
// console.log(y);

// ---------------------------(--Y)---------------------------------

// let x=20;
// let y=10;
// var result=y--;
// console.log(result);
// console.log(y);

// ================================Assignment=============================================================================
// ---------------------------(+=Y)---------------------------------
// let x=20;
// let y=10;
// x+=y
// console.log(x);

// ---------------------------(-=Y)---------------------------------
// let x=20;
// let y=10;
// x-=y
// console.log(x);

// ---------------------------(*=)---------------------------------
// let x=20;
// let y=10;
// x*=y
// console.log(x);

// ---------------------------(/=)---------------------------------
// let x=20;
// let y=10;
// x/=y
// console.log(x);

// ---------------------------(%=)---------------------------------
// let x=20;
// let y=10;
// x%=y
// console.log(x);

// ---------------------------(>=)---------------------------------

// let x=20;
// let y=10;
// var result=x>=y
// console.log(result);

// ---------------------------(!=)---------------------------------
// let x=20;
// let y=20;
// var result=x!=y
// console.log(result);

// ======================================camparison=======================================================================
// ---------------------------(==)---------------------------------
// let x=20;
// let y=`ali`;
// var result=x==y
// console.log(result);

// ---------------------------(===)---------------------------------
// let x=20;
// let y=`10`;
// var result=x===y
// console.log(result);

// =========================================LOGICAL=============================================================================
// ----------------------------------------&&---------------------------
// let x=10;
// let y=20;
// let z=30;
// var result=(x<y) && (y<z)
// console.log(result);

// ----------------------------------------||---------------------------

// let x=10;
// let y=20;
// let z=30;
// var result=(x<y) || (y>z)
// console.log(result);

// ----------------------------------------!---------------------------
// let x=10;
// let y=20;
// let z=30;
// var result=!(x<y)
// console.log(result);

// ============================================STRING======================================
// var str1=`hello`;
// var str2=` world`;
// var str3=str1+str2;
// console.log(str3);

// var str1=`hello`;
// var str2=`world`;
// str1+=str2;
// console.log(str1);

// var str1=`hello `;
// var str2=` world`;
// str1+=str2;
// console.log(str1);

// var str1=`hello`;
// var str2=`world`;
// var str3=`${str1}     ${str2}`;
// console.log(str3);

// ===================================================ternary=================================================
// var score=15;
// var result=(score>10)?'yes':'no';
// console.log(result);

// ====================================Algoritm======================================================
// let num1 = 10;
// let num2 = 50;
// let num3 = 30;
// let sum=num1+num2+num3;
// let average=sum/3
// console.log(`average is : ${average}`)

// -----or-----

// console.log(eval((num1 + num2 + num3) / 3));

// ---------------------------------------------(prompt)-------------------------------------------------------
// برای گرفتن مقدار از کابر از فانکشن پرامت بهره میبریم
// let number = prompt(`add number:`,40)
// console.log(number);

// ----------------مثال------------------------
// الگوریتمی بنویسید که 2عدد از کاربر بگیرد و درهم ضرب کند و نتیجه  آنرا نمایش دهد
// let num1 = prompt(`please add number1`,10)
// let num2 = prompt(`please add number2`,20)
// let result = num1*num2

// console.log(`result is : ${result}`);
// or به صورت آلرت نمایش دهد
// alert(sum);

// ******************************************************************************************************************************
// در اینجا نوع متغییر نامبر 1 و نامبر2 از نوع استرینگ میباشد و در صورت جمع کردن مانند مثال پایین در کنار هم قرار میگیرند
// ******************************************************************************************************************************

// ------------------مثال-------------------
// let num1 = prompt(`please add number1`,10)
// let num2 = prompt(`please add number2`,20)
// let result = num1+num2

// console.log(`result is : ${result}`);
// console.log(typeof num1);


// =====================================Type of Conversion====================================
// ------------------NUMBER toooo STRING ----------------------
// let a = 10;
// console.log(a);
// console.log(typeof a);

// let a = String(10);
// console.log(a);
// console.log(typeof a);
// or
// let a = (10).toString();
// console.log(a);
// console.log(typeof a);

// ------------------BOOLEAN toooo STRING ----------------------
// let a = false;
// console.log(a);
// console.log(typeof a);

// let a = String(false);
// console.log(a);
// console.log(typeof a);
// or
// let a = (false).toString();
// console.log(a);
// console.log(typeof a);

// -----------------------------------STRING TO NUMBER---------------------------
// let a = (`10`);
// console.log(`value is : ${a}`);
// console.log(typeof a);

// let a = Number(`10`);
// console.log(`value is : ${a}`);
// console.log(typeof a);

// let a = eval(`10`);
// console.log(`value is : ${a}`);
// console.log(typeof a);

// let a = parseInt(`10`);
// console.log(a);
// console.log(typeof a);

// let a = Number(`ali`); //nan is not a number
// console.log(a);
// console.log(typeof a);

// -------------------------------------BOOLEAN TO NUMBER-------------------------------
// let a = Number(false);
// console.log(a);
// console.log(typeof a);

// let a = Number(true);
// console.log(a);
// console.log(typeof a);

// --------------------------------implicit-----------------------------
// در این حالت به صورت ضمنی خود مفسر اعدادی که به صورت استرینگ نوشته شده را به نامبر تبدیل کرده و در یکدیگر ضرب میکند.
// let a = `10` * `20`;
// console.log(a);
// ----------------------------------explicit-----------------------------
// let a = Number(`10`) + Number(`20`);
// console.log(a);

// ----------------مثال------------------------
// الگوریتمی تعیین کنید که ابتدا میزان حقوق را کاربر مشخص کند و سپس با کسر 7درصد حق بیمه و 9درصد مالیات کسر و خالص دریافتی را نمایش دهد
// -------روش اول------
// let salary = Number(prompt(`please add your salary:`));
// let kasri = salary-(0.07 * salary)-(0.09 *salary)
// // console.log(kasri);
// // or
// alert(kasri);

// ------روش دوم--------
// در این حالت با ضرب یا تقسیم مقدار استرینگ به عدد یک آنرا تبدیل به نامبر میککنیم  
// let salary = prompt(`please add your salary:`) * 1

// alert(eval(salary - (0.07 * salary) - (0.09 * salary)))

// ------روش سوم-------
// let salary = prompt(`please enter your salary:`)
// let tax = salary * 9/100;
// let insurance = salary * 7/100;
// let puresalary = salary - (tax + insurance);
//  console.log(`insurance is : ${puresalary}`);
//  console.log(`tax is : ${tax}`);
//  console.log(`insurance is : ${insurance}`);




// ----------------مثال------------------------
// الگوریتمی بنویسید که عددی را از ورودی دریافت کند و زوج یا فرد بودن آنرا نمایش دهد

// let num = prompt(`please add the number:`,40)
// let sum = num % 2
// if (sum==0){console.log(`the number is: even`)}else{
//     console.log(`the number is: Odd`)
// }

// -----------------------------مثال----------------------
// الگوریتمی بنویسید که 5 عدد را از ورودی دریافت کند و میانگین آنهارا محاسبه کند

// let average = 5;
// let sum = 0
// for (let i = 0; i < average; i++) {
//     let num = prompt(`enter your num:`)
//     sum += num * 1
// }

// console.log(sum / average);


// ==========================================Object==================================
// let names =[`Amir` , `Reza` , `Mehran`]
// console.log(names[0]);

// ==========================================Array=======================================

// let selloora = { 
//     names: [`amir`, `reza`, `mehran`], 
//     age: [20, 30, 40], 
//     act: [false, true, true] }
// console.log(selloora.names[0]);

// let users = [
//     {
//         name: 'Amir',
//         age: 20,
//         act: false
//     },
//     {
//         name: 'Reza',
//         age: 20,
//         act: false
//     },
//     {
//         name: 'Mehran',
//         age: 20,
//         act: false
//     },
// ]

// console.table(users);


// =========================================function============================
// با یک ورودی و بدون خروجی
function p(message) {
    console.log("***************")
    console.log(message)
    console.log("***************")
}

// با سه ورودی و خروجی
function sum(a, b, c) {
    return a + b + c
}

let aaaa = sum(10, 20, 30)

p(aaaa)


function getTelegramID(id) {
    return 'https://t.me/' + id
}

function getInstagramID(id) {
    return 'https://instagram.com/' + id
}
let link = getTelegramID("amirex128")
p(link)
// این دوتا یکی هستن بالایی تمیز تره و پاینی تو در توی نوشتیم
p(getInstagramID("amirex128"))


// بدون ورودی و بدون خروجی
function notifyLogin() {
    alert("لطفا اول لاگین کنید")
}
// notifyLogin()

// بدون ورودی با خروجی
function sayHi() {
    let faasf = "hi"
    return faasf
}

//بدون ورودی و با خروجی
function getRezaPay() {
    //بیسبیسشبیس
    //بیسبسیشب
    //بیسشبسیشلس
    return [1000, 5000, 6000, 4000]
}

let pay = getRezaPay()

p(pay)

// با یک ورودی و یک خروجی در دو حالت متفاوت
function isEven(num) {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}


p(isEven(5432542365464))













