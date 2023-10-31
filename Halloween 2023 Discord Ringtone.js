Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/84a1b4e11d634dbfa1e5dd97a96de3ad/g, 'e19cc32298b291be6b3d');
    return this._play();
};
// Normal ringtone: https://discord.com/assets/84a1b4e11d634dbfa1e5dd97a96de3ad.mp3
// Halloween 2023 ringtone: https://discord.com/assets/e19cc32298b291be6b3d.mp3
