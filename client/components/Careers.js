import React from 'react';
import CareerItem from './CareerItem';

const Careers = (props) => {

  const getStyles = () => {

    return {

      div: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }

    };
  };

  const styles = getStyles();

  var children = [];
  if (props.data !== null) {
    for (var i = 0; i < props.data.length; i++) {
      children.push(<CareerItem name={props.data[i].name} key={props.data[i].id} id={props.data[i].id} />)
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