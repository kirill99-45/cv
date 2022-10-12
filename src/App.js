import { useState } from 'react';
import { RightSide } from './Components/Right-side/right-side.js'
import { LeftSide } from './Components/Left-side/left-side.js'
import './App.css';

const App = ({ leftSide, rightSide }) => {

  const [moreInfoState, setMoreInfoState] = useState('right-side__wrapper hidden')

  const [aboutRef, setAboutRef] = useState(null)

  return (
    <main>
      <LeftSide
        leftSide={leftSide}
        moreInfoState={moreInfoState}
        setMoreInfoState={setMoreInfoState}
        aboutRef={aboutRef}
      />
      <RightSide
        rightSide={rightSide}
        moreInfoState={moreInfoState}
        setAboutRef={setAboutRef}
      />
    </main>
  )
}

export default App;
