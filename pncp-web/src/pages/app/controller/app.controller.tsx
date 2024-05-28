import { useFetchPurchaseList } from "../../../hook/useFetch";
import { App } from "../view/app.view";

export function AppController() {
  const { itemsList, isLoading } = useFetchPurchaseList();

  return <App itemsList={itemsList} isLoading={isLoading} />;
}
