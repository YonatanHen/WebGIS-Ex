import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            streets:true,
            satellite:false,
            light: false,
            dark: false,
            outdoors: false
        }
        this.handleCheck=this.handleCheck.bind(this);
    }

    handleCheck(e){
        for(const [key, value] of Object.entries(this.state))
        {
            e.target.value==key? this.setState({[key]:true}) : this.setState({[key]:false})
        }
        
    }
  render() {
    return (
        <>
            <div id="menu">
                <input id="streets-v11" type="radio" name="rtoggle" value="streets" checked={this.state.streets} onClick={this.handleCheck}/>
                <label for="streets-v11">streets</label>
                <input id="satellite-v9" type="radio" name="rtoggle" value="satellite" checked={this.state.satellite} onClick={this.handleCheck}/>
                <label for="satellite-v9">satellite</label>
                <input id="light-v10" type="radio" name="rtoggle" value="light" checked={this.state.light} onClick={this.handleCheck}/>
                <label for="light-v10">light</label>
                <input id="dark-v10" type="radio" name="rtoggle" value="dark" checked={this.state.dark} onClick={this.handleCheck}/>
                <label for="dark-v10">dark</label>
                <input id="outdoors-v11" type="radio" name="rtoggle" value="outdoors" checked={this.state.outdoors} onClick={this.handleCheck}/>
                <label for="outdoors-v11">outdoors</label>
            </div>
    </>
    )
  }
}

export default Menu;

