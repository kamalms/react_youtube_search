import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
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
        
        this.state ={ 
            videos: [],
            selectedVideo :null};

       this.videoSearch();

    }
    render(){
              return (
        <div>
        <SearchBar onSearchTermChange = { data => this.videoSearch(data) } />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
         onVideoSelect = {
             selectedVideo11 =>
              {
             console.log('testing onVideoSelect last');
             this.setState({ 
             selectedVideo : selectedVideo11
             })

             }
           
        }
         videos={ this.state.videos} />
    </div>
    );
    }


    videoSearch(term){

        console.log('yes right' , term);

             YTSearch({key:API_KEY, term:term}, (data) => {
    //console.log("youtube data",data);

        this.setState({
             videos  : data,
             selectedVideo:data[0]
            })
});

    }

      
 selectedVideo ()
             {
             console.log('testing onVideoSelect');
             this.setState({ 
             selectedVideo : selectedVideo
             })

             }
}

//put created html i mean component into the Document (in the DOM) 

ReactDom.render(<App />, document.querySelector('.container'));

