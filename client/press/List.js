import React from 'react';
import PressItem from './Item';
import {
  Link
} from 'react-router-dom';

const Press = (props) => {

  const getStyles = () => {

    return {

      div: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      link: {
        width: '70%'
      }

    };
  };

  const styles = getStyles();

  var children = [];
  if (props.data !== null) {
    for (var i = 0; i < props.data.length; i++) {
      children.push(
        <Link
          style={styles.link}
          to={'' + props.match.url + '/' + props.data[i].id}
          key={props.data[i].id}
        >
          <PressItem
            title={props.data[i].title}
            id={props.data[i].id}
          />
        </Link>
      );
    }
  }

  return (

    <div style={styles.div}>
      <h2>Press Releases</h2>
      {children}
    </div>
  );

};

export default Press;