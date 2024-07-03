const name = 'YOO';
const year = 1994;
const month = 8;
const date = 12;
const gender = 'M';

const zerocho = {
    name: name,
    year: year,
    month: month,
    date: date,
    gender: gender,

    obj: {
        score: 90
    },

    log: function(value) {
        console.log(value);
    }
};

const info = { name, year, month, date, gender };

console.log(zerocho.name); // 'YOO'
console.log(info.name);    // 'YOO'
console.log(zerocho.obj.score); // 90
zerocho.log('hihi'); // logs 'hihi'

//zerocho ['name'] 써먹기

function getValue(paramName){

    return console.log(zerocho[objKey]);

}
gerValue('name');

const person = zerocho;
const {obj} person;
console.log(obj.score);
console.log(obj.score);
console.log(arr[3]);