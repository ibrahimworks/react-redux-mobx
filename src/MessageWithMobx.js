
import { observable, action, computed } from 'mobx';
class Tack_ {
  @observable messages = [];

  @action
  addMessage = msg => {
    this.messages.push(msg);
  };

  @computed
  get messageCount() {
    return this.messages.length;
  }
}

// tack.messages.observe(()=> console.log(tack.messageCount));

const Tack = new Tack_();
export default Tack;
