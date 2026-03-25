import FriendList from "./components/FriendList"
import FormAddFriend from './components/FormAddFriend';
import Button from './components/Button';

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
    </div>
  )
}

export default App