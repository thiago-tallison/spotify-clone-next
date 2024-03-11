import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ChevronUp, Heart, ListMusic, Mic2, MonitorSpeaker, PlaySquare, Volume2 } from "lucide-react";
import Image from 'next/image';
import { Player } from "./player";

export function Footer() {
  return (
    <footer className="col-span-2 w-full bg-background fixed z-10 ring-0 left-0 bottom-0 h-[84px] p-3 flex justify-between">
      <div className="flex gap-4 items-center flex-1 justify-start">
        <div className="relative group flex items-center">
          <Image
            width={200}
            height={200}
            alt=""
            src="/rhcp.jpg"
            className="h-16 w-16 object-cover border-foreground border-2 rounded-sm"
          />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <ChevronUp
                  size={28} className="invisible group-hover:visible absolute right-2 top-2 border-5 bg-slate-700 rounded-full" />
              </TooltipTrigger>

              <TooltipContent
                side="top"
                className="bg-card text-card-foreground font-semibold">
                <span>Expandir</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex flex-col">
          <strong className="text-sm">Artist</strong>
          <span className="text-xs text-muted-foreground">Album</span>
        </div>

        <Heart
          size={16}
          className="cursor-pointer hover:scale-105 hover:text-foreground text-muted-foreground" />
      </div>

      <Player />

      <div className="flex gap-3 items-center flex-1 justify-end">
        <button><PlaySquare size={16} /></button>
        <button><Mic2 size={16} /></button>
        <button><ListMusic size={16} /></button>
        <button><MonitorSpeaker size={16} /></button>
        <div className="flex items-center gap-1.5">
          <button><Volume2 size={16} /></button>
          <Slider
            className="w-28 m-w-"
            defaultValue={[90]} max={100} step={1} />
        </div>
      </div>
    </footer>
  )
}