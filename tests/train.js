let rev='Mam'
let reversed = ''

for(let i =rev.length-1;i>=0;i--){
     reversed =reversed+rev[i]
}
console.log(reversed);


// let rev ='Mom'
// let reverse = ""

// for(let i =rev.length-1;i>=0;i--){
//     reverse=reverse+rev[i]}

//     console.log(reverse)

let arr1 = ["apple", "orange", "mango", "apple", "pineapple"];
let arr = [10, 30, 50, 10, 100, 30, 200, 70];


// arr.sort((a,b)=>a-b)
// console.log(arr);
// 
// let ascending =[...arr1].sort()
// console.log(ascending);



// arr.sort((a,b)=>b-a)
// console.log(arr);


let unique=[...new Set(arr1)]
console.log(unique);




// let ascending = [...arr].sort();
// console.log("Ascending:", ascending);
