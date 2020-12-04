// "use strict";
// //                        Работа с переменными
// // let num = 3;
// // alert (num);

// // let a = 10,
// //     b = 2;
// //     alert(a + b);
// //     alert(a * b);
// //     alert(a - b);
// //     alert(a / b);
// // alert (`${a + b}
// // ${a * b}
// // ${a / b}`);



// //   let c = 15,
// //       d = 2;
// //   let result = c + d;
// //   alert(result);

// // let a = 10,
// //     b = 2,
// //     c = 5;
// //     let result = a + b + c;
// //     alert(result);

// // let a = 17,
// //     b = 10;
// // let c = a - b;
// // let result = c;
// // console.log(result); 

// //                     //    Робота со строками


// // let str1 = 'Привет',
// //     str2 = 'мир!';
// // console.log(str1 + ' ' + str2);

// // let nam = 'Kolek',
// //     age = 41;
// // console.log('Привет' + ' ' + nam);
// // console.log('Мне' + ' ' + age + ' ' + 'лет' ); 

// //                                                //Функция Prompt

// // const answer = prompt('Your name');
// // alert (`Ваше имя ${answer}`);

// // for (let i = 0; i < 1; i++) {
// // const num = prompt('Узнайте квадрат числа:','');
// // if (isNaN(num) == true || num == 0 || num == '') {
// //     alert('Вы не ввели число или ввели 0.Введите пожалуйсто число');
// //     i--;
// // } else {
// // const a = Math.pow (num, 2);
// // e
// // alert (a);
// // }
// // }


// // Практика
// //  Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.

// // let time = {
// //        resMin:{},
// //        resHour: {},
// //        resDay:{}

// // };

// // const question = +prompt('Введите количество минут', '');

// //     console.log(question);

// //Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.

// // let hour = '11',
// //     minute = '19',
// //     second = '30';

// //    console.log(hour+':',+ minute+':',+second);  

// //................Работа с массивами...................
// //Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.
// // let arr = ['a', 'b', 'c'];
// // alert(arr[0]+','+arr[1]+','+arr[2]);
// //С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.

// // let arr = ['a', 'b', 'c'];
// // document.write(arr[0]+','+arr[1]+','+arr[2]);

// //Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.
// // let arr = ['2', '5', '3', '9'];
// // let result = arr[0]*arr[1] + arr[2]*arr[3];
// // console.log(result);
// //...................................................Объекты (ассоциативные массивы).....................

// // var obj = {
// //     a: 1, 
// //     b: 2, 
// //     c: 3
// // };
// // console.log(obj['b']);

// //..............................Площади фигур ...................
// // let pi = 3.14,
// //  r = Math.pow(100, 2),
// //  s = pi * r;    //Площадь круга

// // alert(s);
// //  let a;
// //  let S = Math.pow(a, 2);//Площадь квадрата
// // alert(S);

// // let a = 2,
// //     b = 3,
// //     p = 2 * (a + b);//периметр прямокутника формула
// //     console.log(p);

// // let F = 5,
// // C = (F - 32) / 1.8 ;
// // console.log(C); //Из Цельсия в Фарингейты

// //.........................................Обьекты......................................

// // let arr = [1,2,3,4,5];
// // let key1 = 1,
// // key2 = 2;
// // console.log(arr[key1] + arr[key2]);

// // let obj = {'a': 1, 'b': 2, 'c':3};
// // let key = 'b';
// // console.log(obj[key]);

// // let arr1 = [1, 2, 3];
// // let arr2 = arr1;

// // arr1[0] = 'a';
// // arr2[0] = 'b';

// // console.log(arr2);
// //..............................................IF и ELSE.................
// // let arr = [1,2,3],
// //     a = arr[arr.length-1];
// // if(a == 3) {
// //     console.log(arr[0] + arr[1] + arr[2]);
// // }
// // let num =[1,2,3,4,5,6];
// // if(num[0] == 1){
// //     console.log('!');
// // }

// // let a = 5002;

// // if(String(a)[0] == 5){
// // console.log('!');
// // }else{
// //     console.log('q');
// // }

// // let num = 12345678;
// // let a = String(num)[1];

// // if (a == 0 || a == 2 || a == 4 || a == 6 || a == 8) {
// //     console.log('Четное');
// // } else {
// //     console.log('Нечетное');
// // }
// //...................................Остаток от деления.................
// // let a = 11;
// // let b = a % 3;
// // if(b == 0){
// //     console.log('четное');
// // }else{
// //     console.log(b);
// // }

// //..................................Задачи IF ELSE..................................
// //...1)
// // function mounthEdg () {
// //     let mounth = prompt('Введите пожалуйста месяц');
// //     let a = (mounth == 5 || mounth == 3 || mounth == 4) ? 'Весна' :
// //         (mounth == 8 || mounth == 6 || mounth == 7) ? 'Лето' :
// //         (mounth == 11 || mounth == 9 || mounth == 10) ? 'Осень' :
// //         (mounth == 2 || mounth == 12 || mounth == 1) ? 'Зима' : 'Ввели неправильный месяц';
// //         alert(a);
// // }
// // mounthEdg();
// //...2)
// // let a = 'abcde';
// // let b = (a[0] == 'a') ? 'Да' : 'Нет';
// // console.log(b);

// //...3)

// // let a = 12345,
// //     b = String(a)[2],
// //     c = (b == 1 || b == 2 || b == 3) ? 'Да' : 'Нет';
// //     console.log(c);


// // .....................................switch-case.....................................

// // let num = 1;

// // switch (num) {
// //     case 1:
// //         console.log('Зима');
// //         break;
// //     case 2:
// //         console.log('Весна');
// //         break;
// //     case 3:
// //         console.log('Лето');
// //         break;
// //     case 4:
// //         console.log('Осень');
// //         break;
// //     default:
// //         console.log('Невремя года');
// //         break;
// // }

// // let num = -11;
// // let result = num >= 0 ? 1 : -1;
// // console.log(result);

// // let a = 5 * (7 - 4);
// // let b = 1 + 2 + 7;
// // console.log(a > b);

// // let login = prompt('Ваш логин');

// // if (login == 'Админ') {
// //     let password = prompt('Ваш пароль');
// //     if (password == 'Я главный') {
// //         alert('Здравствуйте');
// //     } else if (password == null) {
// //         alert('Отменено');
// //     } else {
// //         alert('Неверный пароль');
// //     }

// // } else if (login == '' || login == null) {
// //     alert('Отменено');
// // } else {
// //     alert('Я вас незнаю');
// // }

// // let age = confirm('Вам есть 18?');
// // if (age == true) {
// //     alert('Ok');
// // } else {
// //     alert('Подрасти');
// // }

// //..................................Цикл while  и  For в JavaScript...........................
// // let i = 10;
// // while (i >= 1) {
// //     console.log(i);
// //     i --;
// // }

// // for (let i = 0; i <= 99; i++) { //Проверка -- Нечетные if (i % 2 == 1)...четныеif (i % 2 == 0)
// //     if (i % 2 == 1) {
// //         console.log(i);
// //     }
// // }
// //.................................................Накопление результата в цикле...........
// // let a = 0;
// // for (let i = 1; i <= 99; i++) {
// //     if (i % 2 == 0) {

// //         a += i;
// //     }
// // }
// // console.log(a);
// //....................................Цикл for для массивов............................
// // let a = ['a', 'b', 'c', 'd', 'e'];
// // for (let i = 0; i <= a.length - 1; i++) {
// // console.log(a[i]);
// // }
// //.................СУММА КВАДРАТОВ МАСИВА...
// // let a = 0;
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// // for (let i = 0; i < arr.length; i++) {
// //     a += Math.pow(arr[i], 2); 


// // }
// // console.log(a);

// // let arr = [2, 5, 9, 15, 1, 4];
// // for (let i = 1; i < arr.length; i++) {
// //     if (arr[i] > 3 && arr[i] < 10) {
// //         console.log(arr[i]);
// //     }
// // }
// // let b = 0;
// // let a = [1, -2, 3, 4, 5, -6, 7, -8, 9, 11, -22, 33, 44, -55, 66, -77, 88, -99, ];
// // for (let i = 0; i < a.length; i++) {
// //     if (a[i] < 0) {
// //         b -=a[i];
// //         console.log(b);
// //     }
// // }
// //.................Найти Среднее арифмитическое................
// // let b = 0;
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // for (let i = 0; i < arr.length; i++) {
// //     b += arr[i] / arr.length;
// // }
// // console.log(b);
// //..................................Найти элементы которые начинаются на цифру 1, 2 или 5....
// // let arr = [10, 20, 30, 50, 235, 3000];
// // console.log(arr.filter(num => ['1','2','5'].includes(num.toString()[0])));
// //................... ФУНКЦИИ..........................
// // let a = 1;

// // function Counter() {

// //     for (let i = 1; i <= 100; i++) {//    сумма чисел от 1 до ста
// //         a += i;

// //         console.log(a);
// //     }
// // }
// // Counter();

// // function cub(num){
// //     console.log(Math.pow(num, 3)); // Віводит в консоль куб числа
// // }
// // cub(2);

// // function сheck(num){
// //     let a = (num < 0) ? '---' : '+++'; //Проверяем на отрецательное или полож...
// //     console.log(a);
// // }
// // сheck(1);

// // function sum(num1, num2, num3){
// //     console.log(num1+num2 +num3);
// // }
// // sum(1,2,3);

// // let param1 = 1;
// // let param2 = 2;
// // let param3 = 3;
// // let param4 = 1;
// // let param5 = 2;
// // let param6 = 3;
// // function func(num){
// // console.log(num + num);
// // }

// // func(param3, param2, param1,);


// //.........................................СВОЙСТВА.......................

// //........................................Свойство length
// //Свойство length позволяет узнать длину строки. Под длиной понимается количество символов в ней.

// // let str = 'abcde';
// // console.log(str.length);

// //............................................Метод toLowerCase.........................
// //......................Метод toLowerCase производит преобразование строки в нижний регистр

// // let str = 'Язык JAVASCRIPT';
// // console.log(str.toLowerCase());

// // ..................................................Метод toUpperCase................
// //.................Метод toUpperCase производит преобразование строки в верхний регистр

// // let str = 'Язык JavaScript';
// // console.log(str.toUpperCase());

// //.................................................Метод split.....................
// //............Метод split осуществляет разбиение строки в массив по указанному разделителю.

// // let str = 'html-css-javascript';
// // let arr = str.split('-');
// // console.log(arr);

// // let str = '12345';
// // let arr = str.split('');

// // console.log(arr);

// // let str    = '123456789';
// // let arr1   = str.split('');//разобьем строку в массив с помощью split по разделителю ''
// // let arr2   = arr1.reverse();//Перевернем этот масив с помощью reverse 
// // let result = arr2.join('');//и затем сольем перевернутый массив обратно с помощью join:

// // console.log(result);

// //.............................................Метод substr......................
// //..........Метод substr возвращает подстроку из строки...........................

// // let str = 'abcde';
// // let sub = str.substr(0, 3);

// // console.log(sub);

// //.........................................Метод substring..........................
// //...Метод substring возвращает подстроку из строки (исходная строка при этом не изменяется).

// // let str = 'abcde';
// // let sub = str.substring(1, 3);

// // console.log(sub);

// //........................................Метод slice...........................
// //Метод slice возвращает подстроку из строки (исходная строка при этом не изменяется).

// // let str = 'qwertyuiop';
// // let sub = str.slice(1, -3);
// // console.log(sub);

// //..........................................Метод concat.............................
// //Метод concat соединяет указанные строки. Количество строк для объединения не ограниченно.

// // let str1 = 'string1';
// // let str2 = 'string2';
// // let str3 = 'string3';

// // let result = str1.concat(str2, str3);
// // console.log(result);

// //...........................................Метод indexOf...........................
// //Метод indexOf осуществляет поиск подстроки (указывается первым параметром) в строке.

// // let str = 'Я учу учу Javascript';
// // console.log(str.indexOf('учу'));

// //............................................Метод lastIndexOf........................
// //Метод lastIndexOf осуществляет поиск подстроки (указывается первым параметром) в строке. Поиск ведется с конца строки.

// // let str = 'Б..Б.....Б';
// // console.log(str.lastIndexOf('Б', 10));

// //..............................................Метод startsWith()......................
// //помогает определить, начинается ли строка с символов указаных в скобках, возвращая, соответственно, true или false.

// // var str = 'Быть или не быть, вот в чём вопрос.';

// // console.log(str.startsWith('Быть'));        // true
// // console.log(str.startsWith('не быть'));     // false
// // console.log(str.startsWith('не быть', 9));  // true

// //...............................................Метод endsWith()..........................
// //позволяет определить, заканчивается ли строка символами указанными в скобках, возвращая, соотвественно, true или 
// //false.

// //.................................................Метод trim...........................
// // Давайте удалим концевые пробелы у строки:

// // let str = '  строка  ';
// // console.log(str);

// //................................................Метод charAt............................
// //...................Метод charAt возвращает символ, стоящий на указанной позиции в строке.
// // Давайте выведем символ, стоящий на нулевой позиции:

// // let str  = 'abcde';
// // let char = str.charAt(3);

// // console.log(char);

// //.................................................Метод charCodeAt.............
// //Метод charCodeAt возвращает код символа (числовое значение), стоящего на определенной позиции в строке.

// // let str  = 'ABC';
// // let code = str.charCodeAt(2);

// // console.log(code);

// //....................................................Метод join..............................
// //..............Метод join объединяет элементы массива в строку с указанным разделителем

// // let str =  ['я', 'учу', 'javascript', '!'],
// // a = str.join('+');


// // console.log(a);

// // let a =  'сделайте заглавным';
// //  a = a.split('');
// //  a[0] = a[0].toUpperCase();
// // let result = a.join('');

// // console.log(result);

// // let a = '123456',
// // b = a.split('').reverse().join('');

// // console.log(b);

// // let a = 'http://old.code.mu/html';
// // if (a.substr(-4) == 'html') {
// //     console.log('Да');
// // } else {
// //     console.log('Нет');
// // }

// // let numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
// // let result = numbers.filter(function(elem){
// //     if(elem > 0){
// //         return true;
// //     }else{
// //         return false;
// //     }
// // });

// // console.log(result);

// // let arr = [1, 2, 3, 4, 5];

// // let result = arr.every(function (elem, ind,) {
// //     if (elem * ind < 21) {
// //         return true;
// //     } else {
// //         return false;
// //     }
// // });

// // console.log(result);


// // let day = function (a) {
// //     switch (a) {
// //         case 1:
// //             return 'пн';
// //         case 2:
// //             return 'вт';
// //         case 3:
// //             return 'ср';
// //         case 4:
// //             return 'чт';
// //         case 5:
// //             return 'пт';
// //         case 6:
// //             return 'сб';
// //         case 7:
// //             return 'вс';
// //         default:
// //             return 'Вы ввели некоректное число';
// //     }
// // };
// // console.log(day(4));

// //Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - 
// //выведите 'да', а если нет - выведите 'нет'.

// // let arr = [1, 2, 3, 4, 5, 6];

// // function result(arr) {
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] == 5) {
// //             return true;
// //         }

// //     }
// //     return false;
// // }
// //     console.log(result(arr));

// // function b(a, num) {
// //     if (Number.isInteger(a / num)) {//проверяем на целое число
// //         return true;
// //     }
// //     return false;
// // }
// // console.log(b(311, 1));
// // console.log(b(311, 31));
// // console.log(b(311, 11));

// // function check(a) {
// //     for (let i = 0; i < a.length; i++) {
// //         if (a[i] === a[i - 1]) {//Проверил на дубликат
// //             return true;
// //         }
// //     }
// //     return false;
// // }


// // console.log(check([1, 2, 3, 4, 4, 5]) ? 'Да' : 'Нет');

// // let arr=[];
// // for(let i = 0;i<10;i++){
// //     arr[i] = '';
// //     for(let j=0;j<=i;j++){
// //         arr[i] += i+1;
// //     }
// // }
// // document.write(arr);
// // console.log(arr);

// // for (var i = 1; i <= 9; i++) {
// // 	for (var j = 1; j <= i; j++) {
// //         document.write(i);
// //         
// // 	}
// //     document.write('<br>');
// //     
// // }
// //......................................Заполнение массивов...........

// // function arrayFill(a, b) {
// //     var arr = [];
// //     for (let i = 0; i < b; i++) {

// //         arr.push(a);

// //     }
// //     return arr;
// // }

// // console.log(arrayFill('x', 7));


// // let array = [''];
// // for (let i = 1; i < 10; i++) {
// //     for (let j = 1; j <= 4; j++) {
// //         console.log(i);
// //     }

// // }

// // const obj = {
// //     a: 1,
// //     b: 2,
// //     c: 3,
// //     d: 4,
// //     e: 5
// // };

// // const result = {};

// // for (var key in obj) {// Перебираем и переварачиваем обьект
// // result[obj[key]] = key;
// // }
// // console.log(result);

// //...........................................Подсчет количества элементов в массиве................


// // var arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// // var count = {};

// // for (var i = 0; i < arr.length; i++) {
// // 	if (count[arr[i]] === undefined) {
// // 		count[arr[i]] = 1;
// // 	} else {
// // 		count[arr[i]]++;
// // 	}
// // }

// // console.log(count); //выведет {a: 3, b: 2, c: 1}

// //.................................................Перебор многомерных массивов............

// // var arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

// // for (var i = 0; i < arr.length; i++) {
// // 	for (var j = 0; j < arr[i].length; j++) {
// // 		alert(arr[i][j]);
// // 	}
// // }

// //..............................Правильное использование пользовательских функций...........


// // function isNumberInRange(num) {
// //     if (num > 0 && num < 10) {
// //         return true;
// //     }
// //     return false;
// // }



// // function getDigitsSum(num) {
// //     let sum = 0;
// //     let str = String(num);
// //     for (let i = 0; i < str.length; i++) {
// //         sum += Number(str[i]);


// //     }

// //     return sum;
// // }


// // for (let i = 0; i <= 2020; i++) {

// //     if (getDigitsSum(i) == 13) {
// //         console.log(i + ' ');
// //     }

// // }
// //...................................................................................
// // function isEven(num) {

// //     if (num > 0 && num % 2 == 0) {//Проверили на чет нечет
// //         return true;
// //     }
// //     return false;
// // }

// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
// // let newArr = [];

// // for (let i = 0; i < arr.length; i++) {//Перебераем массив
// //     if (isEven(arr[i]) == false) {//Выявляем нечет
// //         newArr.push(arr[i]);//Добовляем в массив нечет

// //     }
// // }
// // console.log(newArr);
// //..........................................Проверка на делители............................................
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// // let newArr = [];

// // function getDivisors(num) {
// //     for (let i = 0; i < arr.length; i++) {

// //         if (Number.isInteger(num / arr[i]) == true) {
// //             newArr.push(arr[i]);
// //         }
// //     }
// //     return newArr;
// // }

// // console.log(getDivisors(24));
// //..........................................................Еще вариант

// // function getDivisors(num) {
// //     let result = [];
// //     for (let i = 2; i < num; i++) {
// //         if (num % i == 0) {
// //             result.push(i);
// //         }
// //     }
// //     return result;
// // }
// // console.log(getDivisors(400));


// //.................................................роверять, есть ли в массиве элемент с таким значением......

// // function inArray(value, arr) {
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] == value) {
// //             return value;
// //         }
// //     }
// //     return false;
// // }
// // let arr = [1,2,3,4,5,6];
// // console.log(inArray(5, arr));
// //.................................................число и проверять, простое оно............

// // function isSimple(num) {
// // 	for (var i = 2; i < num; i++) {
// // 		if(num % i == 0) {
// // 			return false;
// // 		}
// // 	}

// // 	return true;
// // }

// // alert(isSimple(13)); //выведет true
// //................................................Перебор обьекта..........................................

// // const options ={
// //     name: 'Test',
// //     width: 1024,
// //     height: 1024,
// //     colors: {
// //         border: 'black', 
// //         bg: 'red'
// //     },
// //     makeTest: function(){
// //         console.log('test');
// //     }
// // };
// // console.log(options.name);

// // delete options.name;
// // console.log(options.name);
// // let counter = 0;

// // for(let key in options){
// //     if(typeof(options[key])==='object'){
// //         for(let i in options[key]){
// //             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// //             counter++;
// //         }
// //     }else{
// //         console.log(`Свойство ${key} имеет значение ${options[key]}`);
// //         counter++;
// //     }

// // } 
// // console.log(counter);
// // options.makeTest();
// // const {border, bg} = options.colors;
// // console.log(bg);
// // // console.log(Object.keys(options).length);

// //...............................Метод forEach........................................

// // const arr = [2,3,6,8,10];
// // arr.forEach(function(item, i, arr){
// // console.log(`${i}: ${item} внутри массива ${arr}`)
// // });
// // let a =[1,2,3,11,4,5,6,10];

// // console.log(Math.max(...a));


// // function makePair(num1, num2) {
// // 	return [...arguments];
// // }
// // console.log(makePair(1, 2,5));
// let arr;
// function sumArray(arr1, arr2) {
// 	for (arr of arr2){
// 		arr1.push(arr);
// 	}
// return arr1;
// }

// console.log(sumArray([1, 2, 3,4],[0,9,9,8,7,7,7]));

// function parseArray(arr) {
// 	return arr.map((a) => a.toString());
// }
// console.log(parseArray([1, 2, 'r', 4, 5, 'y', 7]));

// function word(s) {
// 	const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
// 	return words.indexOf(s);
// }
// console.log(word("three"));



function isOdd(num) {
	
return num.map((x) => x % 2 == 0);

} 
console.log(isOdd([-5, -50, 0, 25, -19, 12, 23, -71]));

