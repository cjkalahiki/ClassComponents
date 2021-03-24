import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';

export default class DogIndex extends Component{

    constructor(props){
        super(props);
        this.state = { 
            imageInit: 'https:\/\/images.dog.ceo\/breeds\/mountain-bernese\/n02107683_3958.jpg',
            imageNew: ''
        };
        this.fetchResults = this.fetchResults.bind(this)
    }

    componentDidMount() {
        console.log('Component Mounted')
    }

    fetchResults(e){
        e.preventDefault();
        let url = 'https://dog.ceo/api/breeds/image/random';
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                this.setState({imageNew: json.message});
                console.log(this.state.imageNew)
            });
    }

    render(){
        return(
            <div> 
                <form onSubmit={this.fetchResults}>
                    <Row>
                        <Col>
                        {
                        (!this.state.imageNew)
                            ? <img src={this.state.imageInit} alt='doggo' style={{maxWidth: "75%"}}/>
                            : <img src={this.state.imageNew} alt='dogdog' style={{maxWidth: "75%"}}/>
                        }
                        </Col>
                        <Col>
                            <button type='submit'>Next Dog</button>
                        </Col>
                    </Row>
                </form>
                <br/>
                <br/>
            </div>
        )
    }
}