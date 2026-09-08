import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Math is fun · Sixth-grade math, step by step',description:'Explore sixth-grade fractions, decimals, ratios, equations, geometry, and statistics with practice problems, hints, and step-by-step solutions.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
