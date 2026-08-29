import { Loader2Icon } from "lucide-react"

import { cn } from "@/Lib/utils"

interface SpinnerProps extends React.ComponentProps<"svg"> {
  centered?: boolean
  wrapperClassName?: string
}

function Spinner({
  className,
  wrapperClassName,
  centered = true,
  ...props
}: SpinnerProps) {
  const icon = (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )

  if (!centered) {
    return icon
  }

  return (
    <div className={cn("flex w-full h-full items-center justify-center", wrapperClassName)}>
      {icon}
    </div>
  )
}

export { Spinner }
