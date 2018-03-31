import React, { Component } from 'react';
export class Level extends Component{
    state = {
        isAnimated : true,
        Title:"YES"
    };
    changeAnimation(){
        this.setState({isAnimated:!this.state.isAnimated});
        console.log(this.state.isAnimated);
    }
render(){
    const subtitle = [
        "Salut",
        "Iss",
        null,
        "C'est toi",
        "Comment tu vas ?",
        "C'est le subtitle N°5"
    ];

    return(

        <div className="Chapitre">
            {/*{this.state.isAnimated!==true?"TRUE":"FA/SE"}*/}

            {this.props.currentLevel%2===0?(
                <h2 className="levelText" onAnimationStart={this.changeAnimation.bind(this)}>Niveau {this.props.currentLevel}</h2>

            ):(
                <h2 className="levelTextNext" onAnimationEnd={this.changeAnimation.bind(this)}>Niveau {this.props.currentLevel}</h2>

            )}
            {subtitle[this.props.currentLevel]!=null?(

                <p>{subtitle[this.props.currentLevel]}</p>

            ):""}
        </div>
    )
}


}