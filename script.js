console.log("Welcome to Ritik's Music Page")
let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let Myprogress = document.getElementById('Myprogress');
let gif = document.getElementById('gif');
let mastersong = document.getElementById('mastersong');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Deewane Hum Nahi Hote", filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Free Fire Holi Music", filePath: "songs/2.mp3", coverPath: "cover/2.jpg" },
    { songName: "Kahani Suno", filePath: "songs/3.mp3", coverPath: "cover/3.jpg" },
    { songName: "Maan Meri Jaan", filePath: "songs/4.mp3", coverPath: "cover/4.jpg" },
    { songName: "Raatan Lambiyan", filePath: "songs/5.mp3", coverPath: "cover/5.jpg" },
    { songName: "Teri Aashiqui ne maara", filePath: "songs/6.mp3", coverPath: "cover/6.jpg" },
    { songName: "Teri Galiyon Se", filePath: "songs/7.mp3", coverPath: "cover/7.jpg" },
    { songName: "Tumse bhi jyada", filePath: "songs/8.mp3", coverPath: "cover/8.jpg" },
    { songName: "Wo Door Jake Kahi Pe", filePath: "songs/9.mp3", coverPath: "cover/9.jpg" },
]
songItem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})
//audio element play

//Handle Music Play and Pause
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//listen to event
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');

    //Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    Myprogress.value = progress;
})

Myprogress.addEventListener('change', () => {
    audioElement.currentTime = Myprogress.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
        element.classList.remove('fa-play-circe');
        element.classList.add('fa-pause-circe');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach(() => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        mastersong.innerText = songs[songindex].songName;
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circe');
        e.target.classList.add('fa-pause-circe');

        audioElement.src = `songs/${songindex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})


document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 9) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioElement.src = `songs/${songindex + 1}.mp3`;
    mastersong.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0;
    }
    else {
        songindex -= 1;
    }
    audioElement.src = `songs/${songindex + 1}.mp3`;
    mastersong.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})