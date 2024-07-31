import ConsultaCatalogo from "./componentes/ConsultaCatalogo";
import CadastrarProduto from "./componentes/CadastrarProduto";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/*//http://localhost:3000 */}
          <Route path="/" element={<ConsultaCatalogo />}></Route>
          {/*//http://localhost:3000/produtos*/}
          <Route path="/produtos" element={<ConsultaCatalogo />}></Route>
          {/*//http://localhost:3000/cad-produto*/}
          <Route path="/cad-produto" element={<CadastrarProduto />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
