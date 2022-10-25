Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/84a1b4e11d634dbfa1e5dd97a96de3ad/g, '15b48ed7383b702ad2a3e9a0f7ebd2c0');
    return this._play();
};
// Normal ringtone: https://discord.com/assets/84a1b4e11d634dbfa1e5dd97a96de3ad.mp3
// Halloween 2022 ringtone: https://discord.com/assets/15b48ed7383b702ad2a3e9a0f7ebd2c0.mp3
