import React from 'react';

class UploadPhoto extends React.Component {
    onFormSubmit = (event) => {
        //event.preventDefault();
    }

    render(){
        return(
            <div>
                <h3 className="ui header">Upload Photos</h3>
                <form  onSubmit={this.onFormSubmit} className="ui form" method="POST" action="/api/upload_photo" encType="multipart/form-data">
                    <input type="file" name="file" accept="image/*"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default UploadPhoto;