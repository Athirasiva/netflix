import './App.css';
import Banner from './Components/Banner';
import NavigationBar from './Components/NavigationBar';
import requests from './requests';

function App() {
  return (
    <div>
      <NavigationBar />
      <Banner fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
