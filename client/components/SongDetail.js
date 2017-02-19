import React from 'react';

const SongDetail = (props) => {
  console.log("props", props);
  return (
      <div>
        <h3>Song Detail</h3>
        {props.params.id}
      </div>
  )
};

export default SongDetail;