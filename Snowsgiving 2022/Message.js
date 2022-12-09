Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/dd920c06a01e5bb8b09678581e29d56f/g, '93bfa1dfb04a26bbe11a8359f8515372');
    return this._play();
};
// Normal message notification: https://discord.com/assets/dd920c06a01e5bb8b09678581e29d56f.mp3
// Special message notification: https://discord.com/assets/93bfa1dfb04a26bbe11a8359f8515372.mp3
