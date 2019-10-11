const fs = require('fs');
class Base {
    isEmpty(data,flag){
        if(Array.isArray(data)){
            return data.length ? true : false;
        }else{
            return this.isEmpty(Object.keys(data),'object');
        }
        // console.log(data.__proto__.constructor === Array);
        // console.log(Object.prototype.toString.call(data))  //[object array]  [object object]
    }
}


// const oBase = new Base();

 


class Util extends Base{
    async init(data){
        if(!this.isEmpty(data)){
            return Promise.reject(new Error('暂无要处理的文件'))
        }
        let res = [];
        for(let o of data){
            let data = await this[o.method](o.path);
            res.push(data);
        }
        return res;
    };
    loadJs(path){
        return this.readfile(path,'utf8');
    };
    loadCss(path){
        return this.readfile(path,'utf8');
    };
    loadImg(path){
        return this.readfile(path,null);
    }
    readfile(path,type){
        return new Promise((resolve,reject)=>{
            fs.readFile(path,type,(error,data)=>{
                if(error){
                    return reject(error);
                }
                resolve(data);
            })
        })
    }
}

const utils = new Util();

// console.log(utils.isEmpty([])); 
// console.log(utils.isEmpty({}));
// console.log(utils.isEmpty(['a',{name:'zs'}]) )
// console.log(utils.isEmpty({name:'zs'}))  //1
let filearr = [
    {
        path:'./src/index.js',
        method:'loadJs'
    },
    {
        path:'./src/css/style.css',
        method:'loadCss'
    },
    {
        path:'./src/img/image.png',
        method:'loadImg'
    }
];
utils.init(filearr).then(res=>{
    console.log(res);
}).catch(res=>{
    console.log(res);
})