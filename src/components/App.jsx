import React from 'react';
import YoutubeService from '../services/YoutubeService';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount(){
        this.termOnSubmit("React Fundamentals");
    }

    termOnSubmit = async (term) => {
        const response = await YoutubeService.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ 
            videos: response.data.items ,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container mt-3">
                <SearchBar formOnSubmit={this.termOnSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;