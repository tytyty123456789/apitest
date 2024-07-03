const array = [{ j: 'k' }, { l: 'm' }];
// 얕은 복사
const shallow = [...array];      

array[1].l = 'z';   //----얘를 추가하면 변수 두개가 같이 변함
console.log(array[1]);   // { l: 'm' }
console.log(shallow[1]); // { l: 'm' }



//깊은복사

const array2 = [{ j: 'k' }, { l: 'm' }];

const deep = JSON.parse(JSON.stringify(array2));
array2[1].l = 'z'      
console.log(array2[1]);
console.log(deep[1]);



