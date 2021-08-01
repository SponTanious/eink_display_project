import React from 'react';

class PropertiesPhotos extends React.Component {

    onFrameRateChange = () => {
        this.props.onFrameRateChange(document.getElementById('frameRate').value);
    }

    render(){
        return(
            <div>
                <h3 className="ui header">Photo Properties</h3>
                <form className="ui form">
                    <div className="field">
                        <label>Time Between Images</label>
                        <input type="number" required id="frameRate" name="price" min="3" max="30" value={this.props.frameRate} step="0.01" onChange={this.onFrameRateChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default PropertiesPhotos;