//Activity 1:
let book={
    'title':'Computer',
    'author':'Soham',
    'year': 2004,
};
console.log(book);

let acess=book.author;
console.log(acess);


//Activity 2:
const books={
    book1:"Harry Potter",
    author:"Soham Das",
    result:function(){
        console.log(`${this.book1} ${this.author}`);
    }
};
books.result();


//Activity 3:
const library={
    name:"Central Library",
    books:[
        {
            name:"Harry Potter",
            title:"Fairy tails",
            year:2004,
        },
        {
            name:"Cars",
            title:"Scary tails",
            year:2001,
        },
    ],
};
console.log(library);
console.log(library.name);
console.log(library.books[0].title);
console.log(library.books[1].title);


//Activity 4:
const novel={
    title: "Ikigai: The Japanese Secret to a Long and Happy Life",
    author: "Héctor García",
    year:2016,
    getnovel(){
        return `${this.title} and ${this.author}`
    }
}
console.log(novel.getnovel());


//Activity 5:
for (let key in novel){
    if(novel.hasOwnProperty(key)){
      console.log(`${key}: ${novel[key]}`);
    }
  }
  