import React from 'react';

import Reorder, {
    reorder,
    reorderImmutable,
    reorderFromTo,
    reorderFromToImmutable
  } from 'react-reorder';

class OrderPhotos extends React.Component {

    render(){
        return(
            <div>
                <h3 className="ui header">Order Photos</h3>
                <p>Click, hold and drag to change order.</p>
                <div>
                    <Reorder
                        reorderId="my-list" // Unique ID that is used internally to track this list (required)
                        //reorderGroup="reorder-group" // A group ID that allows items to be dragged between lists of the same group (optional)
                        //getRef={this.storeRef.bind(this)} // Function that is passed a reference to the root node when mounted (optional)
                        component="div" // Tag name or Component to be used for the wrapping element (optional), defaults to 'div'
                        placeholderClassName="placeholder" // Class name to be applied to placeholder elements (optional), defaults to 'placeholder'
                        draggedClassName="dragged" // Class name to be applied to dragged elements (optional), defaults to 'dragged'
                        lock="horizontal" // Lock the dragging direction (optional): vertical, horizontal (do not use with groups)
                        holdTime={500} // Default hold time before dragging begins (mouse & touch) (optional), defaults to 0
                        touchHoldTime={500} // Hold time before dragging begins on touch devices (optional), defaults to holdTime
                        mouseHoldTime={200} // Hold time before dragging begins with mouse (optional), defaults to holdTime
                        onReorder={this.props.onReorder} // Callback when an item is dropped (you will need this to update your state)
                        autoScroll={true} // Enable auto-scrolling when the pointer is close to the edge of the Reorder component (optional), defaults to true
                        disabled={false} // Disable reordering (optional), defaults to false
                        disableContextMenus={true} // Disable context menus when holding on touch devices (optional), defaults to true
                        placeholder={
                            <div className="custom-placeholder" /> // Custom placeholder element (optional), defaults to clone of dragged element
                        }
                    >
                    {
                        this.props.photos.map((photo) => (
                            <div key={photo.value} className="ui segment">
                                <div className="ui two column grid">
                                    <div className="column">
                                        <img  className="ui image" src={`\\Photos\\${photo.url}`} style={{height:"100px"}} ></img>
                                    </div>
                                    <div className="right aligned column">  
                                        <button className="ui button" onClick={() => this.props.onPhotoDelete(photo)} >DELETE PHOTO</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </Reorder>
                </div>
            </div>
        );
    }
}

export default OrderPhotos;