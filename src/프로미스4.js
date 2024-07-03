const setTimeoutPromise = (ms, data) => new Promise((resolve, reject) => {

    setTimeout(resolve,ms);
});

const promise = setTimeoutPromise(0);

promise
.then(() => {
    console.log('0초후 실햄됩니다');
})
.catch((err) => {

    console.log(err);
    console.log('에러 발생시 실행됩니다');
})
.finally((err)=>{

    if(err){

        console.log(err);
    }
    console.log('성공하든 실패하든 무조건 실행됨')
});
