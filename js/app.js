let seconds = 0;
const timePassing = () => {
    $('.time').text(`${seconds}`);
    $('.hunger-meter').text(`${player1.hunger}`);
    $('.tired-meter').text(`${player1.sleepiness}`);
    $('.bored-meter').text(`${player1.boredom}`);
    $('.age-meter').text(`${player1.age}`);
    if (seconds % Math.floor(Math.random() * 2 +6) === 0){
        player1.hunger+= Math.floor(Math.random() * 3 +1);
    }
    if (seconds% Math.floor(Math.random() * 2 +6) === 2){
        player1.sleepiness+= Math.floor(Math.random() * 3 +1);
    }
    if (seconds% Math.floor(Math.random() * 2 +6) === 4){
        player1.boredom+= Math.floor(Math.random() * 3 +1);
    }
    if (seconds%50 === 0){
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
    $(e.currentTarget).parent().remove();
    $('body').append('<div id="guy"></div>');
    $('body').append(`<div class="display" id="metrics"><h2>${player1.name}'s Stats</h2></div>`);
    $('body').append('<div class="display" id="controls"><h2>controls</h2></div>');
    metrics();
    controls();
    $('#feed').on('click', clickFeed)
    $('#sleep').on('click', clickSleep)
    $('#play').on('click', clickPlay)
    
    
})

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

const clickFeed = () => {
    player1.hunger -= 2;
}
const clickSleep = () => {
    player1.sleepiness -= 2;
}
const clickPlay = () => {
    player1.boredom -= 2;
}




    





