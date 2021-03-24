import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
export default class SearchIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     searchTerm: ''
   }
 }

  searchFunction(e) {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    })
  }
  
  render() {
    return(
      <div>
        <Input placeholder='Search Here' type='text' onChange={(e) => this.searchFunction(e)}/>
        <br/>
        <h3>
          Search Term: 
          {this.state.searchTerm === '' ? <i style={{fontSize: "15pt"}}> Start Typing to Search</i> : <i style={{fontSize: "15pt"}}> {this.state.searchTerm}</i>}
        </h3>
        {this.state.things.filter(name => name.includes(this.state.searchTerm.toLowerCase())).map((item) => (
          <li>
            {item}
          </li>
        ))
        }
      </div>
    )
 }
}