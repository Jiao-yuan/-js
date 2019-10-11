class Node {  //链表中的每一个元素
    constructor(element){
        this.element = element;
        this.next = null;  //指针 
    }
}


class LinkedList {  //链表
    constructor(){
        this.head = new Node('header'); //头节点
    }
    insert(target,element){
        target = this.find(target);  //header
        element = new Node(element);
        element.next = target.next;
        target.next = element;
        //1.找到target
        //2.修改target的指针 指向element
        //3.修改element的指针 指向target.next
    }
    find(target){
        let targetNode = this.head;
        while(targetNode.element !== target){
            targetNode = targetNode.next;
        }
        return targetNode;
    }
    display(){  //显示链表
        let targetNode = this.head;
        while(targetNode.next !== null){
            console.log(targetNode.next.element);
            targetNode = targetNode.next;
        }
    }
    remove(target){
        let targetNode = this.find(target);  //null 
        //target 上一个节点 改变上一个节点指针
        let prevNode = this.head;
        while(prevNode.next.element !== target && prevNode !== null){
            prevNode = prevNode.next;
        }
        //指向当前节点的下一个节点
        prevNode.next = targetNode.next;
    }
}

let linkdata = new LinkedList();

linkdata.insert('header','milk');
linkdata.insert('milk','break');
linkdata.insert('break','egg');
linkdata.display();
//链表
console.log('---------------');
linkdata.remove('milk');  //element
linkdata.display();





