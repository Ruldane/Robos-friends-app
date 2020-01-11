import React, {Component} from "react";
import {robots} from "./robots";
import CarList from "./CardList";
import SearchBox from "./SearchBox";
import './App.css'
import Scroll from "./Scroll";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({robots: users})
        })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    };

    render (){
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if (this.state.robots.length === 0){
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className="h1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CarList robots={filterRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;