import React, { Component } from 'react';
export class Menu extends Component{

    render(){
        const chapterName = [
        "Où est ma fille ?",
            "Les Noces funèbres",
            "Les Noces funèbres",
            "Issou la chankla"
        ];
        const style ={
            color:"red",
        };
        const chapterList= chapterName
            .map((e,a)=><li style={a+1<=this.props.unlockChapter?style:null}>Chapitre {a+1} : {e}</li>);

        return(

            <ul>
                {chapterList}
            </ul>
        )



    }
}