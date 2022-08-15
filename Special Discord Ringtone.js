Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/84a1b4e11d634dbfa1e5dd97a96de3ad/g, 'b9411af07f154a6fef543e7e442e4da9');
    return this._play();
};
// Normal ringtone: https://discord.com/assets/84a1b4e11d634dbfa1e5dd97a96de3ad.mp3
// Special ringtone: https://discord.com/assets/b9411af07f154a6fef543e7e442e4da9.mp3
