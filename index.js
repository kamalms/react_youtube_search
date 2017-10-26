import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
//create a component that produce the HTML 
import YTSearch from 'youtube-api-search';
const API_KEY = "AIzaSyCYfho2k6rufNpbNcta0fqdqlf7Y7jNPA0";



// const App = function(){
//     return (
//         <div>
//         <SearchBar />
//     </div>
//     );
// }

class App extends Component {

    constructor(props){
        super(props);
        
        this.state ={ videos: [] };

        YTSearch({key:API_KEY, term:'raman'}, (data) => {
    //console.log("youtube data",data);

        this.setState({ videos  : data})
});

    }
    render(){
              return (
        <div>
        <SearchBar />
        <VideoList videos={ this.state.videos} />
    </div>
    );
    }
}

//put created html i mean component into the Document (in the DOM) 

ReactDom.render(<App />, document.querySelector('.container'));

