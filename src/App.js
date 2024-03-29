
import './App.css';
import CartContainer from './Components/CartContainer';
import { useGlobalContext } from './context';
import Navbar from './Components/Navbar';

function App() {

  const{loading} = useGlobalContext()
  if (loading){
    return (
      <div className='loading'>
        <h2>Loading...</h2>
      </div>
    )
  }
  return (
    <>
      <Navbar />
      <CartContainer />
    </>
    
  );
}

export default App;
