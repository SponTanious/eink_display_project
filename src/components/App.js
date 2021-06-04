import React from 'react';
import OrderPhotos from './OrderPhotos';
import UploadPhoto from './UploadPhoto';

class App extends React.Component {
    state = {currentTime:0, OrderedPhotos:[]};

    componentDidMount(){
        this.searchCallBack();
        this.getOrderedPhotos();
    }

    searchCallBack = () =>{
        fetch('/api/time').then(res => res.json()).then(data => { this.setState({currentTime:data.time}) });
    }

    getOrderedPhotos = () => {
        fetch('/api/get_ordered_photos').then(res => res.json()).then(data => { this.setState({currentTime:data.time})  });
    }

    render(){
        return(
            <div className="ui text container ">
                <div className="ui padded segment">
                    <h1 className="ui header">eInk Display Project</h1>
                    <div className="ui horizontal divider">William & Brynlea</div>
                    <p className="ui paragraph">Love you guys I hope you enjoy this gift. <br/> The current time is {this.state.currentTime}.</p>
                    <div>
                        <h2 className="ui header">PHOTOS</h2>
                        <div className="ui divider"></div>
                        <UploadPhoto/>
                        <div className="ui hidden divider"></div>
                        <OrderPhotos photos={this.state.OrderedPhotos}/>
                    </div>
                    <h2 className="ui header">VIDEOS</h2>
                    <div className="ui divider"></div>
                </div>
            </div>
        );
    }
}

export default App;