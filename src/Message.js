import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('Tack')
@observer
export default class Message extends Component {



  constructor(props) {
   super(props);
      this.state = {
            value:""
            };

      this.pushMessage = this.pushMessage.bind(this);
      this.handleChange = this.handleChange.bind(this);
        this.Tack  = this.props.Tack;
    }

    handleChange(event) {
       this.setState({value: event.target.value});
     }

     pushMessage(){
        this.Tack.addMessage(this.state.value);
        this.setState({value: ''});

     }


  render() {

    return(
       <div>
           <section >
              <ul>{this.Tack.messages.map((message,index) => <li key={index}>{message}</li>)}</ul>
           </section>
           <div>
              <input type="text" value={this.state.value}  onChange={this.handleChange} />
              <button onClick={this.pushMessage} >valide</button>
           </div>
      </div>
    )
  }
}
