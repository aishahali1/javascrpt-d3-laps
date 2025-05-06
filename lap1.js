let book = {title: "Art Book", author: "Jane doe", year: 2015, isAvailable: true,
     borrow : function borrowbook(){console.log("the book is not available");
        return book.isAvailable = false;}, 
     publisher: { name: "John doe", location: {city: "Paris", country: "france"}}} 

   //Q1
    console.log(book);
    //Q2
   console.log(book.title);
   //Q3
   let editYear=book.year = 2025; 
   console.log(book);
   //Q4
   delete book.author;
   console.log(book);
   //Q5
   let changeAvailable = book.borrow();
   console.log(book);
   //Q6
   console.log(book.publisher);
   //Q7
   console.log(book.publisher.location.city);
   
   