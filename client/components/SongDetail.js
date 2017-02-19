import React from 'react';
import {graphql} from 'react-apollo';
import fetchSongQuery from '../queries/fetchSong';

const SongDetail = (props) => {
  console.log("props", props);
  if (props.data.loading) return <h3>Loading...</h3>
  return (
      <div>
        <h3>Song Detail</h3>
        {/*{props.data.song.title}*/}
        {props.data.song.title}
      </div>
  )
};

export default graphql(fetchSongQuery, {
  options: (props) => ({ variables: { id: props.params.id } }),
})(SongDetail);