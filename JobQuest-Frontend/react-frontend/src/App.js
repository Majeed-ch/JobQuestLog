import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ListJobComponent from "./components/listJobComponent";
import AddApplicationComponent from './components/addApplicationComponent';
import ViewApplicationComponent from './components/viewApplicationComponent';
import UpdateApplicationComponent from "./components/UpdateApplicationComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route exact path= "/" Component={ListJobComponent}></Route>
          <Route path= "/applications" Component={ListJobComponent}></Route>
          <Route path= "/new-application" Component={AddApplicationComponent}></Route>
          <Route path= "/applications/:id" Component={ViewApplicationComponent}></Route>
          <Route path="/applications/:id/edit" element={<UpdateApplicationComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
