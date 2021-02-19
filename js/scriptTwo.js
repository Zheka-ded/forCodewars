// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: 
//     plus, minus, times, dividedBy (divided_by in Ruby and Python);
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));


// На этот раз мы хотим написать вычисления с использованием функций и получить результаты. Давайте посмотрим на некоторые примеры:

// семь (раз (пять ())); // должен вернуть 35
// четыре (плюс (девять ())); // должен вернуть 13
// восемь (минус (три ())); // должен вернуть 5
// шесть (dividedBy (два ())); // должен вернуть 3
// Требования:

// Должна быть функция для каждого числа от 0 («ноль») до 9 («девять»)
// Должна быть функция для каждой из следующих математических операций: плюс, минус, время, splitBy (split_by в Ruby и Python)
// Каждый расчет состоит из ровно одной операции и двух чисел
// Самая внешняя функция представляет левый операнд, самая внутренняя функция представляет правый операнд
// Разделение должно быть целочисленным делением. Например, это должно вернуть 2, а не 2.666666 ...:
// восемь (dividedBy (три ()));


// // // ##################################################################################################### 

(()=>{

    function zero(a) {
        return 0;
    }
    function one(a) {
        return 1;
    }
    function two(a) {
        return 2;
    }
    function three(a) {
        return 3;
    }
    function four(a) {
        return 4;
    }
    function five(a) {
        // console.log(a)
        if(a !== undefined) {
            for(let i = 0; i < 5; i++) {
                // console.log(i)
                a++;
                // return a;
            }
        } else{
            return 5;
        }
    }
    function six(a) {
        return 6;
    }
    function seven(a) {
        return 7;
    }
    function eight(a) {
        return 8;
    }
    function nine(a) {
        console.log(a)
        if(a !== undefined) {
            for(let i = 0; i < 9; i++) {

                return a;
            }
        } else{
            return 9;
        }
    }

    function plus(a) {

        console.log(a)

        let count = 0;

        // console.log(count)
        
        for(let i = 0; i < a; i++) {
            count += a;
        }
        return a;
        // return count;
    }
    function minus(a) {}
    function times(a) {}
    function dividedBy(a) {}

    // Test.assert_equal(basef[ a ] (times(basef b )), a*b)



    // console.log(nine(console.log(plus(console.log(five())))))

    // console.log(plus(five()))
    
    // console.log(nine(plus(five())));

    // console.log(seven(times(five()))); // 35
    // console.log(four(plus(nine()))); // 13
    // console.log(eight(minus(three()))); // 5
    // console.log(six(dividedBy(two()))); // 3
        
})();

// // // ##################################################################################################### 
// // // ##################################################################################################### 
// // // ##################################################################################################### 