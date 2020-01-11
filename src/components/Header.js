import React, { PureComponent} from 'react';
import CounterButton from "./CounterButton";

class Header extends PureComponent{
    //shouldComponentUpdate(nextProps, nextState) {
     //  return false;
   // }

    render() {
        return (
            <div>
                <CounterButton color={'red'} />
                <h1 className="h1">RoboFriends</h1>
            </div>

        )
    }
}

export default Header;