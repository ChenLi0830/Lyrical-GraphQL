import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';


class SongCreate extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
    };
  }
  
  onSubmit(event){
    event.preventDefault();
    console.log(this.props);
    
    this.props.mutate({
      variables: {
        title: this.state.title,
      }
    });
  }
  
  render(){
    return <div>
      <h3>Create a new song</h3>
      <form onSubmit={() => this.onSubmit(event)}>
        <label>Song Title:</label>
        <input value={this.state.title}
               onChange={event => this.setState({title: event.target.value})}
        />
      </form>
      
    </div>
  }
}

const mutation = gql`
  mutation AddSong($title: String){
  addSong(title:$title){
    id,
    title,
  }
}
`;

export default graphql(mutation)(SongCreate);