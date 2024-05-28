import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hook/useTheme";
import * as C from "./index";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <C.DropdownMenu>
      <C.DropdownMenuTrigger asChild>
        <C.Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </C.Button>
      </C.DropdownMenuTrigger>
      <C.DropdownMenuContent align="end">
        <C.DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </C.DropdownMenuItem>
        <C.DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </C.DropdownMenuItem>
      </C.DropdownMenuContent>
    </C.DropdownMenu>
  );
}
