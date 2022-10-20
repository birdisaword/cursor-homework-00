
import './App.css';
import Post from './post.js';
import Photo from './photo.png';
import Image from './image.png';

const PROFILE_IMAGE = Photo;
const CONTENT_IMAGE = Image;

const post = {
 author: {
   photo: PROFILE_IMAGE,
   name: 'Annoying Orange',
   nickname: "@annoying_orange"
  },
  date: new Date(),
  content: 'Hanging with my buddies and some other text to check the styles',
  image: CONTENT_IMAGE,
};

function App() {
  return (
  <div className="App">
    <Post author={post.author}
          photo={post.photo}
          nickname={post.nickname}
          name={post.name}
          date={post.date}
          content={post.content}
          image={post.image} 
    />
  </div>
  );
}

export default App;
