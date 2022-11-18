const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
cats.push(name);
};
destructivelyAppendCat("Ralph");
console.log(cats);

function destructivelyPrependCat(name){
cats.unshift(name);
};
destructivelyPrependCat("Bob");
console.log(cats);

function destructivelyRemoveFirstCat(){
    cats.shift();
}
destructivelyRemoveFirstCat(cats);
console.log(cats);

function destructivelyRemoveLastCat(){
    cats.pop();
}
destructivelyRemoveLastCat(cats);
console.log(cats);

function appendCat(name){
 var newArray = cats.slice();
 newArray.push(name)
 return newArray;
};
appendCat("Broom");

function prependCat(name){
    var newArray = cats.slice();
    newArray.unshift(name)
    return newArray;
   };
   appendCat("Arnold");

function removeLastCat(){
    var newCatArray = cats.slice()
    newCatArray.pop();
    return newCatArray
}
removeLastCat();

function removeFirstCat(){
    var newCatArray = cats.slice()
    newCatArray.shift();
    return newCatArray
}
removeFirstCat();
