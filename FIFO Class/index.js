class Fifo{
    constructor(){
        this.arr= [];
        this.length = 0;
    };

    get(){
        if(this.length===0){
            return
        }
        this.arr.shift();
        this.length--;
        return this.length;
    }

    set(value){
        this.arr.push(value);
        this.length++
        return this.arr;
    }
}

var a = new Fifo();
console.log(a.set(6));
console.log(a.set(9));
console.log(a.set(3));
console.log(a.get())