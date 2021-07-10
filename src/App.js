import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';

//when we login we push the data into data layer and can access inside any component
function App() {
  //[state, dispatch]
  const [{user}, dispatch] = useStateValue();
  console.log('useStateValue', useStateValue)
  console.log('user',user)
  return (
    <div className="app">
      {!user ? <Login /> : (
        <>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )
      }

    </div>
  );
}

export default App;
