const post=[{title:'post1',body:'this is post1',createdAt:new Date().getTime()},{title:'post2',body:'this is post2',createdAt:new Date().getTime()}];
let intervalid=0;
function getPosts(){
    clearInterval(intervalid);
    intervalid=setInterval(()=>{
       let output='';
        post.forEach((p)=>{
            output+=`<li>${p.title},-last updated${(new Date().getTime()-p.createdAt)/1000}seconds ago</li>`;
        });
        document.body.innerHTML=output;
        //console.log(post);
    },1000);
}
function createPost(p,callback){
    setTimeout(()=>{
        post.push({...p, createdAt:new Date().getTime()});
        callback();
    },2000);
}
function create4thpost(p,callback){
    setTimeout(()=>{
        post.push({...p,createdAt:new Date().getTime()});
       callback();

    },2000);

}




createPost({title:'post3',body:'this is post3'},getPosts);
create4thpost({title:'post4',body:'this is post4'},createPost);

console.log(post);
//getPosts();