import React, { Component } from 'react'
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from '../components/search-youtube/search_bar';
import VideoList from '../components/search-youtube/video_list';
import VideoDetail from '../components/search-youtube/video_detail';

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const API_KEY = 'AIzaSyAxgXlM2DoFpvSH_y_LcAXgpCh3g-P7M0w';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('react js');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      console.log('term, response', term, videos)
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); 
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 400);
    return (
      <Container>
        <Row>
          <div>
            <h5>Youtube Search:</h5>    <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo} />
             <VideoList
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
              videos={this.state.videos}
            /> 
          </div>
        </Row>
      </Container>
    )
  }
}
