import React from 'react';
import Photos from './Photos';

class App extends React.Component {

    render(){
        return(
            <div className="ui text container ">
                <div className="ui padded segment">
                    <h1 className="ui header">eInk Display Project</h1>
                    <div className="ui horizontal divider">William & Brynlea</div>
                    <p className="ui paragraph">Love you guys I hope you enjoy this gift.</p>
                    <Photos/>
                </div>
            </div>
        );
    }
}

export default App;