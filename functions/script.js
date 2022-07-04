// // Место для первой задачи
// function sayHello(name) {
//     return "Привет, " + name + "!";
// }

// console.log(sayHello("Андрей"));

// // Место для второй задачи
// function returnNeighboringNumbers(number) {
//     let a = number - 1,
//         b = number + 1;
//     const arr = [a, number, b];
//     return arr;
// }

// console.log(returnNeighboringNumbers(7));

// // Место для третьей задачи
// function getMathResult(base, progress) {
//     let  result = '';
//     if (typeof(progress) !== 'number' || progress <= 0) {
//         return base;
//     } else {    
//         for (let i =1; i <= progress; i++ ) {
//             if (i === progress) {
//                 result += base*i;
//                 return result;
//             } else {
//             result += base*i + '---';
//             }
//         }
//     }    
//     }

// console.log(getMathResult(5, 3)); 

function calculateVolumeAndArea(side) {
    if ( !Number.isInteger(side) || typeof(side) !== 'number' || side < 0) {
        return 'При вычислении произошла ошибка';
    } else {
        return 'Объем куба: ' + side*side*side +', площадь всей поверхности: ' + side*side*6;
    } 
}

function getCoupeNumber(seat) {
    if (typeof(seat) !== 'number' || seat < 0 || !Number.isInteger(seat)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if ( seat ===0 || seat > 36) {
        return "Таких мест в вагоне не существует";
    } else {
        return Math.ceil(seat/4);
    }
}

console.log(getCoupeNumber('37'));

function getTimeFromMinutes(time) {
    if ( !Number.isInteger(time) || typeof(time) !== 'number' || time < 0) {
        return 'Ошибка, проверьте данные';
    } else {
        let hours = Math.floor(time/60);
        let minutes = time - hours*60;
        let endingOfHour = '';
        if (hours === 0) {
            endingOfHour += ' часов';
        } else if (hours === 1) {
            endingOfHour += ' час';
        } else if (hours >= 2 && hours <= 4) {
            endingOfHour += ' часа';
        } else {
            endingOfHour += ' часов';
        }
        return 'Это ' + hours + endingOfHour + ' и ' + minutes + ' минут';
    } 
}

console.log(getTimeFromMinutes(5252));

function findMaxNumber(num1, num2, num3, num4) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number' || typeof(num3) !== 'number' || typeof(num4) !== 'number' ) {
        return 0;
    } else if (num1 > num2 && num1 > num3 && num1 > num4) {
        return num1;
    } else if (num2 > num3 && num2 > num4) {
        return num2;
    } else if (num3 > num4) {
        return num3;
    } else {
        return num4;
    }
}

console.log(findMaxNumber("0", 6.1, 6.666, 6));


function fib(amount) {
    if (typeof(amount) !== 'number' || amount <= 0 || !Number.isInteger(amount)) {
        return '';
    } else if (amount === 1) {
        return '0';
    } else if (amount === 2) {
        return '0 1';
    } else {
        let a = 0;
        let b = 1;
        let result = '0 1';
        for (let i = 3; i <= amount; i++) {
            let c = a + b;
            result += ' ' + c;
            a = b ;
            b = c;
        }
        return result;
    }
}

console.log(fib(5.1));