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
            {this.props.guidance}
        </div>
    </>
    )
  }
}

export default Guide;

