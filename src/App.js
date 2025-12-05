import {BrowserRouter, Routes, Route} from "react-router-dom"
import FormPage from "./pages/FormPage";
import TicketPage from "./pages/TicketPage";
import './CSS/reset.scss';
import './CSS/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage/>}/>
        <Route path="/tcket" element={<TicketPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
