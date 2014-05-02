String.prototype.repeat = function(num){
  return new Array(num+1).join(this);
};

function MostOfSong(whatever){
  return "Happy".replace("a", repeated("a")).replace("y", repeated("y")) + " " + " Birthday".replace("r", repeated("r")).replace("y", repeated("y")) + " " + whatever;
}
 
function toYou(){
  return "to".replace("o", repeated("o")) + " " + "you".replace("o", repeated("o"));
}

function repeated(letter) { 
  return letter.repeat(Math.floor(Math.random()*25)+10); 
}

function Dear(name) {
  var firstVowel = name.replace(/[^a,e,i,o,u]/, '')[0];
  return "Dear".replace("e", repeated("e")).replace("r", repeated("r")) + " " + name.replace(firstVowel, repeated(firstVowel)).replace(name[name.length-1], repeated(name[name.length-1]));
}

function HappyBirthday(param){
  return MostOfSong(param) + repeated("!");
}

function celebrant(){
  var uri = window.location.search.substring(1);
  var birthdayPerson = uri.split("=");
  return birthdayPerson[1];
}