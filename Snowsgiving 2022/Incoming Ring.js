Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/84a1b4e11d634dbfa1e5dd97a96de3ad/g, 'efc06bf335f3fa81003e0e758ffde4da');
    return this._play();
};
// Normal incoming ringtone: https://discord.com/assets/84a1b4e11d634dbfa1e5dd97a96de3ad.mp3
// Snowsgiving 2022 incoming ringtone: https://discord.com/assets/efc06bf335f3fa81003e0e758ffde4da.mp3
