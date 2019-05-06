# linq-extensions-for-javascript
some extension methods for javascript's array object to implement .net's linq style queries

### example query: 

var people = [{name:"wolfgang", lastnane:"Fischer",age:50},{name:"ali",lastname:"Çelik",age:20},{name:"john",lastane:"Bradford",age:35}...];

var underFifty = people.where(person=>person.age < 50).select(person=>{fullname:person.name + " " + person.lastname}); 
