class List{
    constructor(brr=[])
    {
        this.brr=brr
        this.arr=[]
    }
    upindex()
    {
        for(var i=0;i<this.brr.length;i++)
        {
            this.arr[i+1]=this.brr[i]
        }
        console.log(this.arr)
    }
    Lefts(i)
    {
        return i*2
    }
    Rights(i)
    {
        return i*2+1
    }
    Tops(i)
    {
        return Math.floor(i/2)
    }
}

var brr=[3,78,5,67,34,56,78]
let list=new List(brr)


list.upindex()
console.log(list.Tops(5))