import React from "react";
import Header from "../Header";
import CollectItems from "./CollectItems";
import Field from "./Field";
import Legend from "./Legend";
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
          <Legend title="Dados" />
          <Field name="name" title="Nome da Entidade" type="text" />
          <div className="field-group">
            <Field name="email" title="E-mail" type="email" />
            <Field name="whatsapp" title="Whatsapp" type="text" />
          </div>
        </fieldset>

        <fieldset>
          <Legend title="Endereço" details="Selecione o endereço no mapa" />
          <div className="field-group">
            <Field name="uf" title="Estado (UF)" type="select" values={uf} />
            <Field name="cidade" title="Cidade" type="select" values={uf} />
          </div>
        </fieldset>

        <fieldset>
          <Legend
            title="Itens de coleta"
            details="Selecione um ou mais itens abaixo"
          />
          <CollectItems />
        </fieldset>
        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
