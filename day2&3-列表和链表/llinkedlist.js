class Node{
    constructor(element){
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class LlinkedList{
    constructor(){
        this.head = new Node('header');
    }
    insert(target,newnode){
        let targetNode = this.find(target);
        let newNode = new Node(newnode);
        targetNode.next = newNode;
        newNode.prev = targetNode;
    }
    remove(target){
        //删香蕉找香蕉上一个元素 和香蕉下一个元素
        let targetNode = this.find(target);
        let prevNode = targetNode.prev;
        let nextNode = targetNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }
    find(element){
        let targetNode = this.head;
        while(targetNode.element !== element){
            targetNode = targetNode.next;
        }
        return targetNode;
    }
    dispaly(){
        let targetNode = this.head;
        while(targetNode.next !== null){
            targetNode = targetNode.next;
            console.log(targetNode);
        }
    }
    findLast(){ //找最后一个节点
        let targetNode = this.head;
        while(targetNode.next !== null){
            targetNode = targetNode.next;
        }
        return targetNode;
    }
    dispalyReverse(){
        //首先找到最后一个节点
        let lastNode = this.findLast();
        while(lastNode.prev !== null){
            console.log(lastNode.element);
            lastNode = lastNode.prev;
        }
    }
}


let Linked = new LlinkedList();

Linked.insert('header','milk');
Linked.insert('milk','egg');
Linked.insert('egg','banner');
Linked.insert('banner','apple');

Linked.remove('banner');
Linked.dispaly();
console.log('--------------------');



Linked.dispalyReverse();



Linked.back('egg',1);

Linked.forwork('egg',1);


Linked.dispaly();   //milk apple egg 
