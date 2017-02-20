import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class LyricList extends Component {
  
  onLike(id){
    // console.log(`id ${id} is liked`);
    this.props.mutate({
      variables:{
        id,
      }
    });
  }
  
  render() {
    const lyricList = this.props.lyrics.map(({id, content, likes}) => (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i className="material-icons" onClick={()=>this.onLike(id)}>thumb_up</i>
            {likes}
          </div>
        </li>
    ));
    
    return <ul className="collection">
      {lyricList}
    </ul>
  }
}

const mutation = gql`
mutation LikeLyric($id: ID){
  likeLyric(id: $id){
    id,
    likes,
  }
}
`;

export default graphql(mutation)(LyricList);
