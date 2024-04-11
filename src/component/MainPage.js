import Navbar from './Navbar.js';
import StoryPage from './StoryPage.js';
import Post from './Post.js';
import MainSide from './MainSide.js';

function MainPage() {

    return (
      <div className='main'>
        <Navbar />
        <div className='body'>
          <StoryPage />
          <Post />
          <MainSide />
        </div>
      </div>
  
    );
  }
   
  export default MainPage;