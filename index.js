function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(str = '*') {
    return function(words = 'special') {
        return `You are ${str}${words}${str}!`
    }
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    }
}


function actionApplyer(integer, array) {
    let base = integer;
    for (let i = 0; i < array.length; i++) {
        base = array[i](base);
    }
    return base;
}