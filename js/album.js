function loadAlbum(){
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res => res.json())
    .then(data => displayAlbum(data))
}
function displayAlbum(albums){
    const albumContainer = document.getElementById("album-container");
    for(const album of albums){
        console.log(album);
        const div = document.createElement('div');
        div.innerHTML = `
            <h4>ID-${album.id}</h4>
            <h3>Title-${album.title}</h3>
        `;
        albumContainer.appendChild(div);
    }
}
loadAlbum()