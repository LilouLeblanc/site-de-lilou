document.getElementById('playBtn').addEventListener('click', function() {
    document.getElementById('audioPlayer').play();
});

document.getElementById('pauseBtn').addEventListener('click', function() {
    document.getElementById('audioPlayer').pause();
});

document.getElementById('stopBtn').addEventListener('click', function() {
    document.getElementById('audioPlayer').pause();
    document.getElementById('audioPlayer').currentTime = 0;
});
