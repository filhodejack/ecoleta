import { LeafletMouseEvent } from "leaflet";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Dropzone from "../../components/Dropzone";
import api from "../../services/api";
import Header from "../Header";
import CityAndState from "./CityAndState";
import CollectItems from "./CollectItems";
import CollectPointMap from "./CollectPointMap";
import Field from "./Field";
import Legend from "./Legend";
import "./style.css";

const CreatePoint = () => {
  const history = useHistory();
  //#region Inputs, Collect items, submit
  const generalData = {
    name: "",
    email: "",
    whatsapp: "",
  };
  const [formData, setFormData] = useState(generalData);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectedFile, setSelectedFile] = useState<File>();

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex((item) => item === id);
    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { name, email, whatsapp } = formData;
    const uf = selectedState;
    const city = selectedCity;
    const [lat, long] = selectedPosition;
    const items = selectedItems;
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("whatsapp", whatsapp);
    data.append("uf", uf);
    data.append("city", city);
    data.append("lat", String(lat));
    data.append("long", String(long));
    data.append("items", items.join(","));

    if (selectedFile) {
      data.append("image", selectedFile);
    }

    await api.post("points", data);

    alert("Ponto de coleta criado!");

    history.push("/");
  }
  //#endregion

  //#region City and State
  const initialState = "";
  const initialCity = "";
  const [selectedState, setSelectedState] = useState(initialState);
  const [selectedCity, setSelectedCity] = useState(initialCity);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;
    setSelectedState(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;
    setSelectedCity(city);
  }
  //#endregion

  //#region Map
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  }, []);

  function handleMapClick(event: LeafletMouseEvent) {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
  }
  //#endregion

  return (
    <div id="page-create-point">
      <div className="content">
        <Header />
      </div>

      <form action="http://localhost:3333/points" onSubmit={handleSubmit}>
        <h1>
          Cadastro do <br />
          campo de coleta
        </h1>

        <Dropzone onFileUploaded={setSelectedFile} />

        <fieldset>
          <Legend title="Dados" />
          <Field
            name="name"
            onChange={handleInputChange}
            title="Nome da Entidade"
            type="text"
          />
          <div className="field-group">
            <Field
              name="email"
              onChange={handleInputChange}
              title="E-mail"
              type="email"
            />
            <Field
              name="whatsapp"
              onChange={handleInputChange}
              title="Whatsapp"
              type="text"
            />
          </div>
        </fieldset>

        <fieldset>
          <Legend title="Endereço" details="Selecione o endereço no mapa" />
          <CollectPointMap
            initialPosition={initialPosition}
            selectedPosition={selectedPosition}
            handleMapClick={handleMapClick}
          />
          <CityAndState
            handleSelectCity={handleSelectCity}
            handleSelectUf={handleSelectUf}
            selectedState={selectedState}
          />
        </fieldset>

        <fieldset>
          <Legend title="Itens de coleta" details="Escolha um ou mais itens" />
          <CollectItems
            selectedItems={selectedItems}
            onClick={handleSelectItem}
          />
        </fieldset>
        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
