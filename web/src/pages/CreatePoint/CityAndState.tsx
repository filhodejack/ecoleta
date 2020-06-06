import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import Field from "./Field";

type Estado = {
  sigla: string;
};

type Municipio = {
  nome: string;
};

const CityAndState = () => {
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const initialState = "";
  const initialCity = "";
  const [selectedState, setSelectedState] = useState(initialState);
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const ibgeBaseUrl = "https://servicodados.ibge.gov.br/api/v1/localidades";
  const ibgeEstadosUrl = `${ibgeBaseUrl}/estados`;
  const ibgeMunicipiosUrl = `${ibgeBaseUrl}/estados/${selectedState}/municipios`;
  const ibgeConfig = { params: { orderBy: "nome" } };

  useEffect(() => {
    axios.get<Estado[]>(ibgeEstadosUrl, ibgeConfig).then((resp) => {
      const ufs = resp.data.map((estado) => estado.sigla);
      setStates(ufs);
    });
  }, []);

  useEffect(() => {
    if (selectedState === initialState) {
      return;
    }

    axios.get<Municipio[]>(ibgeMunicipiosUrl, ibgeConfig).then((resp) => {
      const cityNames = resp.data.map((city) => city.nome);
      setCities(cityNames);
    });
  }, [selectedState]);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;
    setSelectedState(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;
    setSelectedCity(city);
  }

  return (
    <div className="field-group">
      <Field
        name="uf"
        onChange={handleSelectUf}
        options={states}
        title="Estado (UF)"
        type="select"
      />
      <Field
        name="cidade"
        onChange={handleSelectCity}
        options={cities}
        title="Cidade"
        type="select"
      />
    </div>
  );
};

export default CityAndState;
