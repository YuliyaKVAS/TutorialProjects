const str = 'cjbcfvfckdmvnbfnfmvsmvf';
let c = 0;
let f = 0;
let v = 0;
str.split('').forEach(summ => {
    switch(summ){
        case 'c':
            c++;
            break;
        case 'f':
            f++;
            break;
        case 'v':
            v++;
            break;
    }
});

console.log(c,f,v)

/////////////

const arr = [[1,2,3], [4,5,6], [7,8,9]];
arr.forEach((item)=>{
    console.log(item.join(" "));

})

console.log(arr)

//1-dim arr

console.log([].concat(...arr))