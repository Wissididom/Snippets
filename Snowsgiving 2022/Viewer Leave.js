Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/7cdcdcbc426cc43583365a671c24b740/g, '27b9e9e678d919a1ab6dbb6336291de1');
    return this._play();
};
// Normal viewer leave sound: https://discord.com/assets/7cdcdcbc426cc43583365a671c24b740.mp3
// Snowsgiving 2022 viewer leave sound: https://discord.com/assets/27b9e9e678d919a1ab6dbb6336291de1.mp3
