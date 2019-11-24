import React from 'react';

export default class TitleBar extends React.Component{
    constructor(props){
        super();
        this.title = props.title
    }
    render(){
        return (<div id="titleBar"><h1>{this.title}</h1></div>)
    }
}

