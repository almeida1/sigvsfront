import React, { useState } from "react";
import { cadastroDeProduto } from "../ProdutoServico";
import { useNavigate } from "react-router-dom";
const CadastrarProduto = () => {
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidadeNoEstoque, setQuantidade] = useState("");
  const [custo, setCusto] = useState("");
  const navigator = useNavigate();
  function manipulaDescricao(e) {
    setDescricao(e.target.value);
  }
  function manipulaCategoria(e) {
    setCategoria(e.target.value);
  }
  function manipulaQuantidade(e) {
    setQuantidade(e.target.value);
  }
  function manipulaCusto(e) {
    setCusto(e.target.value);
  }
  function saveProduto(e) {
    e.preventDefault();
    const produto = { descricao, categoria, quantidadeNoEstoque, custo };
    console.log(produto);
    cadastroDeProduto(produto).then((response) => {
      console.log(response.data);
      navigator("/produtos");
    });
  }
  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card">
          <h2 className="text-center"> Cadastrar Produto</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label"> Descrição:</label>
                <input
                  type="text"
                  placeholder="Entre com a descrição do produto"
                  name="descricao"
                  value={descricao}
                  className="form-control"
                  onChange={manipulaDescricao}
                ></input>
              </div>
              <div className="form-group mb-2">
                <label className="form-label"> Categoria:</label>
                <input
                  type="text"
                  placeholder="Entre com a categoria a qual o produto pertence"
                  name="categoria"
                  value={categoria}
                  className="form-control"
                  onChange={manipulaCategoria}
                ></input>
              </div>
              <div className="form-group mb-2">
                <label className="form-label"> Quantidade:</label>
                <input
                  type="text"
                  placeholder="Entre com a quantidade armazenada no estoque do produto"
                  name="quantidadeNoEstoque"
                  value={quantidadeNoEstoque}
                  className="form-control"
                  onChange={manipulaQuantidade}
                ></input>
              </div>
              <div className="form-group mb-2">
                <label className="form-label"> Custo:</label>
                <input
                  type="text"
                  placeholder="Entre com o custo do produto"
                  name="custo"
                  value={custo}
                  className="form-control"
                  onChange={manipulaCusto}
                ></input>
              </div>
              <button className="btn btn-success" onClick={saveProduto}>
                Submit{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CadastrarProduto;
