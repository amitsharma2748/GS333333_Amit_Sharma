import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import RouterComponent from './components/RouterComponent'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() { 

  return (
    <Provider store={store}>
     <RouterComponent/>
    </Provider>
  )
}

export default App
