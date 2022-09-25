import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
