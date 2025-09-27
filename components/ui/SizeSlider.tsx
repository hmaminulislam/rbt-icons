"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import { useSlider } from "@/context/SliderContext";

export function Slider({
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const { value, setValue } = useSlider();

  return (
    <SliderPrimitive.Root
      min={20}
      max={100}
      value={value}
      onValueChange={setValue}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="bg-primary-50 relative grow overflow-hidden rounded-full h-1.5">
        <SliderPrimitive.Range className="bg-primary-500 absolute h-full" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="bg-primary-600 block size-4 rounded-full shadow-sm transition" />
    </SliderPrimitive.Root>
  );
}
