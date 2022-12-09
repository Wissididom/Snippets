Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
	// Message
    this.src = this.src.replace(/dd920c06a01e5bb8b09678581e29d56f/g, '93bfa1dfb04a26bbe11a8359f8515372');
    // Deafen
    this.src = this.src.replace(/e4d539271704b87764dc465b1a061abd/g, '0fded79f3e117e2354dc9e4414e81f6e');
    // Undeafen
    this.src = this.src.replace(/5a000a0d4dff083d12a1d4fc2c7cbf66/g, '87a494e4d66936f2b3b4d0655e7c5186');
    // Mute
    this.src = this.src.replace(/429d09ee3b86e81a75b5e06d3fb482be/g, '8d4672844c0b64927c30390de1d9ca8d');
    // Unmute
    this.src = this.src.replace(/43805b9dd757ac4f6b9b58c1a8ee5f0d/g, '87e93acdc240cffbf402318ee698e8c4');
    // Voice Disconnected
    this.src = this.src.replace(/7e125dc075ec6e5ae796e4c3ab83abb3/g, '07d35e78d984760c932936d39e562d09');
    // PTT Activate
    this.src = this.src.replace(/8b63833c8d252fedba6b9c4f2517c705/g, 'd4de309e478528dde3b61936b6b2ef90');
    // PTT Deactivate
    this.src = this.src.replace(/74ab980d6890a0fa6aa0336182f9f620/g, 'edbd1eb44fea4a0b47314ddf0c1a2620');
    // User Join
    this.src = this.src.replace(/5dd43c946894005258d85770f0d10cff/g, '2421764d6b0516cf74ebed18009f5173');
    // User Leave
    this.src = this.src.replace(/4fcfeb2cba26459c4750e60f626cebdc/g, 'fc544d1057f7480494e1e961b8a23f19');
    // User Moved
    this.src = this.src.replace(/e81d11590762728c1b811eadfa5be766/g, '97f52bf6c5909f04fbb94aaeccd82859');
    // Outgoing Ring
    this.src = this.src.replace(/c6e92752668dde4eee5923d70441579f/g, '84c9eeb905be64bd9f5dc8b19eec89ea');
    // Incoming Ring
    this.src = this.src.replace(/84a1b4e11d634dbfa1e5dd97a96de3ad/g, 'efc06bf335f3fa81003e0e758ffde4da');
    // Stream Started
    this.src = this.src.replace(/9ca817f41727edc1b2f1bc4f1911107c/g, '312229c42b9f649d207aa5d207985d74');
    // Stream Stopped
    this.src = this.src.replace(/4e30f98aa537854f79f49a76af822bbc/g, 'b9a656f925ed809585eac6a3bfbf0ddb');
    // Viewer Join
    this.src = this.src.replace(/5827bbf9a67c61cbb0e02ffbf434b654/g, '2362295d01606d5b2fa72db71ef6b121');
    // Viewer Leave
    this.src = this.src.replace(/7cdcdcbc426cc43583365a671c24b740/g, '27b9e9e678d919a1ab6dbb6336291de1');
    // Invited to Speak
    this.src = this.src.replace(/471cfd0005b112ff857705e894bf41a6/g, '0100c36e9032a9a528e5e65dc7ab7d4f');
    return this._play();
};
