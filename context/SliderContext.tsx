"use client"

import React, { createContext, useContext, useState } from "react"

type SliderContextType = {
  value: number[]
  setValue: (val: number[]) => void
}

export const SliderContext = createContext<SliderContextType | undefined>(undefined)

export const SliderProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState<number[]>([50])

  return (
    <SliderContext.Provider value={{ value, setValue }}>
      {children}
    </SliderContext.Provider>
  )
}

// custom hook
export const useSlider = () => {
  const ctx = useContext(SliderContext)
  if (!ctx) throw new Error("useSlider must be used inside SliderProvider")
  return ctx
}
