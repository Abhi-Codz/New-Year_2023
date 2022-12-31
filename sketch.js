//Naming variables
var SantaChristmas, SantaChristmasImage;
var NewYear, NewYearImage;
var song;
var fireWorks;
var lamp, lampImage;
var leaf, leafImage;

function preload()
{
    SantaChristmasImage = loadAnimation('ChristmasSanta1.png', 'ChristmasSanta2.png');
    NewYearImage = loadAnimation('2021-0.png', '2021-0.png', '2021-0.png', '2021-0 (1).png', '2021-0 (1).png', '2021-0 (1).png', '2021-0 (2).png', '2021-0 (2).png', '2021-0 (2).png', '2021-0 (3).png','2021-0 (3).png','2021-0 (3).png', '2021-0 (4).png', '2021-0 (4).png', '2021-0 (4).png', '2021-0 (5).png', '2021-0 (5).png', '2021-0 (5).png', '2021-0 (6).png', '2021-0 (6).png', '2021-0 (6).png', '2021-0 (7).png', '2021-0 (7).png', '2021-0 (7).png', '2021-0 (8).png', '2021-0 (8).png', '2021-0 (8).png', '2021-0 (9).png', '2021-0 (9).png', '2021-0 (9).png');
    song = loadSound('y2mate.com - Happy New Year 2020  Happy New Year Songs 2020  Top Happy New Year Songs Playlist 2020-[AudioTrimmer.com].mp3');
    fireWorks = createImg('fireworks_gif.gif');
    lampImage = loadImage('2023Lamp.png');
    leafImage = loadImage('Leaf.png');
}


function setup()
{
    let canvas = createCanvas(560, 600);

    song.loop();
    
    //Creating sprites
    
    leaf = createSprite(280, 320);
    leaf.addImage(leafImage);
    // leaf.scale = 100;
    /*
    SantaChristmas = createSprite(450, 520);
    SantaChristmas.addAnimation("wink", SantaChristmasImage);
    SantaChristmas.scale = 0.3;
*/

    NewYear = createSprite(280, 295);
    NewYear.addAnimation("animation", NewYearImage);

    lamp = createSprite(285, 272);
    lamp.addImage(lampImage);
}


function draw()
{
    background('#FF5733');
    fireWorks.position(176, 446);
    fireWorks.size(0, 0);

    fill('turquoise');
    textSize(20);
    text('BY-ABHINAV MISHRA', 100, 50)
    

    drawSprites();
}