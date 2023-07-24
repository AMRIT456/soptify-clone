let songindex=0;
let audioElement=new Audio('mp3/onmyway.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName:"On My Way",filePath:"mp3/onmyway.mp3",coverPath:"image/onmyway.jpeg"},
    {songName:"Bad Boy",filePath:"mp3/BadBoy.mp3",coverPath:"image/badboy.webp"},
    {songName:"Let Me Love You",filePath:"mp3/LetMeLoveYou.mp3",coverPath:"image/LetMeLoveYou.webp"},
    {songName:"Shape Of You",filePath:"mp3/Shapeofyou.mp3",coverPath:"image/Shapeofyou.jpg"},
    {songName:"Despacito",filePath:"mp3/despacito.mp3",coverPath:"image/despacito.jpeg"},
    {songName:"Faded",filePath:"mp3/faded.mp3",coverPath:"image/faded.jpg"},
    {songName:"Beliver",filePath:"mp3/beliver.mp3",coverPath:"image/beliver.jpg"},
    {songName:"Baby",filePath:"mp3/baby.mp3",coverPath:"image/baby.jpeg"},
    {songName:"Friends",filePath:"mp3/friends.mp3",coverPath:"image/friends.jpeg"},
    {songName:"Attention",filePath:"mp3/attention.mp3",coverPath:"image/attention.jpeg"},
]
songitems.forEach((element,i)=>{
    //console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByTagName('span')[0].innerText=songs[i].songName;

})

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');
    var progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=(audioElement.duration*myprogressbar.value)/100;
})

const makeallplays=()=>{
    
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        //console.log(e.target);
        makeallplays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src=songs[songindex].filePath;
        masterSongName.innerText=songs[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0;
    }
    else{
        songindex=songindex+1;
    }
    audioElement.src=songs[songindex].filePath;
    masterSongName.innerText=songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=9;
    }
    else{
        songindex=songindex-1;
    }
    audioElement.src=songs[songindex].filePath;
    masterSongName.innerText=songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})
