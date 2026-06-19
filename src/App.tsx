import './style/App.scss'
import TheHeader from './layout/TheHeader'
import TheFooter from './layout/TheFooter'
import TheMain from './layout/TheMain'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TheExercice1 from './pages/TheExercice1'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={TheLayout()} >
          <Route path="/exercice1" element={<TheExercice1 />} />
        </Route>
      </Routes >
    </BrowserRouter >
  )
}

const TheLayout = () => {
  return (
    <div className='flex-between flex-column fill-height'>
      <TheHeader />
      <TheMain />
      <TheFooter />
    </div>
  )
}


export default App
