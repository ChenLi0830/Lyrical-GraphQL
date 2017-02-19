import React from 'react';
import {graphql} from 'react-apollo';
import fetchSongQuery from '../queries/fetchSong';
import {Link} from 'react-router';
import LyricCreate from './LyricCreate';

const SongDetail = (props) => {
  // props.data
  console.log("props", props);
  if (props.data.loading) return <h3>Loading...</h3>
  return (
      <div>
        <Link to="/">Back</Link>
        {/*<h3>Song Detail</h3>*/}
        <h3>{props.data.song.title}</h3>
        <LyricCreate songId={props.data.song.id}/>
      </div>
  )
};

export default graphql(fetchSongQuery, {
  options: (props) => ({ variables: { id: props.params.id } }),
})(SongDetail);