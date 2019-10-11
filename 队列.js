class list{
    constructor(){
        this.brr=[]
    }
    pushs(item){
        this.brr.push(item)
        return this.brr
    }
    shifts()
    {
      return this.brr.shift()
    }
}

let lists=new list()

 
 console.log("------",lists.pushs("3"))