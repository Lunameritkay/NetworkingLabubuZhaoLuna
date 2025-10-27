import ImageGallery from './components/ImageGallery'
import Introduction from './components/Introduction'
import Comment from './components/Comment'
import ImageWall from './components/ImageWall'


import './App.css'

function App() {

  return (
      <div className='wrapper'>
        <div className='detail'>
          <ImageGallery />
          <Introduction />
        </div>
        <div className='comment'><Comment /></div>
        <div className='imageWall'><ImageWall /></div>
      </div>
  )
}

export default App
