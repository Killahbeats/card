// Function to play the sound effect and open a link after a delay
function playSoundAndOpenLink(location, soundId) {
    var clickSound = document.getElementById(soundId);
    
    // Play the sound effect
    clickSound.currentTime = 0;
    clickSound.play();

    // Open the link after a 4-second delay
    setTimeout(function () {
        window.open(`https://www.google.com/maps/place/${location}`, '_blank');
    }, 4000);
}
