import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpresaList from "./components/EmpresaList";


function App() {
  
 
  return (
    <BrowserRouter>
    <div>
      <div>
      <h1>react rodando</h1>
      <Routes>
        <Route path="/" element= {<EmpresaList/>} />
        
        
      </Routes>


      </div>
      
    </div>
  </BrowserRouter>

   
  );
}

export default App;
