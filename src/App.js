import './App.css';
import Banner from './components/Banner/Banner';
import Nav from './components/navbar/Nav';
function App() {
  return (
    <div className="App">
      <div className='layer1'><Nav /></div>
      <div className='layer2'><Banner /></div>
    </div>
  );
}

export default App;
