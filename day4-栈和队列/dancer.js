const fs = require('fs');
const Queue = require('./queue');
function getDancerName(boyQueue,girlQueue){
    let text = fs.readFileSync('./1703A跳舞名单.txt','utf8').trim();
    let nameArr = text.split(/\r\n/);
    for(let val of nameArr){
        let [sex,name] = val.split(' ');
        if(sex==='男'){
            boyQueue.dequeue(name);
        }else{
            girlQueue.dequeue(name);
        }
    }
}

let boyQueue = new Queue();//男生这一队
let girlQueue = new Queue();//女生一队
getDancerName(boyQueue,girlQueue);


while(boyQueue.empty() && girlQueue.empty()){
    console.log(`男生是:${boyQueue.enqueue()}\n女生是:${girlQueue.enqueue()}\n\n`);
}

if(boyQueue.count()){
    console.log('男生对剩下'+boyQueue.count()+'人,名单是：'+boyQueue.toString());
}

if(girlQueue.count()){
    console.log('男生对剩下'+girlQueue.count()+'人');
}
