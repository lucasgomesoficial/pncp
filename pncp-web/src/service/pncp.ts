import axios from "axios";

export const apiGetList = axios.create({
  baseURL: "https://pncp.gov.br/api/consulta/v1",
});

export const apiGetItem = axios.create({
  baseURL: "https://pncp.gov.br/api/pncp/v1",
});
