import React from 'react';
import Radium from 'radium';



const Press = () => {

  const getStyles = () => {

    return {

      div: {
        width: '100%'
      }

    };
  };

  const styles = getStyles();

  return (
    <div style={styles.div}>
      Press !!!
    </div>
  );

};

export default Press;