function addMemeAction() {
    console.log("addMeme() called")
    let list_of_memes = document.getElementById("list_of_memes");
    console.log(list_of_memes)
    let new_entry = {
        header : document.createElement("h3"),
        paragraph : document.createElement("p")
    };
    new_entry.header.innerHTML = "SSAO <a id="+document.getElementById("meme").value+"></a>";
    new_entry.paragraph.innerText = document.getElementById("description").value;
    list_of_memes.appendChild(new_entry.header);
    list_of_memes.appendChild(new_entry.paragraph);
    console.log("addMeme() finished")
}