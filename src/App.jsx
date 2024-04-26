  import { useState } from 'react'
  import { Provider } from 'react-redux'
  import { store } from './app/store'
import MainComponent from './components/MainComponent'


  function App() {

    return (
      <> 
      <Provider store={store  }>
        <MainComponent />
      </Provider>
      </>
    )
  }

  export default App
