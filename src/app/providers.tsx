'use client';

import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export function Providers({children}:{
    children: React.ReactNode
  }){
    return (
<ThemeProvider>
    <Navbar />
        {children}
        <Footer />
    </ThemeProvider>

    )
    
}