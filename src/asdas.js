const hof = (a) => (b) =>(c) =>{


    return a+(b*c);

}


const frist = hof(3);
const second = frist(4);
const third = second(5);
console.log(third);