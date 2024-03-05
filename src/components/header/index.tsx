import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Bell, ChevronLeft, ChevronRight, Users } from "lucide-react";
import Image from 'next/image';

export function MainHeader() {
  return (
    <header className="flex justify-between items-center">
      <TooltipProvider>
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild >
              <button className="w-8 h-8 bg-card rounded-full flex items-center justify-center disabled:bg-card/20" disabled>
                <ChevronLeft size={28} strokeWidth={1} />
              </button>
            </TooltipTrigger>
            <TooltipContent className="bg-card text-card-foreground">
              <span>Voltar</span>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="w-8 h-8 bg-card rounded-full flex items-center justify-center disabled:bg-card/20">
                <ChevronRight size={28} strokeWidth={1} />
              </button>
            </TooltipTrigger>
            <TooltipContent className="bg-card text-card-foreground">
              <span>Avançar</span>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="w-8 h-8 bg-card rounded-full flex p-1 items-center justify-center hover:scale-105">
                <Bell size={18} />
              </button>
            </TooltipTrigger>

            <TooltipContent className="bg-card text-card-foreground">
              <span>Novidades</span>
            </TooltipContent>
          </Tooltip>


          <Tooltip>
            <TooltipTrigger asChild>
              <button className="w-8 h-8 bg-card rounded-full flex p-1 items-center justify-center hover:scale-105">
                <Users size={18} />
              </button>
            </TooltipTrigger>

            <TooltipContent className="bg-card text-card-foreground">
              <span>Atividade de amigos</span>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button className="w-8 h-8 bg-card rounded-full flex p-1 items-center justify-center hover:scale-105">
                <Image
                  src={"https://github.com/thiago-tallison.png"}
                  alt="User profile"
                  width={24}
                  height={24}
                  className="rounded-full" />
              </button>
            </TooltipTrigger>

            <TooltipContent className="bg-card text-card-foreground">
              <span>Thiago Tallison</span>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </header>
  );
}