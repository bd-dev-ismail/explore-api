function loadPost(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => displayPost(data));
}
function displayPost(post){
    const postContainer = document.getElementById("post-container");
    for(const item of post){
        // console.log(item)
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <h4>User-${item.userId}</h4>
            <h5>Title-${item.title}</h5>
            <p>Description-${item.body}</p>
        `;
        postContainer.appendChild(div);
    }
}
loadPost();