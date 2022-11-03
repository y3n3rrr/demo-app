import React, { Component } from 'react'
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from '../components/search_bar';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
const API_KEY = 'AIzaSyCRhYT4UkK2gtzgiMdqVKO2U8VvRIzPAIo';

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
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); //Same as this.setState({ videos : videos })
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <Container>
      <Row>
<div>
        <h5>Youtube Search:</h5><SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>    </Row>
      </Container>
    )
  }
}
