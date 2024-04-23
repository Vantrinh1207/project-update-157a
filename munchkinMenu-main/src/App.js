import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Table } from './components/Table';
import { AddRecipe } from './components/AddRecipe';
import { SignUp } from './components/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route
            element={<Table />}
            path="/"
            exact

          />
          <Route
            element={<AddRecipe />}
            path="/add"
          />

          <Route
            element={<SignUp />}
            path="/signup"
          />


        </Routes>
      </Router>
    </>
  );
}

export default App;
