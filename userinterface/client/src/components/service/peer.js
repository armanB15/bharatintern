 class Peerservice {
  constructor() {
    if (!this.peer) {
      this.peer = new RTCPeerConnection({
        iceServers: [
          {
            urls: [
              "stun:stun.l.google.com:19302",
               "stun:global.stun.twilio.com:3478",
            ],
          },
        ],
    });
    }
  }
  async getanswer(offer){
    if(this.peer){
      await this.peer.setRemoteDescription(offer)
      const answer=await this.peer.createAnswer();
      await this.peer.setLocalDescription(new RTCSessionDescription(answer));
      return answer;
    }
  }
  async setLocalDescription (answer){
    if(this.peer){
      await this.peer.setRemoteDescription(new RTCSessionDescription(answer));
    }
  }
  async getoffer() {
    if (this.peer) {
      const offer = await this.peer.createOffer();
      await this.peer.setLocalDescription(new RTCSessionDescription(offer));
      return offer;
    }
  }
}
export default new Peerservice();