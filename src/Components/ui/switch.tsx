import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { SiApplemusic, SiSpotify } from "react-icons/si";
import { cn } from "@/Lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, checked, onCheckedChange, ...props }, ref) => {
  return (
    <SwitchPrimitives.Root
      className={cn(
        "relative group peer inline-flex h-8 w-16 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-foreground",
        className
      )}
      checked={checked}
      onCheckedChange={onCheckedChange}
      {...props}
      ref={ref}
    >
      <span
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full h-full pointer-events-none transition-colors duration-200 group-data-[state=unchecked]:-translate-x-4 group-data-[state=checked]:-translate-x-11"
        )}
      >
        {checked ? <SiApplemusic size={22} className="text-red-500" /> : <SiSpotify size={22} className="text-green-500" />}
      </span>
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-6 w-6 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[35px] data-[state=unchecked]:translate-x-0.5"
        )}
      />
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
