Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/e4d539271704b87764dc465b1a061abd/g, '0fded79f3e117e2354dc9e4414e81f6e');
    return this._play();
};
// Normal deafen sound: https://discord.com/assets/e4d539271704b87764dc465b1a061abd.mp3
// Snowsgiving 2022 deafen sound: https://discord.com/assets/0fded79f3e117e2354dc9e4414e81f6e.mp3
