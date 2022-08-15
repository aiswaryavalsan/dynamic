console.log('person1:shows ticket');
console.log('person2:shows ticket');
const wifeBringsTicket=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve('ticket');

    },1000);
});
const getpopcorn=wifeBringsTicket.then((t)=>{
    console.log('husband:we should go in');
    console.log('wife:i am hungry')
   return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
});

const getbutter=getpopcorn.then((t)=>{
console.log('husband:we should go in');
console.log('wife:i need some butter on my popcorn');
return new Promise((resolve)=>resolve(`${t} butter`));

});
getbutter.then((t)=>console.log(t));
    console.log('person4:shows ticket');
    console.log('person5:shows ticket');
 

