
import NavBar from './NavBar.js'
import React from 'react'
import FindAHang from './FindAHang.js'
import MyHangs from './MyHangs.js'
import Karma from './Karma.js'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Route>
        <Karma />
      </Route>
      <Route>
        <FindAHang />
      </Route>
      <Route>
        <MyHangs />
      </Route>


    </div>
  );
}

export default App
