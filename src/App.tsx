
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ListDetail from "./pages/ListDetail";

function App() {
  return (
    <div className="flex flex-col w-full p-2 md:px-20">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list-detail-view" element={<ListDetail />} />
      </Routes>
    </div>
  );
}

export default App;
