import './App.css';
import Header from './component/Header';
import TinderCards from './component/TinderCards';
import SwipeButtons from './component/SwipeButtons';
import Loading from './component/common/Loading';

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
      <Loading />
    </div>
  );
}

export default App;
