console.log('person1:shows ticket');
console.log('person2:shows ticket');
const premovie=async()=>{
const wifeBringsTicket=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve('ticket');

    },1000);
});
const getpopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
const getbutter=new Promise((resolve)=>resolve(`butter`));
const getcolddrinks=new Promise((resolve)=>resolve(`cold drinks`));
let ticket=await wifeBringsTicket;
let [popcorn,butter,colddrinks]=await Promise.all([getpopcorn,getbutter,getcolddrinks]);

console.log(`wife: i have ${ticket} `);
console.log('husband:we should go in');
console.log('wife:i am hungry')
//let popcorn=await getpopcorn;
console.log(`husband:i got some ${popcorn}`)
console.log('husband:we should go in');
console.log('wife:i need some butter on my popcorn');
//let butter=await getbutter;
console.log(`husband:i got some ${butter}`);
console.log('husband:any thing else');
console.log('wife:i need colddrinks');
//let colddrinks=await getcolddrinks;
console.log(`husband:i got some ${colddrinks}`);
console.log('husband:any thing else');
console.log('wife:no lets go');

return ticket;
}
premovie().then((m)=>console.log(`person3: shows ${m}`));

    console.log('person4:shows ticket');
    console.log('person5:shows ticket');
 

