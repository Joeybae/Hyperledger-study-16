# Hyperledger-study-16

하이퍼레져 앱 만들기 실습 16일차 - Html, Css, JavaScript 클릭시 변환

출처 : https://www.opentutorials.org/module/4058/24737

1. 15일차 예제 사용

2. App.js 수정 - state와 조건문을 통해서 클릭시 id 변경

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
        
 3. Nav.js 수정 - setState와 function(e)를 통해서 클릭 시 id 
 
        import React, {Component} from 'react';

        class Nav extends Component {
            render(){
              console.log('Nav render')
              var lists = [];
              var data= this.props.data;
              var i = 0;
              while(i < data.length){
                lists.push(
                <li key={data[i].id}>
                  <a 
                    href={"/contents/"+data[i].id}
                    data-id={data[i].id}
                    onClick={function(e){
                      e.preventDefault();
                      this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}
                  >{data[i].title}</a>
                </li>);
                i = i + 1;
              }
              return(
                <nav>
                  <ul>
                      {lists}
                  </ul>
                </nav>
              );
            }
          }

        export default Nav;
