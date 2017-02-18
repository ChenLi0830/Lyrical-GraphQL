import React, {Component} from 'react';
import query from '../queries/fetchSongs';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import gql from 'graphql-tag';

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
      },
      refetchQueries: [{query: query}]
    })
        .then(() => this.props.router.push("/"))
  }
  
  render(){
    return <div>
      <Link to="/">Back</Link>
      <h3>Create a new song</h3>
      <form onSubmit={(event) => this.onSubmit(event)}>
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