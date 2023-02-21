import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Profile from "./pages/profile/Profile";
import New from "./pages/new/New";
import Edit from "./pages/edit/Edit";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);


  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
    
          <Route path="/" elemnt={Login}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path="/users/test/:id" element={<Single />} />

              <Route
                path="edit"
                element={<Edit inputs={userInputs} title="Agregar nuevo administrador" />}
              />
              <Route
                path="edit/:id"
                element={<New inputs={userInputs} title="Editar Usuario" />}
              />
              
            </Route>
            
          </Route>
    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


