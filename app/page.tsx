import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function Home() {
  // In a real app, you'd fetch this from Supabase using the schema provided
  const categories = [
    { name: 'Tech Waters', icon: '⚙️', slug: 'tech-waters' },
    { name: 'Navigation', icon: '🧭', slug: 'navigation' },
    { name: 'Creative Cove', icon: '🎨', slug: 'creative-cove' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Sidebar - The Seas */}
      <aside className="lg:col-span-3 space-y-6">
        <section>
          <h3 className="font-cinzel text-slate-500 text-xs font-bold tracking-widest mb-4 border-b border-slate-800 pb-2">THE SEAS</h3>
          <ul className="space-y-2">
            {categories.map(cat => (
              <li key={cat.slug}>
                <a href={`/seas/${cat.slug}`} className="flex items-center gap-3 p-2 rounded hover:bg-slate-900 transition text-slate-300">
                  <span>{cat.icon}</span>
                  <span className="text-sm font-medium">{cat.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </aside>

      {/* Main Feed - Voyages */}
      <section className="lg:col-span-9">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-4 text-xs font-bold tracking-widest uppercase text-slate-500">
            <button className="text-teal-500 border-b-2 border-teal-500 pb-1">Rising Tide</button>
            <button className="hover:text-slate-300 pb-1">Newest</button>
            <button className="hover:text-slate-300 pb-1">All Time</button>
          </div>
          <button className="bg-slate-800 px-4 py-2 text-xs font-bold rounded hover:bg-slate-700">NEW VOYAGE</button>
        </div>

        <div className="space-y-4">
          {/* Mock Thread Item */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-[#0c0c0c] border border-slate-800 p-4 rounded-lg flex gap-4 hover:border-slate-600 transition">
              {/* Vote Box */}
              <div className="flex flex-col items-center justify-center bg-black/40 rounded p-2 min-w-[50px]">
                <button className="text-slate-500 hover:text-teal-500">▲</button>
                <span className="font-mono text-sm font-bold py-1">42</span>
                <button className="text-slate-500 hover:text-red-500">▼</button>
              </div>
              
              {/* Thread Content */}
              <div className="flex-1">
                <div className="flex gap-2 items-center mb-1">
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-bold uppercase tracking-tighter">Tech Waters</span>
                  <span className="text-[10px] text-slate-500 uppercase">Sailed 4h ago by</span>
                  <span className="text-[10px] text-teal-500 font-bold hover:underline cursor-pointer uppercase tracking-widest">DreadPirateCode [Captain]</span>
                </div>
                <h2 className="text-lg font-bold text-slate-200 leading-tight hover:text-teal-400 cursor-pointer transition">
                  How to bypass ISP throttling using decentralized mesh networks?
                </h2>
                <div className="flex gap-4 mt-3 text-xs text-slate-500">
                  <span>💬 12 Whispers</span>
                  <span>👁️ 1.2k Glimpses</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}