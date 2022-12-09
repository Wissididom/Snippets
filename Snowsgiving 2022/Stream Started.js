Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/9ca817f41727edc1b2f1bc4f1911107c/g, '312229c42b9f649d207aa5d207985d74');
    return this._play();
};
// Normal stream started sound: https://discord.com/assets/9ca817f41727edc1b2f1bc4f1911107c.mp3
// Snowsgiving 2022 stream started sound: https://discord.com/assets/312229c42b9f649d207aa5d207985d74.mp3
