import React from "react";
import Header from "../Header";
import Field from "./Field";
import "./style.css";

const CreatePoint = () => {
  const uf = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  return (
    <div id="page-create-point">
      <div className="content">
        <Header />
      </div>

      <form>
        <h1>
          Cadastro do <br />
          campo de coleta
        </h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <Field name="name" desc="Nome da Entidade" type="text" />
          <div className="field-group">
            <Field name="email" desc="E-mail" type="email" />
            <Field name="whatsapp" desc="Whatsapp" type="text" />
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <div className="field-group">
            <Field name="uf" desc="Estado (UF)" type="select" values={uf} />
            <Field name="cidade" desc="Cidade" type="select" values={uf} />
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens de coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>
          <ul className="items-grid">
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste" />
              <span></span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste" />
              <span></span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste" />
              <span></span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste" />
              <span></span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste" />
              <span></span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste" />
              <span></span>
            </li>
          </ul>
        </fieldset>
        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
