import Pizza from './components/Pizza';
import Hotdogs from './components/Hotdogs';
import Pizza from './components/Nuggets';
import Hotdogs from './components/Candy';
function App() {
  return (
    <div>
      <h1>Food Tracker</h1>
      <Pizza/>
      <Hotdogs/>
	  <Nuggets/>
      <Candy/>
    </div>
  );
}

export default App;
