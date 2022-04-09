import { useSelector, useDispatch } from 'react-redux';
import { getUser } from "./redux/ducks/user";
import './App.css';
import Count from './components/Count';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const user = useSelector((state) => state.user.user);
  console.log(user);
  const count = useSelector(state => state.counter.count)

  return (
    <div className="App">
      <h1>Redux Saga</h1>
      {user && (
        <div className='user-container'>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
      <h3>Count: {count} </h3>
      <Count />
    </div>
  );
}

export default App;
