import React, { Component } from 'react';

class Form2 extends Component{

    constructor(props){
        super(props);

       this.inputName = React.createRef();

       this.handleSubimit = this.handleSubimit.bind(this);
        
       this.state = {
           list: []
       }
    }

    handleSubimit(event){
        event.preventDefault();
        fetch('https://api.github.com/search/repositories?q=${this.inputName.current.value}')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    list: data.items
                })
            })
    }

    render(){
        const { state } = this;

        return (
            <form onSubmit={this.handleSubimit}>
                <div>
                    <label>
                        Name:
                        <input  type='text'name='name' ref={this.inputName}/> 
                    </label>
                </div>
                <input type="submit" value='Enviar'/>
           
                <ul>
                    {state.list.map(item => <li>{item.full_name}</li>)}
                </ul>
            </form>
        )
    }
}

export default Form2;