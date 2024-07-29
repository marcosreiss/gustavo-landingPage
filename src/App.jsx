import Header from './components/Header'
import Offer from './components/Offer'
import Pilar1 from './components/Pilar1'
import Pilar2 from './components/Pilar2'
import Pilar3 from './components/Pilar3'

function App() {

  return (
    <>
    <div className='background'></div>
    
    <Header />

    <img src='src\assets\pilares.png' className='pilares' />

    <Pilar1 />

    <Pilar2 />

    <Pilar3 />

    <Offer />
    </>
  )
}

export default App
