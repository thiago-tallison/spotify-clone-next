import { Slider } from "@/components/ui/slider";
import { PlayCircleIcon, Shuffle, SkipBack, SkipForward } from "lucide-react";

export function Player() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-4">
      <div className="flex gap-5 items-center">
        <button>
          <Shuffle size={16} />
        </button>
        <button>
          <SkipBack fill="white" />
        </button>
        <button>
          <PlayCircleIcon size={32} />
        </button>
        <button>
          <SkipForward fill="white" />
        </button>
      </div>
      <div className="flex w-full gap-2">
        <span className="text-xs text-muted-foreground">00:53</span>
        <Slider
          className="w-full"
          defaultValue={[33]} max={100} step={1}

        />
        <span className="text-xs text-muted-foreground">03:55</span>
      </div>
    </div>
  )
}