function validURL(str) {
    let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

let meme = document.getElementById("meme")
meme.onblur = function() {
    if (!validURL(meme.value)) { // не email
        meme.classList.add('invalid');
        error.innerHTML = 'Пруф должен быть ссылкой'
    }
};

meme.onfocus = function() {
    if (meme.classList.contains('invalid')) {
        meme.classList.remove('invalid');
        error.innerHTML = "";
    }
};