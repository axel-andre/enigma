import React, { Component } from 'react';
export class Level extends Component{
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
            {this.props.currentLevel%2===0?(
                <h2 className="levelText">Niveau {this.props.currentLevel}</h2>


            ):(
                <h2 className="levelTextNext">Niveau {this.props.currentLevel}</h2>

            )}
            {subtitle[this.props.currentLevel]!=null?(

                <p>{subtitle[this.props.currentLevel]}</p>

            ):""}
        </div>
    )
}


}