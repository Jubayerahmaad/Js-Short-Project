function rollDice(){
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    let imageSource = 'images/'+ randomNumber + '.png';
    document.getElementById('lodu').src = imageSource;
}