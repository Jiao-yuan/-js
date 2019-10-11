let arr=[
    {
        name:"小明",
        ec:"a"
    },
    {
        name:"小红",
        ec:"e"
    },
    {
        name:"小张",
        ec:"c"
    },{
        name:"小军",
        ec:"b"
    }
    ,{
        name:"小李",
        ec:"b"
    }
    ,{
        name:"小焦",
        ec:"c"
    }
]


var brr=arr.sort((a,b)=>{return a.ec.charCodeAt()-b.ec.charCodeAt()})

console.log(brr)
console.log("123")