import React, {Component} from 'react';

class ART extends Component {
    render(){
      console.log('Content render')
      return(
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
      );
    }
}

export default ART;