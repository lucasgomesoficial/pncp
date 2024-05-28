import { ReactNode } from "react";

type ItemsPurchase = {
  title: string;
  description: string;
  local: string;
  biddingPeriod: string;
  valueTotal: string;
  updateAt: string;
  purchaseNumber: number;
  purchaseYear: number;
  companyID: string;
};

export interface IApp {
  itemsList: ItemsPurchase[];
  isLoading: boolean;
}

export interface ISection {
  itemsList: ItemsPurchase[];
  isLoading: boolean;
}

export interface ICardList {
  item: ItemsPurchase;
}

export interface IModalItem {
  children: ReactNode;
  title: string;
  description: string;
  companyID: string;
  purchaseYear: number;
  purchaseNumber: number;
}
