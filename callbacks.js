const post=[{title:'post1',body:'this is post1',createdAt:new Date().getTime()},{title:'post2',body:'this is post2'}];

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
        const error=true;
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
createPost({title:'post3',body:'this is post3'}).then(getPosts)
.catch(err=>console.log(err));
post.forEach((p)=>{
const promise=deletePost();
promise.then();
promise.catch(err=>console.log(err));
//p1.then(successCallback, failureCallback);
});

console.log(post);
//getPosts();