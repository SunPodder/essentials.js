Date.prototype.month = () => {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return months[new Date().getMonth()];
}

Date.prototype.day = () => {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return days[new Date().getDay()];
}

Date.prototype.year = () => {
  return new Date().getYear() + 1900
}

Date.prototype.hour = function(f){
  let h = new Date().getHours(), s = "am"
  if(f == 12){
    if(h >= 12){
      h -= 12
      s = "pm"
    }
    if(h == 0) h = 12
  }
  return {time: h, session: s}
}


String.prototype.remove = function(a){
  return this.replace(a, "")
}


Number.prototype.factor = function(){
  let a = [], i = 1
  while(i < this){
    if(this % i === 0) a.push(i)
    i++
  }
  return a
}

Number.prototype.isPrime = function(){
  let i = 2
  while(i < this/2){
    if(this % i === 0) return false
    i++
  }
  return true
}


Array.prototype.randomize = function(){
  return Randomize(this)
}

Array.prototype.fill = (start, end) => {
  if(!end){
    end = start
    start = 0
  }
  let array = []
  for(i=start;i<end+1;i++){
    array.push(i)
  }
  return array;
}

Array.prototype.sum = function(){
  let sum = 0
  this.forEach(num => {
    sum += parseFloat(num)
  })
  return sum
}

Document.prototype.get = (param) => {
  return document.querySelector(param)
}

Document.prototype.add = (el) => {
  let e = document.createElement(el)
  document.body.appendChild(e)
}

HTMLElement.prototype.add = function(el){
  let e = document.createElement(el)
  this.appendChild(e)
  return e
}

// codes are taken from Random.js
// source: https://github.com/SunPodder/random.js

function Random(min, max, full){
  if(arguments.length == 1){
    max = min
    min = undefined
  }
  if(arguments.length == 2 && typeof(arguments[1]) == "boolean"){
    full = max
    max = min
    min = undefined
  }
  let ran = max ? Math.random() * max : Math.random()
  if(ran < min){
    let def = min - ran
    ran += def
  }
  full ? ran = Math.round(ran) : ran
  return ran
}

function RandomColor(red, green, blue, alpha){
  let r, g, b, a
  if(red){
    if(typeof(red) == "number"){
      r = Random(red, true)
    }else if(typeof(red) == "object"){
      r = Random(red[0], red[1], true)
    }
  }else{
    r = Random(255, true)
  }
  if(green){
    if(typeof(green) == "number"){
      g = Random(green, true)
    }else if(typeof(green) == "object"){
      g = Random(green[0], green[1], true)
    }
  }else{
    g = Random(255, true)
  }
  if(blue){
    if(typeof(blue) == "number"){
      b = Random(blue, true)
    }else if(typeof(blue) == "object"){
      b = Random(blue[0], blue[1], true)
    }
  }else{
    b = Random(255, true)
  }
  if(alpha){
    if(typeof(alpha) == "number"){
      a = Random(alpha)
    }else if (typeof(alpha) == "object"){
      a = Random(alpha[0], alpha[1])
    }
  }else {
    a = 1
  }
  
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

function Randomize(array){
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

// Random.js codes
// end