import './App.css';
import UserProvider from './contexts/UserProvider';
import Users from './components/Users';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Users />
      </div>
    </UserProvider>
  );
}

export default App;
