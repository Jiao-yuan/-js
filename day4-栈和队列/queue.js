class Queue {
    constructor(){
        this.datastore = [];
    }
    dequeue(item){
        this.datastore.push(item);
    }
    enqueue(){
        //找优先级最小的
        let n = 0;  // 1
        for(let i=1;i<this.count();i++){   // 10 3
            if(this.datastore[n].code > this.datastore[i].code){
                n = i;
            }
        }
        // console.log(n);
        return this.datastore.splice(n,1);
    }
    count(){
        return this.datastore.length;
    }
    empty(){ //检测队列是否为空的
        return this.count() > 0
    }
    toString(){
        return JSON.stringify(this.datastore);
    }
}





module.exports = Queue;