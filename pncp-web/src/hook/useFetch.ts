import React from "react";
import { apiGetItem, apiGetList } from "../service/pncp";
import { formatDate, formatDateTime, formatToBRL } from "../utils/index";
import { AxiosError } from "axios";
import { ItemsTypes, PurchaseItems, PurchaseList } from "./types";

export const useFetchPurchaseList = () => {
  const [itemsList, setItemsList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const searchPurchaseList = React.useCallback(async () => {
    try {
      const { data } = await apiGetList.get("/contratacoes/publicacao", {
        params: {
          dataInicial: 20230801, // 01/08/2023
          dataFinal: 20240528, // 28/05/2024
          codigoModalidadeContratacao: 6, // pregão eletrônico
          codigoMunicipioIbge: 3543402, // Ribeirão Preto
          pagina: 1,
        },
      });

      const items = data.data.map((item: PurchaseList) => {
        return {
          title: item.unidadeOrgao.nomeUnidade,
          description: item.objetoCompra,
          local: `${item.unidadeOrgao.municipioNome}/${item.unidadeOrgao.ufSigla}`,
          biddingPeriod: `${formatDateTime(
            item.dataAberturaProposta
          )} | ${formatDateTime(item.dataEncerramentoProposta)}`,
          valueTotal: formatToBRL(item.valorTotalEstimado),
          updateAt: formatDate(item.dataAtualizacao),
          purchaseNumber: item.sequencialCompra,
          purchaseYear: item.anoCompra,
          companyID: item.orgaoEntidade.cnpj,
        };
      });

      setItemsList(items);
      setIsLoading(false);
    } catch (error) {
      console.log(error);

      if ((error as AxiosError)?.response?.status === 500) {
        alert("Servidor do governo caiu! 🥲");
      }
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    searchPurchaseList();
  }, [searchPurchaseList]);

  return { itemsList, isLoading };
};

export const useFetchPurchaseItems = (
  companyID: string,
  year: number,
  purchaseNumber: number
) => {
  const [itemsList, setItemsList] = React.useState<ItemsTypes[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const searchPurchaseItems = React.useCallback(async () => {
    try {
      const pathname = `/orgaos/${companyID}/compras/${year}/${purchaseNumber}/itens`;
      const { data } = await apiGetItem.get(pathname);

      const items = data.map((item: PurchaseItems) => {
        return {
          name: item.descricao,
          quantity: item.quantidade,
          valueUnit: formatToBRL(item.valorUnitarioEstimado),
          valueTotal: formatToBRL(item.valorTotal),
        };
      });

      setItemsList(items);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [companyID, purchaseNumber, year]);

  React.useEffect(() => {
    searchPurchaseItems();
  }, [searchPurchaseItems]);

  return { itemsList, isLoading, searchPurchaseItems };
};
