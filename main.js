// jeu du + ou - trouver le nombre entre 1 et max
var Game = function(max) {
  this.answer = Math.floor(Math.random() * 1000);
  this.test = function(guest) {
    true
  };
  console.log(this.answer);
}
var g = new Game(1000);
g.test(432);
