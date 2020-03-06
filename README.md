# linq-extensions-for-javascript
### "linq equivalent in javascript"
some extension methods for javascript'## "linq equivalent in javascript"### "linq equivalent in javascript" array object to implement .net's linq style queries

### example query: 

var people = [{name:"wolfgang", lastname:"Fischer",age:50},{name:"ali",lastname:"Çelik",age:20},{name:"john",lastname:"Bradford",age:35}...];

var underFifty = people.where(person=>person.age < 50).select(person=>{fullname:person.name + " " + person.lastname}); 
