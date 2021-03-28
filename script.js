let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";

let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";

const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";

const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
let startButton = document.getElementById('start');
let currentlyPlaying  = true;

let isBot = (door) => {
  if(door.src === botDoorPath){
    // alert(1+1);
    return true;
  } else { return false; }
};

let isClicked = (door) => {
if(door.src === closedDoorPath){
   return false;
} else { return true; }
};

let playDoor = (door) => {
numClosedDoors = numClosedDoors - 1;
if(numClosedDoors === 0){
  gameOver('win');
} else if(isBot(door)) {
  gameOver();
  continueGame = false;
}
};

const randomChoreDoorGenerator = () => {
   
  let choreDoor  = Math.floor( Math.random() * numClosedDoors );
if(choreDoor === 0){
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
}
else if (choreDoor === 1){
       openDoor2 =  botDoorPath;
       openDoor1 = beachDoorPath;
       openDoor3 = spaceDoorPath;
}
 else {
     openDoor3 = botDoorPath;
     openDoor2 = beachDoorPath;
     openDoor1 = spaceDoorPath;
}
};

let doorImage1 =  document.getElementById('door1');
doorImage1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)) {
doorImage1.src = openDoor1;
playDoor(doorImage1);
};
}

let doorImage2 =  document.getElementById('door2');
doorImage2.onclick = () => {
 if(currentlyPlaying && !isClicked(doorImage2)) {
doorImage2.src = openDoor2;
playDoor(doorImage2);
};
}

let doorImage3 =  document.getElementById('door3');
doorImage3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)) {
doorImage3.src = openDoor3;
playDoor(doorImage3);
};
}

let startRound = () => {
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
      doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
    randomChoreDoorGenerator();
};

let gameOver= (status) => {
// alert(1+2);
if(status === 'win'){
  startButton.innerHTML = 'You win! Play again?';
}else {
  startButton.innerHTML = 'Game Over! Play again?';
}
currentlyPlaying = false;
  
};

startRound();





