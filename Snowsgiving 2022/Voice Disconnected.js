Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/7e125dc075ec6e5ae796e4c3ab83abb3/g, '07d35e78d984760c932936d39e562d09');
    return this._play();
};
// Normal voice disconnected sound: https://discord.com/assets/7e125dc075ec6e5ae796e4c3ab83abb3.mp3
// Snowsgiving 2022 voice disconnected sound: https://discord.com/assets/07d35e78d984760c932936d39e562d09.mp3
