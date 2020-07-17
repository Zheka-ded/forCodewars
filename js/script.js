// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric 
// digits that occur more than once in the input string. The input string can be assumed to contain only 
// alphabets (both uppercase and lowercase) and numeric digits.

// Напишите функцию, которая будет возвращать количество различных буквенных символов без учета регистра и числовых цифр, 
// которые встречаются во входной строке более одного раза. Можно предположить, что входная строка содержит только 
// алфавиты (как прописные, так и строчные) и числовые цифры.

function duplicateCount(text){

    let testSet = new Set();

    text = text.toLowerCase().split('');

    for(let i = 0; i < text.length; i++) {
        for(let k = 0; k < text.length; k++) {
            if(text[i] === text[k] && i !== k) {
                testSet.add(text[k])
            }
        }

    }

    console.log(testSet.size)
}

// // // ##################################################################################################### 
// duplicateCount("text"); // 1
// duplicateCount(""); // 0
// duplicateCount("abcde"); // 0
// duplicateCount("aabbcde"); // 2
// duplicateCount("aabBcde"); // 2
// duplicateCount("Indivisibility"); // 1
// duplicateCount("Indivisibilities"); // 2

// // // ##################################################################################################### 
// // // ##################################################################################################### 
// // // ##################################################################################################### 

// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

// Hint: Don't forget to check for bad values like null/undefined

// Рассмотрим массив / список овец, где некоторые овцы могут отсутствовать на своем месте. 
// Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает, что присутствует).

// Подсказка: не забудьте проверить наличие плохих значений, таких как null / undefined

let array1 = [
    true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true 
];

function countSheeps(arrayOfSheep) {
    let count = 0;
    for(let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) count++
    }

    console.log(count)
}

// // // ##################################################################################################### 
// countSheeps(array1);

// // // ##################################################################################################### 
// // // ##################################################################################################### 
// // // ##################################################################################################### 

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, 
// for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. 
// For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, 
// four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. 
// aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will output the error rate of the printer 
// as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. 
// Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// #Examples:

// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"

// На фабрике принтер печатает этикетки для коробок. Для одного вида коробок принтер должен использовать цвета, 
// которые для простоты названы буквами от a до m.

// Цвета, используемые принтером, записываются в контрольной строке. Например, «хорошая» строка управления будет aaabbbbhaijjjm, 
// что означает, что принтер использовал три раза цвет a, четыре раза цвет b, один раз цвет h, а затем один раз цвет a ...

// Иногда возникают проблемы: возникает нехватка цветов, техническая неисправность и «плохая» контрольная строка, 
// например aaaxbbbbyyhwawiwjjjwwm с письмами не от а до м.

// Вы должны написать функцию printer_error, которая для данной строки будет выводить коэффициент ошибок принтера в виде строки, 
// представляющей рациональное число, числитель которого представляет собой число ошибок, а знаменатель - длину управляющей строки. 
// Не уменьшайте эту дробь до более простого выражения.

// Строка имеет длину, большую или равную единице, и содержит только буквы от ato z.

function printerError(s) {

    s = s.split('');

    const allowedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];

    // вместо массива допустимых символов можно было использовать charCodeAt
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

    let allowedCharactersCount = 0;
    let forbiddenSymbolsCount = 0;


    for(let i = 0; i < s.length; i++) {
        if(allowedCharacters.indexOf(s[i]) !== -1) {
            allowedCharactersCount++;
        } else {
            forbiddenSymbolsCount++;
        }
    }

    // ну и вывод вместо сложений можно было вставить s.length

    // console.log(`${forbiddenSymbolsCount}/${s.length}`);
    console.log(`${forbiddenSymbolsCount}/${allowedCharactersCount + forbiddenSymbolsCount}`);
}

let s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
// error_printer(s) => "3/56"

let ss="aaabbbbhaijjjm";
// error_printer(s) => "0/14"

let sss="aaaxbbbbyyhwawiwjjjwwm";
// error_printer(s) => "8/22"

// // // ##################################################################################################### 
// printerError(s);
// printerError(ss);
// printerError(sss);

// // // ##################################################################################################### 
// // // ##################################################################################################### 
// // // #####################################################################################################

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// Это довольно просто. Ваша цель - создать функцию, которая удаляет первый и последний символы строки. 
// Вам дан один параметр, исходная строка. Вам не нужно беспокоиться о строках длиной менее двух символов.

function removeChar(str){
    str = str.split('');

    let removedSumbol = str.pop();
    removedSumbol = str.shift();
    
    console.log(str.join(''))
};

// function removeChar(str) {
//     console.log(str.slice(1, -1));
// }

// const removeChar = str => console.log(str.slice(1,-1));

// // // ##################################################################################################### 
// removeChar('eloquent'); // 'loquen'
// removeChar('country'); // 'ountr'
// removeChar('person'); // 'erso'
// removeChar('place'); // 'lac'

// // // ##################################################################################################### 
// // // ##################################################################################################### 
// // // #####################################################################################################

// A square of squares
// You like building blocks. You especially like building blocks that are squares. 
// And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. 
// Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, 
// whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, 
// it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// Квадрат квадратов
// Вам нравятся строительные блоки. Вы особенно любите строительные блоки, которые являются квадратами. 
// И что вам даже нравится больше, так это расположить их в квадратные квадратные строительные блоки!

// Однако иногда вы не можете расположить их в квадрат. Вместо этого вы получите обычный прямоугольник! 
// Эти проклятые вещи! Если бы у вас был способ узнать, работаете ли вы сейчас напрасно ... Подождите! Это оно! 
// Вы просто должны проверить, является ли ваше количество строительных блоков идеальным квадратом.

// задача
// Учитывая целое число, определите, является ли оно квадратным числом:

// В математике квадратное число или идеальный квадрат - это целое число, которое является квадратом целого числа; другими словами, 
// это произведение некоторого целого числа на себя.

// В тестах всегда используется какое-то целое число, поэтому не беспокойтесь об этом в языках с динамической типизацией.

// Пример:
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

function isSquare(n) {
    let res = true;
    if(Math.sqrt(n) % 1 !== 0) res = false;
    return console.log(res)
};

// // // ##################################################################################################### 
// isSquare(-1); //false
// isSquare(0); //true
// isSquare(3); //false
// isSquare(4); //true
// isSquare(25); //true
// isSquare(26); //false

// // // ##################################################################################################### 
// // // ##################################################################################################### 
// // // #####################################################################################################

// Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. 
// Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

// Let's assume that a song consists of some number of words (that don't contain WUB). 
// To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first 
// word of the song (the number may be zero), after the last word (the number may be zero), 
// and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, 
// including "WUB", in one string and plays the song at the club.

// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

// Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, 
// he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

// Input
// The input consists of a single non-empty string, consisting only of uppercase English letters, 
// the string's length doesn't exceed 200 characters

// Output
// Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

// Examples
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
//   // =>  WE ARE THE CHAMPIONS MY FRIEND

// Поликарп работает ди-джеем в лучшем ночной клуб Берляндии, и он часто использует музыку дабстеп в своем исполнении. 
// Недавно он решил взять пару старых песен и сделать из них дабстеп-ремиксы.

// Давайте предположим, что песня состоит из некоторого количества слов (которые не содержат WUB). 
// Чтобы сделать дабстеп-ремикс этой песни, Поликарп вставляет определенное количество слов «WUB» перед первым словом песни (число может быть ноль), 
// после последнего слова (число может быть ноль) и между словами ( хотя бы одно между любой парой соседних слов), 
// а затем мальчик склеивает все слова, включая «WUB», в одну строку и играет песню в клубе.

// Например, песня со словами «I AM X» может преобразоваться в дабстеп-ремикс как «WUBWUBIWUBAMWUBWUBX» и не может преобразоваться в «WUBWUBIAMWUBX».

// Недавно Джонни услышал новый дабстеп-трек Поликарпа, но так как он не увлекается современной музыкой, он решил выяснить, 
// что было первой песней, которую Поликарп сделал ремикс. Помогите Джонни восстановить оригинальную песню.

// вход
// Ввод состоит из одной непустой строки, состоящей только из заглавных букв английского алфавита, длина строки не превышает 200 символов

// Вывод
// Верните слова исходной песни, которую Поликарп использовал, чтобы сделать ремикс на дабстеб. Разделите слова пробелом.

// Примеры
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
//   // =>  WE ARE THE CHAMPIONS MY FRIEND

function songDecoder(song){
    let cut = 'WUB';
    let res = [];
    song = song.split(cut);

    for(let i = 0; i < song.length; i++) {
        if(song[i] && song[i + 1] !== ' ') {
            res.push(song[i])
        }
    }

    console.log(res.join(' ').trim());
    // console.log(res.join(' ').trim());
}

// // // ##################################################################################################### 
// songDecoder("AWUBBWUBC"); // "A B C","WUB should be replaced by 1 space"
// songDecoder("AWUBWUBWUBBWUBWUBWUBC"); // "A B C","multiples WUB should be replaced by only 1 space"
// songDecoder("WUBAWUBBWUBCWUB"); // "A B C","heading or trailing spaces should be removed"
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB");

// // // ##################################################################################################### 
// // // ##################################################################################################### 
// // // #####################################################################################################

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. 
// Bob observed that one number usually differs from the others in evenness. 
// Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, 
// and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// ##Examples :
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd


// Боб готовится пройти тест IQ. Наиболее частая задача в этом тесте - выяснить, какое из приведенных номеров отличается от других. 
// Боб заметил, что одно число обычно отличается от других по четности. 
// Помогите Бобу - чтобы проверить его ответы, ему нужна программа, которая среди заданных чисел находит одну, 
// отличающуюся по четности, и возвращает позицию этого числа.

// ! Имейте в виду, что ваша задача - помочь Бобу выполнить настоящий тест IQ, что означает, что индексы элементов начинаются с 1 (не с 0)

// ##Примеры :
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers){
    numbers = numbers.split(' ');
    let checkIndex;
    let res;
    let countEvenNumber = 0;
    let countNotEvenNumber = 0;

    let checkNumbers = numbers.map((element) => element % 2 === 0 ? countEvenNumber++ : countNotEvenNumber++);

    if(countEvenNumber > countNotEvenNumber) {
        checkIndex = numbers.map((element, index) => {
            if(element % 2 !== 0) res = index + 1
        })
    } else {
        checkIndex = numbers.map((element, index) => {
            if(element % 2 === 0) res = index + 1
        })
    }

    console.log('result', res);

}

// // // ##################################################################################################### 
// iqTest("2 4 7 8 10"); // 3
// iqTest("1 2 2"); // 1

// // // ##################################################################################################### 
// // // ##################################################################################################### 
// // // #####################################################################################################

// Task:
// Your task is to write a function which returns the sum of the following series upto nth term (parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + ...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:
// SeriesSum (1) => 1 = "1.00"
// SeriesSum (2) => 1 + 1/4 = "1.25"
// SeriesSum (5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

// Задача:
// Ваша задача - написать функцию, которая возвращает сумму следующих рядов с точностью до n-го члена (параметр).

// Серия: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + ...
// Правила:
// Вам нужно округлить ответ до 2 десятичных знаков и вернуть его в виде строки.

// Если заданное значение равно 0, оно должно вернуть 0,00

// Вам будут даны только натуральные числа в качестве аргументов.

// Примеры:
// SeriesSum (1) => 1 = "1,00"
// SeriesSum (2) => 1 + 1/4 = "1,25"
// SeriesSum (5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = 1,57

function SeriesSum(n){

    let res = 1;
    let count = 1

    if(n === 0) return '0.00';

    for(let i = n; i > 1; i--){
        count += 3;
        res += 1 / count;
    };
    
    console.log(res.toFixed(2))
}

// // // ##################################################################################################### 
// SeriesSum(1);  // "1.00"
// SeriesSum(2);  // "1.25"
// SeriesSum(3);  // "1.39"
// SeriesSum(4);  // "1.49"

// // // ##################################################################################################### 
// // // ##################################################################################################### 
// // // #####################################################################################################

// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// JavaScript: returns an Array;

// Tower block is represented as *
// [
//     '  *  ', 
//     ' *** ', 
//     '*****'
//   ]

// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]

// Построить башню
// Постройте Башню по следующему приведенному аргументу:
// количество этажей (целое и всегда больше 0).

// Башенный блок представлен как *

// JavaScript: возвращает массив;
// Например, 3-х этажная башня выглядит так, как показано ниже

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]

// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]

function towerBuilder(nFloors) {
    let res = [];
    let stars = 1;
    let stepNBSP = 0;
    let starStep = 0;

    if(nFloors === 1) {
        return res = ['*'];
    } else {

        if (nFloors % 2 === 0) {
            starStep = nFloors + 1
            stepNBSP = (starStep + nFloors - 2) / 2
        } else {
            starStep = nFloors + 2
            stepNBSP = (starStep + nFloors - 3) / 2
        };

        for(let i = 0; i < nFloors; i++) {
            let bank = '';

            stepNBSP--

            for(let k = 0; k <= stepNBSP; k++) bank += ' ';
            for(let k = 0; k < stars; k++) bank += '*';
            for(let k = 0; k <= stepNBSP; k++) bank += ' ';

            stars +=2

            res[i] = bank;
        }
        return res;
    }
}

// // // ##################################################################################################### 
// console.log(towerBuilder(1)); // ["*"]
// console.log(towerBuilder(2)); // [" * ","***"]
// console.log(towerBuilder(3)); // ["  *  "," *** ","*****"]
// console.log(towerBuilder(4));
// console.log(towerBuilder(5));
// console.log(towerBuilder(6));

// // // ##################################################################################################### 
// // // ##################################################################################################### 
// // // #####################################################################################################

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 
// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Проверьте, имеет ли строка одинаковое количество символов «х» и «о». 
// Метод должен возвращать логическое значение и быть нечувствительным к регистру. Строка может содержать любой символ.

// Примеры ввода / вывода:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    str = str.toLowerCase().split('');
    let x = 0;
    let o = 0;
    let checkSumbol = str.map((elem) => {
        if(elem === 'x') x++;
        if(elem === 'o') o++;
    })
    return x === o;
}

// // // ##################################################################################################### 
// console.log(XO('xo')); // true
// console.log(XO("xxOo")); // true
// console.log(XO("xxxm")); // false
// console.log(XO("Oo")); // false
// console.log(XO("ooom")); // false

// // // ##################################################################################################### 
// // // ##################################################################################################### 
// // // #####################################################################################################

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function 
// to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, 
// and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// N.B. You should assume that all the test input will be valid, as specified above.

// P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, 
// with relation to running multiple processes at the same time: 
// https://en.wikipedia.org/wiki/Thread_pool

// В супермаркете есть очередь на кассы самообслуживания. Ваша задача - написать функцию для расчета общего времени, 
// необходимого для проверки всех клиентов!

// вход
// клиенты: массив положительных чисел, представляющих очередь. 
// Каждое целое число представляет клиента, а его значение - количество времени, которое требуется для проверки.
// n: положительное целое число, количество проверок.
// вывод
// Функция должна возвращать целое число, общее требуемое время.

// Важно
// Пожалуйста, посмотрите на примеры и пояснения ниже, чтобы убедиться, что вы правильно поняли задачу :)

// Примеры
// queueTime ([5,3,4], 1)
// // должен вернуть 12
// // потому что, когда есть 1 до, общее время является просто суммой времен

// queueTime ([10,2,3,3], 2)
// // должен вернуть 10
// // потому что здесь n = 2 и 2-й, 3-й и 4-й человек в
// // очередь заканчивается до того, как 1-й человек закончил.

// queueTime ([2,3,10], 2)
// // должен вернуть 12
// Разъяснения
// Существует только ОДНА очередь, обслуживающая много платежей, и
// Порядок очереди НИКОГДА не меняется, и
// Фронтмен в очереди (то есть первый элемент в массиве / списке) переходит к касанию, как только он становится свободным.
// Нотабене Вы должны предположить, что все тестовые данные будут действительны, как указано выше.

// Постскриптум Ситуация в этом ката может быть уподоблена идее пула потоков, связанной с более информатикой, 
// касающейся одновременного запуска нескольких процессов: 
// https://en.wikipedia.org/wiki/Thread_pool

function queueTime(customers, n) {
    let res = 0;

    // if(n === 1) {
    //     let customerSumm = customers.map( elem => res += elem)
    // } else if (customers.length > 1) {
    //     if(Math.max(...customers) || customers[0]) {
    //         return res = customers[0]
    //     } else if (Math.max(...customers) || customers[customers.length - 1]) {
    //         return res = customers[customers.length - 1]
    //     } else{
    //         let customerSumm = customers.map( elem => res += elem)
    //         return res = res / n;
    //     };
    // }


    // БРЕД КАКОЙ ТО!!!!!!

    

    // console.log(Math.max(...customers));
    // console.log(Math.min(...customers));
    // console.log(customers.length);
    
    return res;
}

console.log(queueTime([], 1));  // 0
console.log(queueTime([1,2,3,4], 1));   // 10
console.log(queueTime([2,2,3,3,4,4], 2));   // 9
console.log(queueTime([1,2,3,4,5], 100));   // 5

// console.log((2+2+3+3+4+4) /2 )
// console.log((201+201+201+201+201+201+201+201+201+201+201+201+201+201+201+201+201+201+201+201+201+201+201+201+201+201) / 7);