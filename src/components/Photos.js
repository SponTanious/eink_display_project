import React from 'react';
import OrderPhotos from './OrderPhotos';
import UploadPhoto from './UploadPhoto';
import Reorder, {
    reorder,
    reorderImmutable,
    reorderFromTo,
    reorderFromToImmutable
  } from 'react-reorder';

class Photos extends React.Component {
    state = {OrderedPhotos:[]};

    componentDidMount(){
        this.getOrderedPhotos();
    }

    getOrderedPhotos = () => {
        fetch('/api/get_ordered_photos').then(res => res.json()).then(data => { this.setState({OrderedPhotos:data.photos}) });
    }

    onPhotoDelete = (photo) => {
        console.log(photo)
        //POST NEW ORDER TO API
        fetch("/api/delete_photo", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(photo)
            }).then().then(this.getOrderedPhotos())
    }

    onReorder = (event, previousIndex, nextIndex, fromId, toId) => {
        
        this.setState({
            OrderedPhotos: reorder(this.state.OrderedPhotos, previousIndex, nextIndex)
        });

        //POST NEW ORDER TO API
        fetch("/api/give_ordered_photos", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.OrderedPhotos)
            }).then()
    }

    render(){
        return(
            <div>
                <h2 className="ui header">PHOTOS</h2>
                <div className="ui divider"></div>
                <UploadPhoto/>
                <div className="ui hidden divider"></div>
                <OrderPhotos photos={this.state.OrderedPhotos} onPhotoDelete={this.onPhotoDelete} onReorder={this.onReorder}/>
            </div>
        )
    }
}

export default Photos;