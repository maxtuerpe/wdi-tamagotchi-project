const goatPics = [
    'https://gifer.com/i/MXiV.gif',
    'https://mbtskoudsalg.com/images/baby-goat-png-8.png',
    'https://marketplace.canva.com/MAASsTVvxVc/1/thumbnail_large/canva-baby-goat-MAASsTVvxVc.png',
    'https://webiconspng.com/wp-content/uploads/2017/09/Goat-PNG-Image-78269.png',
    'https://gifer.com/i/YdBR.gif',
    'https://mbtskoudsalg.com/images/animal-skull-png-4.png'
]
const careless = $('#careless')
let seconds = 0;
const timePassing = () => {
    if (seconds % Math.floor(Math.random() * 2 +6) === 0){
        player1.hunger+= Math.floor(Math.random() * 3 +1);
    } if (seconds% Math.floor(Math.random() * 2 +6) === 2){
        player1.sleepiness+= Math.floor(Math.random() * 3 +1);
    } if (seconds% Math.floor(Math.random() * 2 +6) === 4){
        player1.boredom+= Math.floor(Math.random() * 3 +1);
    } if (seconds%10 === 0){
        player1.age++;
    }
    seconds++;   
}
class Tamagotchi {
    constructor (){
        this.name = "";
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 0;
    }
}
const player1 = new Tamagotchi ();
$('#start-button').on('click', (e)=>{
    
    player1.name = ($('#name').val());
     setInterval(kill, 1000)
    $(e.currentTarget).parent().remove();
    $('body').append('<div id="guy"></div>');
    $('#guy').on('click', ()=>{$('#pew')[0].play()})
    $('body').append(`<div class="display" id="metrics"><h2>${player1.name}'s Stats</h2></div>`);
    $('body').append('<div class="display" id="controls"><h2>controls</h2></div>');
    metrics();
    controls();
    setInterval(updatePlayer, 100)
    setInterval(move, 1000 * (player1.age + 1));
    $('#feed').on('click', clickFeed)
    $('#sleep').on('click', clickSleep)
    $('#play').on('click', clickPlay) 
})
const updatePlayer = () =>{
    $('.time').text(`${seconds}`);
    $('.hunger-meter').text(`${player1.hunger}`);
    $('.tired-meter').text(`${player1.sleepiness}`);
    $('.bored-meter').text(`${player1.boredom}`);
    $('.age-meter').text(`${player1.age}`);
    if (player1.age === 0){
    }
    if(player1.age === 1){
        $('#guy').css(`background-image`, `url(${goatPics[1]})`);
    }
    if(player1.age === 2){
        $('#guy').css(`background-image`, `url(${goatPics[2]})`);
    }
    if(player1.age === 3){
        $('#guy').css(`background-image`, `url(${goatPics[3]})`);
    }
    if(player1.age === 4){
        $('#guy').css(`background-image`, `url(${goatPics[4]})`);
    }
}
const metrics = () =>{
    $('#metrics').append(`<h4>timer: <span class="time">0</span></h4>`);
    $('#metrics').append(`<h4>hunger: <span class="hunger-meter">0</span></h4>`);
    $('#metrics').append(`<h4>sleepiness: <span class="tired-meter">0</span></h4>`);
    $('#metrics').append(`<h4>boredom: <span class="bored-meter">0</span></h4>`);
    $('#metrics').append(`<h4>age: <span class="age-meter">0</span></h4>`);
    setInterval(timePassing, 1000);
}
const controls = () =>{
    $('#controls').append(`<button class='controls' id='feed'>feed</button>`)
    $('#controls').append(`<button class='controls' id='sleep'>sleep</button>`)
    $('#controls').append(`<button class='controls' id='play'>play</button>`)
}
const clickFeed = () =>{
    if (player1.hunger < 2){
        alert(`${player1.name} is full`)
    }
    if (player1.hunger >= 2){
    player1.hunger -= 2;
    }   
}
const clickSleep = () =>{
    if (player1.sleepiness < 2){
        alert(`${player1.name} is woke`)
    }
    if (player1.sleepiness >= 2){
    player1.sleepiness -= 2;
    }    
}
const clickPlay = () =>{
    if (player1.boredom < 2){
        alert(`${player1.name} is indeed entertained`)
    }
    if (player1.boredom >= 2){
    player1.boredom -= 2;
    }    
}
const kill = () =>{
    if (player1.hunger >= 10 || player1.sleepiness >= 10 || player1.boredom >= 10){
        $('#guy').css('background-image', `url(${goatPics[5]})`);
        setTimeout( ()=>{if (confirm("Retry?")) {
            document.location.reload();
        } else if(alert("please leave.")){
            document.location.close();
        }} , 5000 ) 
    }
}
const move = () =>{
    $('#guy').velocity({
        translateX: Math.floor(Math.random() * 1000 -500),
        translateY: Math.floor(Math.random() * 500 - 250),
        rotateZ: 45
    }, 500 * (player1.age + 1))     
    $('#guy').velocity({
        translateX: Math.floor(Math.random() * 1000 -500),
        translateY: Math.floor(Math.random() * 500 -250),
        rotateZ: -45
    }, 500 * (player1.age + 1)) 
}
$('#oh').on('click', () => {
careless[0].play();
})








    





