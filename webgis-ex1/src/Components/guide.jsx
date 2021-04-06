import React from 'react';

class Guide extends React.Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
        <>
        <div class="guide-box">
            <h5>User Guide:</h5>
            <p style={{fontSize:'100%'}}>
              <b>Traveling on the map:</b> hold the left mouse button,
              then drag the mouse to the desired location and release.<br/>
              <b>Change map angle:</b> hold the right mouse button,
              then drag the mouse to the desired angle.<br/>
              <b>Zoom in/out:</b> use the middle mouse button pulley to scroll in/out accordingly.<br/>
              <b>Enter full screen:</b> Press on the button with the arrows on the top right of the screen, to shrink the
              map enter this button again when you are on full screen mode.<br/>
              {this.props.guidance}
            </p>
        </div>
    </>
    )
  }
}

export default Guide;

