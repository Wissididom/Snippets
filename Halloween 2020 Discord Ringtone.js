Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/84a1b4e11d634dbfa1e5dd97a96de3ad/g, 'bceeb2ba92c01584dcaafc957f769bae');
    return this._play();
};
// Normal ringtone: https://discord.com/assets/84a1b4e11d634dbfa1e5dd97a96de3ad.mp3
// Halloween 2020 ringtone: https://discord.com/assets/bceeb2ba92c01584dcaafc957f769bae.mp3
