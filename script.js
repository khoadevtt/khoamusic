let currentSong = null;
let audioElement = document.getElementById('audio');
let audioSource = document.getElementById('audio-source');
let songImage = document.getElementById('song-image');
let songTitle = document.getElementById('song-title');
let songArtist = document.getElementById('song-artist');

function playSong(song, image, title, artist) {
    // Update song details
    audioSource.src = song;
    audioElement.load();
    audioElement.play();

    // Update song image, title, and artist
    songImage.src = image;
    songTitle.textContent = title;
    songArtist.textContent = artist;

    // Toggle play/pause icon
    document.getElementById('play-pause-btn').textContent = 'pause';
}

// Add play/pause functionality
document.getElementById('play-pause-btn').addEventListener('click', function() {
    if (audioElement.paused) {
        audioElement.play();
        this.textContent = 'pause';
    } else {
        audioElement.pause();
        this.textContent = 'play_arrow';
    }
});

// Skip next and previous song (simplified example)
document.getElementById('next-btn').addEventListener('click', function() {
    // Implement skipping to next song (you can cycle through an array of songs)
});

document.getElementById('prev-btn').addEventListener('click', function() {
    // Implement skipping to previous song (you can cycle through an array of songs)
});
