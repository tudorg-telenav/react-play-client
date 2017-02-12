import React from 'react';

var navStyle = {
  position: "fixed",
  height: "100%",
  width: 60,
  fontSize: 11,
  letterSpacing: 2,
  background: "#fff",
  overflow: "hidden",
  top: 0,
  left: 0,
  zIndex: 2
};

// var divStyle = {
//     position: "relative",
//     top: 255
// };

// var ulStyle = {
//     position: "relative",
//     width: 1000
// };

class NavigationBar extends React.Component {

    render() {
        return (
            <nav style={navStyle}>
              <div>
                <ul>
                </ul>
              </div>
            </nav>
        );
    }
}

export default NavigationBar;