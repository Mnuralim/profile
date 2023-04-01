import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ProfilePage from "./pages/ProfilePage";
import KemahasiswaanPage from "./pages/KemahasiswaanPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/kemahasiswaan" element={<KemahasiswaanPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
