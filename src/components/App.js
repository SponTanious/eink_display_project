import React from 'react';

class App extends React.Component {
    state = {currentTime:0};

    componentDidMount(){
        this.searchCallBack();
    }

    searchCallBack = () =>{
        fetch('/time').then(res => res.json()).then(data => { this.setState({currentTime:data.time}) });
    }

    render(){
        return(
            <div>
                <h1>eInk Display Project</h1>
                <p>The current time is {this.state.currentTime}.</p>
            </div>
        );
    }
}

export default App;