//listSzie

class List{
    constructor(dataStore = []){
        this.dataStore = dataStore;
        this.listSize = this.dataStore.length;
        this.pos = 0;
    }
    length(){
        return this.listSize;
    }
    append(element){
        this.dataStore[this.listSize++] = element;
    }
    toString(){
        return this.dataStore;
    }
    clear(){
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = 0;
    }
    insert(element,after){
        if(this.find(after) > -1){
            //元素后添加
            this.dataStore.splice(this.find(after)+1,0,element) //splice 
            this.listSize++;
            return true;
        }
        return false;
    }
    find(element){
        for(let i=0;i<this.length();i++){
            if(this.dataStore[i] === element){
                return i;
            }
        }
        return -1;
    }
    remove(element){
        if(this.find(element) > -1){
            this.dataStore.splice(this.find(element),1);
            this.listSize--;
            return true;
        }
        return false;
    }
    prev(){
        if(this.pos > 0){
            --this.pos;
        }
    }
    next(){
        // if(this.pos < this.listSize-1){
            ++this.pos;
        // }
    }
    currPos(){
        return this.pos;
    }
    moveTo(pos){
        this.pos = pos;
    }
    front(){
        this.pos = 0;
    }
    end(){
        this.pos = this.listSize - 1;
    }
    getElement(){
        return this.dataStore[this.pos];
    }
}


module.exports = List;
