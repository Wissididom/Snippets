Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/e81d11590762728c1b811eadfa5be766/g, '97f52bf6c5909f04fbb94aaeccd82859');
    return this._play();
};
// Normal user moved sound: https://discord.com/assets/e81d11590762728c1b811eadfa5be766.mp3
// Snowsgiving 2022 user moved sound: https://discord.com/assets/97f52bf6c5909f04fbb94aaeccd82859.mp3
