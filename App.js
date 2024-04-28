import './App.css';
import Header from './components/header'
import FileView from './components/fileView'
import QueryPage from './components/queryPage';


function App() {
  return (
    <div className="App">
      <div className="item query-container">
        <QueryPage />
      </div>

      <div className="item file-view">
        <FileView />
      </div>


    </div>
  );
}

export default App;
