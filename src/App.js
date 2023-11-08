import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeaderComponent from "./component/HeaderComponent";
import { Route, Routes } from 'react-router-dom';
import route from './route';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <Routes>
          {
            route.map((element, index) => {
              return (
                <Route path = {element.path} element = {element.element} key={index}/>
              )
            })
          }
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
