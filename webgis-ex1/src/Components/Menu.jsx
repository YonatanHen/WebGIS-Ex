import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
        <>
            <div id="menu">
            <input id="satellite-v9" type="radio" name="rtoggle" value="satellite" checked="checked"/>
            <label for="satellite-v9">satellite</label>
            <input id="light-v10" type="radio" name="rtoggle" value="light"/>
            <label for="light-v10">light</label>
            <input id="dark-v10" type="radio" name="rtoggle" value="dark"/>
            <label for="dark-v10">dark</label>
            <input id="streets-v11" type="radio" name="rtoggle" value="streets"/>
            <label for="streets-v11">streets</label>
            <input id="outdoors-v11" type="radio" name="rtoggle" value="outdoors"/>
            <label for="outdoors-v11">outdoors</label>
            </div>
    </>
    )
  }
}

export default Menu;

