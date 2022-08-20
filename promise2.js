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
async function execute(){
    await createPost({title:'post3',body:'this is post3'})
    await getPosts();
    await createPost({title:'post4',body:'this is post4'})
    await getPosts();
    await createPost({title:'post5',body:'this is post5'})
    await getPosts();
    await deletePost();
    await getPosts();
    
}
execute();