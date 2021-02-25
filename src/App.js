import './App.css';
import userData from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';

function App() {
  return (
    <>
      <Profile props={userData} />
      <Statistics title="Upload Stats" stats={statisticalData} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
