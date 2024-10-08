import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <ItemListContainer welcomeMessage="¡Bienvenido a nuestra tienda!" />
    </div>
  );
};

export default App;


