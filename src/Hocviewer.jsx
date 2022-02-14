import React, { Component } from 'react'


const Hocviewer = Men => {

    class Hocviewer1
     extends Component {
        state = {
            viewer: 0
        };
        handleViewer = () => {
            this.setState({ viewer: this.state.viewer + 1 });
        };

        render() {
            return (

                <Men hocappname="YouTube"
                    hocviewer={this.state.viewer}
                    hochandleViewer={this.handleViewer}/>
            );
        }
    }
    return Hocviewer1;
};
export default Hocviewer;


