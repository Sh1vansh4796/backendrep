const fs = require("fs"); // built in module waali bakchodi
fs.writeFileSync("./test1.txt","atmkbfj sync ke saath"); // synchronous
fs.writeFile("./test2.txt","atmkbfj async waala",(err)=>{}); //Async mein error daalna hi hota hai
const atmkbfj = fs.readFileSync("./test1.txt","utf-8"); // synchronous
console.log(atmkbfj);
fs.readFile("./test2.txt","utf-8",(err,result)=>{
    if(err) console.log("mkb aaaaaaaaaaaaaag",err);
    else console.log(result);
}); //Async mein error daalna hi hota hai
fs.appendFileSync("test1.txt",`\njor se bolo pkmb`);
// appendFile bhi kar sakte 
fs.mkdirSync("newFolder"); // for multiple fs.mkdir("my-docs/a/b",{recursive : true});
// sync mtlb blocking 
// block kardo aage ka task , 1 (sync) 2 ---> print bhi =  1 (sync) 2
// async sync mtlb non-blocking ===== preffered ====
// block mat karo aage ka task , 1 (sync) 2 ---> print = 1 2 (sync) 
// event loop to thread pool default worker = 4

