let pictureNumber = 0;
document.getElementById("smile").addEventListener("click", function () {
    console.log("Smile was pressed");
    pictureNumber = (pictureNumber + 1) % 2;
    console.log(pictureNumber)
    document.getElementById("smile").src = "Resources/etm" + pictureNumber + '.png';
});
