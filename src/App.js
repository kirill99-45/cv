import { useState, useEffect } from 'react';
import RightSide from './Components/Right-side/right-side.js'
import LeftSide from './Components/Left-side/left-side.js'
import './App.css';

const App = ({ leftSide, rightSide }) => {

  const [moreInfoState, setMoreInfoState] = useState('right-side__wrapper hidden')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <LeftSide
        leftSide={leftSide}
        moreInfoState={moreInfoState}
        setMoreInfoState={setMoreInfoState}
      />
      <RightSide
        rightSide={rightSide}
        moreInfoState={moreInfoState}
      />
    </main>
  )
}

export default App;
