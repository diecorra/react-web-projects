import Cart from './components/Cart';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import TotalBox from './components/TotalBox';
import { useGlobalContext } from './context/context';

function App() {
  const { isLoading, products } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="App">
        <Navbar />
        <div className="center-item">
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      {products.length > 0 ? (
        <Cart />
      ) : (
        <div className="center-item">
          <h4>No products in cart!</h4>
        </div>
      )}
      <TotalBox />
    </div>
  );
}

export default App;
