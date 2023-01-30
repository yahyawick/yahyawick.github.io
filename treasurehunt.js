var treasure = Math.floor(Math.random() * 24);
var shark = Math.floor(Math.random() * 24);
var sharkTwo = Math.floor(Math.random() * 24);
var counter = 12;

if (treasure === shark) {
  shark = Math.floor(Math.random() * 24);
}

const treasureHunt = (gold) => {
  counter = counter - 1;
  document.getElementById("counter").innerHTML = counter;

  if (treasure === gold) {
    document.getElementById("searchResults").innerHTML =
      "You have found the underwater treasure! 💰";
    document.getElementById(gold).innerHTML = "💰";
    // document.getElementById("counter").innerHTML = (counter = 0)
  } else if (shark === gold) {
    document.getElementById("searchResults").innerHTML =
      "I'm so sorry... the sharks got to you first 🦈";
    document.getElementById(gold).innerHTML = "🦈";
  } else if (sharkTwo === gold) {
    document.getElementById("searchResults").innerHTML =
      "I'm so sorry... the sharks got to you first 🦈";
    document.getElementById(gold).innerHTML = "🦈";
  } else if (counter === 0) {
    document.getElementById("searchResults").innerHTML =
      "You've run out of time and the Pirates have got you! 🏴‍☠️";
    document.getElementById(gold).innerHTML = "🏴‍☠️";
  } else if (treasure !== gold && shark !== gold) {
    document.getElementById(gold).innerHTML = "🐠";
    document.getElementById(location).disabled = true;
  }
};
