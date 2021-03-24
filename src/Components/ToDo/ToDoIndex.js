import React, {Component} from 'react';
import ToDo from './ToDo';

export default class ToDoIndex extends Component{
    constructor(props){
        super(props);
        this.state = {
            task: [],
            userInput: ''
        }
        this.createTask = this.createTask.bind(this)
    }

    createTask(e){
        e.preventDefault();
        this.setState({
            task: [...this.state.task, this.state.userInput],
            userInput: ''
        });
    }
    
    typeTask(e){
        this.setState({userInput: e.target.value})
    }

    removeTask(e, index){
        e.preventDefault();
        let toDelete = [this.state.task.splice(index, 1)];
        
        for (let i = 0; i < this.state.task.length; i++){
            if(this.state.task[i] === toDelete[0][0]){
                this.setState({
                    task: [this.state.task.splice(i, 1)]
                })
            }
        }

        this.setState({
            task: [...this.state.task] 
        })
    }
    
    render(){
        return (
            <div>
                <h3><i>Tasks will disappear once you have clicked the "Completed" button</i></h3>
                <br/>
                <form onSubmit={this.createTask}>
                    <input type='text' value={this.state.userInput} onChange={(e) => this.typeTask(e)} placeholder=""/>
                    <br/>
                    <br/>
                    <button type='submit'>Submit New Task</button>
                </form>
                {this.state.task.map((item, index) => (
                    <li>
                        {item}
                        <br/>
                        <button onClick={(e) => this.removeTask(e, index)} type='submit'>Completed</button>
                    </li>
                ))}
            </div>
        )
    }
}