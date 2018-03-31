import React, { Component } from 'react';
import './App.css';
import './Level.js';
import './Menu.js';
import {Level} from "./Level";
import {Menu} from "./Menu";
class App extends Component {
    // Ces variables sont utilisés dans plusieurs composants
    state = {
        unlockChapter:1,
        unlockLevel:1,
        currentLevel: 0,
        currentLife:2,
        maxLevel: 9,
        maxLife:2,
        imagesList:[
            "bg.jpg",
            "hs.png"
        ]
    }
    ;
    goToMenu(){
        this.setState({currentLevel: 0});
    }
    continue(){
        if(this.state.currentLevel!==0){
            if (this.state.currentLevel < this.state.maxLevel ){
                this.setState({currentLevel: this.state.currentLevel+1});
                if (this.state.currentLevel === this.state.unlockLevel)
                    this.setState({unlockLevel: this.state.unlockLevel+1});

            }else{
                this.setState({currentLevel: 0});
                this.setState({unlockChapter: 2});
            }
        }else{
            this.setState({currentLevel: this.state.unlockLevel});
        }


    }
    render(){
        const bg = this.state.currentLevel===0?
                    {backgroundImage:`url(${this.state.imagesList[this.state.unlockLevel-1]})`}
                :
                 {backgroundImage:`url(${this.state.imagesList[this.state.currentLevel-1]})`}
                ;
        return(
            <div style={bg} className="game">
                {this.state.currentLevel!==0?(<div><button className="menuButton button" onClick={this.goToMenu.bind(this)}>Menu</button><br/></div>):(<br/>)}
                <button className="nextButton button" onClick={
                    this.continue.bind(this)}>{this.state.currentLevel< this.state.maxLevel? "Suivant":"Chapitre 2"}</button>

                {this.state.currentLevel===0?(
                   <Menu unlockChapter={this.state.unlockChapter} />
                ):(
                    <Level currentLevel={this.state.currentLevel}/>

                )}


            </div>

        )
    }
}

export default App;
