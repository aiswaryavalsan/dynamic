const post=[{title:'post1',body:'this is post1',lastActivityTime:new Date().getTime()},{title:'post2',body:'this is post2',lastActivityTime:new Date().getTime()}];

function getPosts(){
   
    setTimeout(()=>{
       let output='';
        post.forEach((p)=>{
            output+=`<li>${p.title}</li>`;
        });
        document.body.innerHTML=output;
        //console.log(post);
    },1000);
}
function createPost(p){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        post.push(p);
        const error=false;
        if(!error)
        {
            resolve();
        }
        else{
            reject('something went wrong');
        }
    },2000);

    });
}
function deletePost()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            post.pop();
            if(post.length>0)
            {
                resolve();
            }
            else{
                reject('array is empty');
            }

    },1000);

    });

}
//getPosts();
createPost({title:'post3',body:'this is post3'}).then(getPosts)
console.log(new Date().getTime());

function updateLastActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            post.lastActivityTime=new Date().getTime();
            resolve();
            
        }, 1000);

    });
}
function userupdate(){
    Promise.all([createPost,updateLastActivityTime]).then(values=>console.log(values));

}
userupdate();
//const promise1=Promise.resolve('hello');
//const promise2=10;
//const promise3=new Promise((resolve,reject)=>setTimeout(resolve,2000,'good bye'));
//Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));
//const lastuseractivitytime=Promise.resolve(new Date().getTime() );