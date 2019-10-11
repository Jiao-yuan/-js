let List = require('./list');
let data = require('./Movie.json').movieList;  //10

let moviedata = data.map(item=>item.nm);
// console.log(moviedata);

//整个影片列表
let MovieList = new List(moviedata);

//客人租赁列表
let ConsumerList = new List();

class Consumer{
    constructor(name,movieTarget){
        this.name = name;
        this.movieTarget = movieTarget;
    }
}

let c = new Consumer('小陈','我和我的祖国');

function isMovie(consumer,MovieList){
    if(MovieList.find(consumer.movieTarget) > -1){ //影片存在
        ConsumerList.append(consumer);
        MovieList.remove(consumer.movieTarget);
    }
}


isMovie(c,MovieList)

function displayMovieList(list){  //影片的展示方法
    for(list.front();list.currPos()<list.length();list.next()){
        if(list.getElement() instanceof Consumer){
            console.log(`${list.getElement().name}租走了${list.getElement().movieTarget}`)
        }else{
            console.log(list.getElement());
        }
    }
}
displayMovieList(MovieList); //
displayMovieList(ConsumerList); //
