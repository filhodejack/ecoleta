import React, { ChangeEventHandler, useEffect, useState } from "react";
import Field from "./Field";
import axios from "axios";

export type Estado = {
  sigla: string;
};

export type Municipio = {
  nome: string;
};

const CityAndState = (props: {
  selectedState: string;
  handleSelectUf: ChangeEventHandler;
  handleSelectCity: ChangeEventHandler;
}) => {
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const ibgeBaseUrl = "https://servicodados.ibge.gov.br/api/v1/localidades";
  const ibgeEstadosUrl = `${ibgeBaseUrl}/estados`;
  const ibgeMunicipiosUrl = `${ibgeBaseUrl}/estados/${props.selectedState}/municipios`;
  const ibgeConfig = { params: { orderBy: "nome" } };

  useEffect(() => {
    axios.get<Estado[]>(ibgeEstadosUrl, ibgeConfig).then((resp) => {
      const ufs = resp.data.map((estado) => estado.sigla);
      setStates(ufs);
    });
  }, []);

  useEffect(() => {
    if (props.selectedState === "") {
      return;
    }

    axios.get<Municipio[]>(ibgeMunicipiosUrl, ibgeConfig).then((resp) => {
      const cityNames = resp.data.map((city) => city.nome);
      setCities(cityNames);
    });
  }, [props.selectedState]);

  return (
    <div className="field-group">
      <Field
        name="uf"
        onChange={props.handleSelectUf}
        options={states}
        title="Estado (UF)"
        type="select"
      />
      <Field
        name="cidade"
        onChange={props.handleSelectCity}
        options={cities}
        title="Cidade"
        type="select"
      />
    </div>
  );
};

export default CityAndState;
