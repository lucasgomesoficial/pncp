import * as C from "../../../components/index";
import { ICardList } from "../types";
import { ModalItem } from "./modal";

export function CardList({ item }: Readonly<ICardList>) {
  // UASG = 930391
  // Dispensa eletrônica = Nº 90017/2024
  // Objeto = A aquisição, por Contratação Direta Emergencial.... (opcional)
  // Período para envio de lances = 17/05/2024 09:15:00 até 15:15:00
  // Item 1 = Toalha De Papel
  // Quantidade = 72
  // Valor de referência (unitário):  = R$ 54,85
  // Valor de referência (total): = R$ 3.949,20
  return (
    <ModalItem
      title={item.title}
      description={item.description}
      companyID={item.companyID}
      purchaseYear={item.purchaseYear}
      purchaseNumber={item.purchaseNumber}
    >
      <C.Card className="w-full cursor-pointer">
        <C.CardHeader>
          <C.CardTitle>{item.title} | UASG: 930391</C.CardTitle>
          <C.CardDescription>
            {item.description}
            <br />• Última atualização {item.updateAt}
          </C.CardDescription>
        </C.CardHeader>
        <C.CardContent>
          <div className="mb-4 flex flex-wrap gap-4 items-start pb-4 last:mb-0 last:pb-0">
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Local</p>
              <p className="text-sm text-muted-foreground">{item.local}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Dispensa eletrônica
              </p>
              <p className="text-sm text-muted-foreground">Nº 90017/2024</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Período para envio de lances
              </p>
              <p className="text-sm text-muted-foreground">
                {item.biddingPeriod}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Valor de referência (total)
              </p>
              <p className="text-sm text-muted-foreground">{item.valueTotal}</p>
            </div>
          </div>
        </C.CardContent>
      </C.Card>
    </ModalItem>
  );
}
