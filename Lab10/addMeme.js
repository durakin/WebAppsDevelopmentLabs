function addMemeAction(event) {
    event.preventDefault();
    if (document.getElementById("meme").value === "" ||
    document.getElementById("description").value === "") {
        console.log("Nothing to add");
        return;
    }

    console.log("addMeme() called")
    console.log(list_of_memes)
    let new_entry = {
        header : document.createElement("h3"),
        paragraph : document.createElement("p")
    };
    new_entry.header.innerHTML = document.getElementById("meme").value + "<a id="+document.getElementById("meme").value+"></a>";
    new_entry.paragraph.innerText = document.getElementById("description").value;
    list_of_memes.appendChild(new_entry.header);
    list_of_memes.appendChild(new_entry.paragraph);
    console.log("addMeme() finished")
}