import { ModeToggle } from "../../../components/index";
import { Section } from "../components/section";
import { IApp } from "../types";

export function App({ itemsList, isLoading }: Readonly<IApp>) {
  return (
    <div className="flex flex-col items-center h-svh gap-6">
      <header className="flex justify-between w-[90%]">
        <h1>PNCP</h1>
        <ModeToggle />
      </header>
      <Section itemsList={itemsList} isLoading={isLoading} />
    </div>
  );
}
