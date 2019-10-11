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
      //  console.log("--123--",this.head)
        let targetNode = this.head;
        while(targetNode.next !== null){
            console.log(targetNode,"11111")
            targetNode = targetNode.next;
            console.log(targetNode,"00000")
            if(targetNode.element === target){
                return targetNode;
            }
        }
        return targetNode;
    }
    display(){  //显示链表
        let targetNode = this.head;
        while(targetNode.next !== null){
          //  console.log(targetNode.next.element);
            targetNode = targetNode.next;
        }
    }
}

let linkdata = new LinkedList();

linkdata.insert('header','milk');
linkdata.insert('milk','break');


linkdata.display();
//链表



