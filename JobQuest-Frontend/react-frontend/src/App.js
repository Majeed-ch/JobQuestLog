import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ListJobComponent from "./components/listJobComponent";
import AddApplicationComponent from './components/addApplicationComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path= "/applications" Component={ListJobComponent}></Route>
          <Route path= "/new-application" Component={AddApplicationComponent}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
