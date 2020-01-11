import React, {Component} from "react";
import {connect} from 'react-redux'
import CarList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css'
import Scroll from "../components/Scroll";
import {setSerarchfield, requestRobots} from "../actions";
import Header from "../components/Header";


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch (setSerarchfield(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())

    }
};

class App extends Component{

    componentDidMount() {
       this.props.onRequestRobots()
    }

    render (){

        const {searchField, onSearchChange, robots, isPending } = this.props;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return isPending ?
             <h1>Loading</h1> :
             (
                <div className='tc'>
                   <Header />
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <CarList robots={filterRobots}/>
                    </Scroll>
                </div>
            );
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);