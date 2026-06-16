import './globals.css';
import { Inter, Cinzel } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' });

export const metadata = {
  title: 'The Obsidian Void | Digital Pirate Forum',
  description: 'Sailing the independent web.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${cinzel.variable} bg-[#050505] text-slate-200 antialiased`}>
        {/* GLOBAL FORUM BANNER */}
        <div className="relative w-full h-48 md:h-64 overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1516339901600-2e1a62d0edb4?q=80&w=2000&auto=format&fit=crop" 
            alt="The Obsidian Void Banner"
            className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
            <h1 className="font-cinzel text-4xl md:text-6xl font-bold tracking-tighter text-white drop-shadow-2xl">
              THE OBSIDIAN VOID
            </h1>
            <p className="font-inter text-sm md:text-base text-slate-400 mt-2 tracking-widest uppercase">
              Manifesto: Freedom of Information • Zero Tracking • Code is Law
            </p>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-slate-800 px-6 py-3">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex gap-8 items-center">
              <Link href="/" className="font-cinzel text-xl font-bold text-teal-500 hover:text-teal-400">⚓ MAIN DECK</Link>
              <div className="hidden md:flex gap-6 text-xs font-bold tracking-widest uppercase text-slate-500">
                <Link href="/seas" className="hover:text-white transition">The Seas</Link>
                <Link href="/charts" className="hover:text-white transition">Charts</Link>
                <Link href="/crew" className="hover:text-white transition">The Crew</Link>
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="/login" className="px-4 py-2 text-sm font-bold hover:text-white transition">LOGIN</Link>
              <Link href="/register" className="px-4 py-2 text-sm bg-teal-600 hover:bg-teal-500 text-white rounded-sm transition">JOIN CREW</Link>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}