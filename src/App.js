import { useState } from 'react';
import RightSide from './Components/Right-side/right-side.js'
import LeftSide from './Components/Left-side/left-side.js'
import LargePhoto from './Components/Large-photo/large-photo.js'
import './App.css';

const App = (props) => {

  const [layoutState, setLayoutState] = useState({ className : 'layout-hidden', data : null })

  return (
    <main>
      <LeftSide />
      <RightSide setLayoutState={setLayoutState} slider={props.slider}/>
      <LargePhoto layoutState={layoutState} setLayoutState={setLayoutState}/>
    </main>
  )
}

export default App;
