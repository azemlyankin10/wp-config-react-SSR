import React from 'react'
import { hot } from 'react-hot-loader/root'
import './globalCss/main.scss'

const AppComponent = () => {
  return (
    <div className='app'>
      react app
    </div>
  )
}

export const App = hot(() => <AppComponent/>)

//genarete new component -> npx generate-react-cli component name