Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/4e30f98aa537854f79f49a76af822bbc/g, 'b9a656f925ed809585eac6a3bfbf0ddb');
    return this._play();
};
// Normal stream stopped sound: https://discord.com/assets/4e30f98aa537854f79f49a76af822bbc.mp3
// Snowsgiving 2022 stream stopped sound: https://discord.com/assets/b9a656f925ed809585eac6a3bfbf0ddb.mp3
