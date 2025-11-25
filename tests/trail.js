let a = [10,30,20,10,20,30,70,50,300,200]
let a1 =["pinapple","apple","pinapple","graps","mango","orange"]

a.sort((a,b)=>a-b)
console.log(a)

let arr=[...a1].sort()
console.log(arr);

console.log(a1.indexOf("orange"))

let unique=[...new Set(a)]
console.log(unique);

let unique1=[...new Set(a1)]
console.log(unique1)

console.log("Reverse Method====================================")

rev="mam";
reversed=""

for(let i=rev.length-1;i>=0;i--){
    reversed=reversed+rev[i]
}
// console.log(reversed)

if(reversed===rev){
    console.log("Its a palindrome")
}else{
    console.log("its not a palindrome");
    
}

console.log("string Method====================================")

let Greats="goodmorninggoodafternoongoodnight";

let correct = Greats.replace("goodnight","badnight")
console.log(correct);

