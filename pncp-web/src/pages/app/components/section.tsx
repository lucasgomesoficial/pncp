import React from "react";
import { CardList } from "./card-list";
import { ISection } from "../types";

export function Section({ itemsList, isLoading }: Readonly<ISection>) {
  const renderItemsList = React.useMemo(
    () =>
      itemsList.map((item) => (
        <CardList key={item.purchaseNumber} item={item} />
      )),
    [itemsList]
  );

  if (isLoading) return <div>...carregando listagem</div>;

  return (
    <div className="flex flex-col gap-2 h-full items-center p-6">
      {renderItemsList}
    </div>
  );
}
