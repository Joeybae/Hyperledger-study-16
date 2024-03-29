import React, {Component} from 'react';
import './App.css';
import Nav from "./components/Nav"
import Subject from "./components/Subject"
import ART from "./components/ART"

class App extends Component {
  //초기화 담당
  constructor(props){
    super(props);
    this.state = {
      mode:"read",
      selected_content_id:2,
      subject:{title:"WEB", sub:"World Wide Web!"},
      welcome:{title:"Welcome", desc:"Hello, React!!"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScript", desc:"JavaScript is for interactive"}
      ]
    }
  }

  render() {
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
       <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}
        onChangePage={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}
        >
       </Subject>
       <Nav 
        onChangePage={function(id){
        this.setState({
          mode:'read',
          selected_content_id:Number(id)
        });
       }.bind(this)}
       data={this.state.contents}
       ></Nav>
       <ART title={_title} desc={_desc}></ART>
      </div>
    );
  }  
}

export default App;
