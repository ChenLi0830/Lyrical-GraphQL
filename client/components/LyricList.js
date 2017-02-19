import React, {Component} from 'react';

class LyricList extends Component {
  render() {
    const lyricList = this.props.lyrics.map(({id, content}) => (
        <li key={id} className="collection-item">
          {content}
        </li>
    ));
    
    return <ul className="collection">
      {lyricList}
    </ul>
  }
}

export default LyricList;
