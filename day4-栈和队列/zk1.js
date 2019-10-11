const List = require('../day2-存储结构/list')

//增加一个向列表中插入元素的方法，该方法只在待插元素大于列表中的所有元素时才执 行插入操作。这里的大于有多重含义，对于数字，它是指数值上的大小；对于字母，它 是指在字母表中出现的先后顺序

class AppendList extends List{
    appendItem(item){
        if(this.length() <= 0){
            this.append(item);
        }
        if(typeof item === 'number'){  //数字
            let numList = new List();  
            for(this.front();this.currPos()<this.length();this.next()){
                if(typeof this.getElement() === 'number'){ //出现数字
                    numList.append(this.getElement());
                }
            }
            numList.end();
            if(item > numList.getElement()){
                this.append(item);
            }
        }else if(/^[A-Z]$/i.test(item)){
            let numList = new List();
            for(this.front();this.currPos()<this.length();this.next()){
                if(/^[A-Z]$/i.test(this.getElement())){ //出现数字
                    numList.append(this.getElement().toUpperCase().charCodeAt(0));
                }
            }
            numList.end();
            // console.log(numList.toString());
            if(item.toUpperCase().charCodeAt() > numList.getElement()){
                this.append(item);
            }
        }else{
            console.log('您要添加的不在我们判断范围')
        }
    }
}


let oList = new AppendList();
oList.append('A');
oList.append('b');
oList.append(10);
oList.append(20);



oList.appendItem(20.1);

oList.appendItem('c');
oList.appendItem('G');



console.log(oList.toString());  //[a,b]



class Person{
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }
}

class ShowPerson extends List{
    init(){
        for(let i=0;i<10;i++){
            this.append(new Person('name'+i,Math.floor(Math.random()*2)))
        }
        return this;
    }
    show(item){
        for(this.front();this.currPos()<this.length();this.next()){
            if(this.getElement().sex===item){ //出现数字
                console.log(this.getElement());
            }
        }
    }
}

let personList = new ShowPerson().init();

// console.log(personList.toString());
personList.show(0);
