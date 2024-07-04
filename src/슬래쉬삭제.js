




const data = [
    { url: "http://blabla.net/img/skesgukh/" },
    { url: "https://blabla.net/img/seafwfe" },
    { url: "http://blabla.net/img/skesgukh/" }
  
];
  
  const data2 = data.map((item) => {
    // 각 객체의 url 속성에서 마지막 슬래시 제거
    if (item.url.endsWith('/')) {

      item = item.url.slice(0, -1); // 마지막 '/' 제거
    }
    return item;
  });
  
  console.log(data2);



  // let str = data[0].url;
  // if (str.charAt(str.length -1) ==='/'){
  //   str = str.slice(0,-1);
  // }
  // console.log(str); 

  const deta11 = data.map((v,i) => {
      if(v.url !== null && v.url.charAt(v.url.lebgth - 1)==='/'){
    if (v.url.charAt(v.url.length -1) ==='/'){
      return {url: v.url.slice(0,-1)};
        }
    }else{
      return {url: v.url};
    }
  })
  const data