import React from 'react';
import CareerLocationItem from './LocationItem';

const CareerLocations = (props) => {

  const getStyles = () => {

    return {

      div: {
        width: '70%'
      }

    };
  };

  const styles = getStyles();

  var children = [];
  if (props.data !== null) {
    for (var i = 0; i < props.data.length; i++) {
      children.push(
        <CareerLocationItem
          isSelected={props.selectedLocationId === props.data[i].id}
          onSelect={props.onSelectItem}
          name={props.data[i].name}
          id={props.data[i].id}
          key={props.data[i].id}
        />
      );
    }
  }

  return (
    <div
      style={styles.div}
    >
      <h2>Career Locations</h2>
      {children}
    </div>
  );

};

export default CareerLocations;