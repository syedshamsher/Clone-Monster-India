import logo from './logo.svg';
import './App.css';
import JobSearch from './Pages/JobSearch/JobSearch';
import {MainPageSearch} from "./Components/MainPageSearch"

function App() {
  return (
    <div style = {{backgroundColor: "lightgray", margin: "none"}} >
      <JobSearch />
      <MainPageSearch/>
    </div>
  );
}

export default App;
