//栈结构 js

class Stack{
    constructor(){
        this.dataStore = [];
        this.index = 0;
    }
    push(item){
        this.dataStore[this.index++] = item;
    }
    pop(){
        return this.dataStore[--this.index];
    }
    peek(){
        return this.dataStore[this.index-1];
    }
    clear(){
        this.index = 0;
    }
    length(){
        return this.index;
    }
}


//判断一个单词是不是回文  repper




// let oStack = new Stack();

// oStack.push('小明');
// oStack.push('小红');

// console.log(oStack.pop());
// console.log('栈顶===',oStack.peek());
// console.log(oStack.length());


// oStack.push('小蓝');
// console.log('栈顶===',oStack.peek());

// console.log(oStack.length());


// oStack.clear();
// console.log('栈顶===',oStack.peek());
// console.log(oStack.length());


function isPalindrome(str){
    let strStack = new Stack();
    for(let i=0;i<str.length;i++){
        strStack.push(str[i])
    }
    let reverseStr = '';
    while(strStack.length() > 0){
        reverseStr += strStack.pop();
    }
    return reverseStr === str;
}


//abc()12121212
// console.log(isPalindrome('repper'));
// console.log(isPalindrome('apple'));


//1.栈可以用来判断一个算术表达式中的括号是否匹配。编写一个函数，该函数接受一个算术表达式作为参数，返回括号缺失的位置。下面是一个括号不匹配的算术表达式的例 子：(2.3+23 / 12 + (3.14159×0.24 。




function methodEnd(str){
    let strArr = str.split(/\s+/);
    let index = -1;
    for(let i=0;i<strArr.length;i++){  // 空格分隔的表达式
        let strStack = null;
        for(let n=0;n<strArr[i].length;n++){  //表达式中的每一个字符
            index++;
            if(n===0 && strArr[i][n]==='('){  //第一个字符是不是左括号
                strStack = new Stack(); //创建一个栈结构
            }
            strStack && strStack.push({  //把每一个字符入栈
                str:strArr[i][n],
                index:index+i+1
            })
        }
        if((strStack !== null) && (strStack.peek().str !== ')')){  //判断该栈结构栈顶是不是右括号
            console.log(strStack.peek().index);
        }
    }
    
    // console.log(strStack.length());
}
methodEnd('(2.3+23 / 12 + (3.14159×0.24')
