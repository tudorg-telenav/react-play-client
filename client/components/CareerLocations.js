import React from 'react';
import CareerLocationItem from './CareerLocationItem';

const CareerLocations = (props) => {

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
      children.push(<CareerLocationItem onSelect={props.onSelectItem} name={props.data[i].name} id={props.data[i].id} key={props.data[i].id} />)
    }
  }

  return (
    <div style={styles.div}>
      <h2>Career Locations</h2>
      {children}
    </div>
  );

};

export default CareerLocations;