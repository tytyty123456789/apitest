/*const callback =() =>{

    console.log('2초후에 실행됩니다');
}
setTimeout(callback,2000); */
//위 아래 둘 다 같은 코드
/*setTimeout(( )=>{console.log('2초후에 실행됩니다')},2000);
console.log('hhh');
*/


/*setTimeout(()=>{console.log(3);

},5000)
const callback =() => {

    console.log('2초마다 실행됩니다');
    setTimeout(callback, 2000);
}
setTimeout(callback,2000); */




const intervelId = setInterval(()=>{
    console.log('2초마다 실행됩니다');

},2000)

setTimeout(()=>{

    clearInterval(intervalId)
},10000)