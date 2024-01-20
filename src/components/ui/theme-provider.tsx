"use client"
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>
    <Navbar />
    {children}
    <Footer />
    </NextThemesProvider>
}
