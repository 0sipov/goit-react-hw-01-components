import './App.css';
import Profile from './components/Profile/Profile';
import userData from './user.json';

function App() {
  return <Profile props={userData} />;
}

export default App;
