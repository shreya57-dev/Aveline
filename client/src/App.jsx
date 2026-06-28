import {BrowserRouter,Routes,Route} from "react-router-dom";
import AboutPath from "./pages/AboutPath/AboutPath";
import Dashboard from "./pages/Dashboard/Dashboard";
import Landing from "./pages/Landing/Landing";
import Lesson from "./pages/Lesson/Lesson";
import Login from "./pages/Login/Login";
import PracticeDetails from "./pages/PracticeDetails/PracticeDetails";
import PracticePaths from "./pages/PracticePaths/PracticePaths";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Saved from "./pages/Saved/Saved";

function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={<Landing />} />
      
        <Route path="/practice-paths"
          element={<PracticePaths />} />

        <Route path="/practice/:slug"
          element={<PracticeDetails />} />
      
        <Route path="/practice/:id"
          element={<PracticeDetails />} />
      
        <Route path="/practice/:id/about"
          element={<AboutPath />} />
      
        <Route path="/lesson/:id"
          element={<Lesson />} />
      
        <Route path="/dashboard/:id"
          element={<Dashboard />} />
      
        <Route path="/saved/:id"
          element={<Saved />} />
      
        <Route path="/register"
          element={<Register />} />

        <Route path="/login"
          element={<Login />} />

        <Route path="/profile/:id"
          element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}


export default App;