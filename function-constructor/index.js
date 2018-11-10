function Tune(song, artist){
    this.title = song;
    this.artist = artist;
};

Tune.prototype.concat = function(){
    return this.artist.concat(this.title);
};

let tune = new Tune('lala', 'Yuliya');
console.log(tune.concat())
////////

String.prototype.repeat = function(times){
    return new Array(times+1).join(this);
}
console.log('kj'.repeat(3));
