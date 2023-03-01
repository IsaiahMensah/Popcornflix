import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import MainPage from "./components/mainpage/MainPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Homepage from "./components/Homepage";
import Trendingpage from "./components/pages/Trendingpage";
import Movies from "./components/pages/Movies";
import Series from "./components/pages/Series";
import NewRelease from "./components/pages/NewRelease";
import Category from "./components/pages/Category";
import Settings from "./components/pages/Settings";
import MainArea from "./components/pages/mainarea/MainArea";

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<MainArea />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/new_release" element={<NewRelease />} />
            <Route path="/category" element={<Category />} />
            <Route path="/trending" element={<Trendingpage />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
