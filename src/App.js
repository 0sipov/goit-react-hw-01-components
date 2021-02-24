import './App.css';
import Profile from './components/Profile/Profile';
import userData from './user.json';
import statisticalData from './statistical-data.json';
import Statistics from './components/Statistics/Statistics';

function App() {
  return (
    <>
      <Profile props={userData} />
      <Statistics title="Upload Stats" stats={statisticalData} />
    </>
  );
}

export default App;
