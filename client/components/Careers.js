import React from 'react';
import Radium from 'radium';



const Careers = (props) => {

  const getStyles = () => {

    return {

      div: {
        width: '100%'
      }

    };
  };

  const styles = getStyles();

  var children = [];
  if (props.data !== null) {
    for (var i = 0; i < props.data.length; i++) {
      children.push(<div key={props.data[i].id}>{props.data[i].name}</div>)
    }
  }

  return (

    <div style={styles.div}>
      <h2>Careers !!!</h2>
      {children}
    </div>
  );

};

export default Careers;