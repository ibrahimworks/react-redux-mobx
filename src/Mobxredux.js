
import { observable, action, computed } from 'mobx';
class Tack {
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

let tack = new Tack();


global.tack = tack;

tack.messages.observe(()=> console.log(tack.messageCount));

const singleton = new Tack();
export default singleton;
// tack.addMessage('salut les ganes');
// tack.addMessage('salut les ganes');
// tack.addMessage('salut les ganes');
// tack.addMessage('salut les ganes');
