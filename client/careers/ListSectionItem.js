import React from 'react';

const CareersListSectionItem = (props) => {

  const handleClick = () => {
    props.onSelect(props.id);
  };

  return (
    <button
      onClick={handleClick}
      key={props.id}
    >
      {props.title}
    </button>
  );

};

export default CareersListSectionItem;