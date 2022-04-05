import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import ShowDashboard from './Components/Dashboard/ShowDashboard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NothingFound from './Components/NothingFound/NothingFound';
import Reviews from './Components/Reviews/Reviews';


function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<ShowDashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NothingFound />} />
      </Routes>
    </div>
  );
}

export default App;
