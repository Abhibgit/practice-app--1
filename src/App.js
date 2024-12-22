import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainContent from './components/Maincontent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>
      <Form/>
      <Counter/>
      <Footer/>
      
    </div>
  );
}

export default App;
