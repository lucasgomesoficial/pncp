import React from "react";
import * as C from "../../../components/index";
import { IModalItem } from "../types";
import { useFetchPurchaseItems } from "../../../hook/useFetch";

export function ModalItem({
  children,
  title,
  description,
  companyID,
  purchaseYear,
  purchaseNumber,
}: Readonly<IModalItem>) {
  const { searchPurchaseItems, isLoading, itemsList } = useFetchPurchaseItems(
    companyID,
    purchaseYear,
    purchaseNumber
  );

  React.useEffect(() => {
    searchPurchaseItems();
  }, [searchPurchaseItems]);

  const renderItems = React.useMemo(
    () =>
      itemsList.map(({ name, quantity, valueUnit, valueTotal }) => (
        <C.TableRow key={name}>
          <C.TableCell className="font-medium">{name}</C.TableCell>
          <C.TableCell className="text-center">{quantity}</C.TableCell>
          <C.TableCell>{valueUnit}</C.TableCell>
          <C.TableCell>{valueTotal}</C.TableCell>
        </C.TableRow>
      )),
    [itemsList]
  );

  function renderTable() {
    return (
      <>
        {isLoading ? (
          <div>...carregando itens</div>
        ) : (
          <C.Table>
            <C.TableCaption>Listagem dos itens do pregão</C.TableCaption>
            <C.TableHeader>
              <C.TableRow>
                <C.TableHead className="w-[60%]">Item</C.TableHead>
                <C.TableHead>Quant.</C.TableHead>
                <C.TableHead>Unit</C.TableHead>
                <C.TableHead>Vl Total</C.TableHead>
              </C.TableRow>
            </C.TableHeader>
            <C.TableBody>{renderItems}</C.TableBody>
          </C.Table>
        )}
      </>
    );
  }
  return (
    <C.Sheet>
      <C.SheetTrigger asChild>{children}</C.SheetTrigger>
      <C.SheetContent className="min-w-[40%]">
        <C.SheetHeader>
          <C.SheetTitle>{title} | UASG: 930391</C.SheetTitle>
          <C.SheetDescription>{description}</C.SheetDescription>
        </C.SheetHeader>
        {renderTable()}
        {/* <C.SheetFooter>
          <C.SheetClose asChild>
            <C.Button type="submit">Save changes</C.Button>
          </C.SheetClose>
        </C.SheetFooter> */}
      </C.SheetContent>
    </C.Sheet>
  );
}
