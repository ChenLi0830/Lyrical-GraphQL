import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class LyricCreate extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: "",
    };
  }
  
  onSubmit(event){
    event.preventDefault();
    console.log(this.props.songId, this.state.content);
    this.props.mutate({
      variables: {
        songId: this.props.songId,
        content: this.state.content,
      }
    });
    this.setState({content: ""});
  }
  
  render(){
    return (
        <form onSubmit={(event)=>{this.onSubmit(event)}}>
          <label>Add a lyric</label>
          <input value = {this.state.content}
                 onChange={(event)=>this.setState({content: event.target.value})}/>
        </form>
    )
  }
}

const mutation = gql`
mutation AddLyric($songId: ID, $content:String){
  addLyricToSong(songId: $songId, content: $content){
    title,
    lyrics{
      content,
      likes
    }
  }
}
`;

export default graphql(mutation)(LyricCreate);
