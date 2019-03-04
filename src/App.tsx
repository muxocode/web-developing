import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MenuHorizontal} from "./components/common/Menu"
import { Boton, typeBoton } from './components/common/Boton/Boton';

class App extends Component {

  rfMenu = React.createRef<HTMLElement>();

  render() {

    return (
      <div className="App">
        <header id="header" className="App-header expand">
        <p>Muxo Code</p>
        <Boton type={typeBoton.outlight} onClick={()=>{
          let elem = document.getElementsByClassName("transfer")[0] as HTMLElement;
          window.scrollTo(
            {
              'behavior': 'smooth',
              'top': elem.offsetTop + elem.offsetHeight
            }
          );
        }}>Empecemos!</Boton>
        </header>
        <div className="transfer"></div>
          <MenuHorizontal setFixedFromOffset = {()=>{
              let header = document.getElementById("header");
              return header?header.offsetHeight:null;
           }}/>
        <div className="cuerpo">
          <div className="expand">
          <h2>Example body text</h2>
              <p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
              <p><small>This line of text is meant to be treated as fine print.</small></p>
              <p>The following is <strong>rendered as bold text</strong>.</p>
              <p>The following is <em>rendered as italicized text</em>.</p>
              <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
          </div>
          <div className="expand jumbotron" style={{backgroundColor: "#000", color:"#fff"}}>

              <h1 className="display-3">Hello, world!</h1>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-4"/>
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
              </p>

          </div>
          <div className="expand">
          <h2>Example body text</h2>
              <p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
              <p><small>This line of text is meant to be treated as fine print.</small></p>
              <p>The following is <strong>rendered as bold text</strong>.</p>
              <p>The following is <em>rendered as italicized text</em>.</p>
              <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
          </div>
        </div>
        <a href="https://www.vecteezy.com">Free vector art via Vecteezy!</a>
      </div> 
    );
  }
}

export default App;
