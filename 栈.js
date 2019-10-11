class App{
    constructor()
    {
        this.arr=[]
        this.index=0
    }
    push(item)
    {
        this.arr[this.index++]=item
        return this.arr
    }
    pop()
    {
        return this.arr[--this.index]
    }
    display()
    {
        return this.index
    }
}

 let apps= new App

 apps.push("小木")
 console.log(apps.push("小红"))
 console.log(apps.pop())
 console.log(apps.display())