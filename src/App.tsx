
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ListDetail from "./pages/ListDetail";
import { useAppSelector } from "store/hooks";


function App() {
  const{isDark}=useAppSelector(state =>state.tracking)
  console.log({isDark})
  return (
    <div className={`flex flex-col w-full p-2 md:px-20 ${ isDark ? "bg-[#474747]" : "bg-[#D6F3E7]"}`}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list-detail-view" element={<ListDetail />} />
      </Routes>
    </div>
  );
}

export default App;
