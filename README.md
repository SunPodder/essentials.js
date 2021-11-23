# essentials.js
Some usefull Javascript functions.

## Date object
```
new Date().day()
// returns today's name
// e.g. Sunday 
```
```
new Date().year()
// returns current year
// e.g. 2021
```
```
new Date().month()
// e.g. January
```
```
new Date().hour(12)
// returns a object
// if 12 is passed as a parameter returns hour in 12 hours format 
//and aslo the session (am, pm)
//default is 24 hours format 
```

## Strings
```
"abcd".remove("a")
// returns "bcd"
```

## Number

```
let num = 30
num.factor()
// returns a array of the factors of the number
// e.g. [1, 2, 3, 5, 6, 30]
```

```
let num = 30
num.isPrime()
// if number is prime, returns true, otherwise false
```

## Array

```
let array = [1, 2, 3, 4, 5]
array.randomize()
//returns a randomized array
```
```
let array = new Array().fill(6)
// returns array [1, 2, 3, 4, 5, 6]
```
You can also set a starting point like
```
let array = new Array().fill(101,106)
// returns array [101, 102, 103, 104, 105, 106]
```
```
let array = [1, 2, 3, 4, 5]
array.sum()
// returns sum of the array
// e.g.15
```

## Document
```
document.get("selector")
// similar to document.querySelector().
```

```
document.add("tag")
// creates and adds a new element to the document body
```

```
element.add("tag")
// creates and adds a new element to the parent element
```
