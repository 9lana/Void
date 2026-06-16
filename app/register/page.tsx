"use client"
import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({ username: '', password: '', captcha: '' });
  const [errors, setErrors] = useState<string[]>([]);

  // Simple Captcha Simulation (In reality, fetch from Supabase public.captcha_challenges)
  const [mockCaptcha] = useState({ id: '123', question: 'What is 7 + 3?' });

  const validatePassword = (pass: string) => {
    const requirements = [
      pass.length >= 8,
      /[A-Z]/.test(pass),
      /[!@#$%^&*(),.?":{}|<>]/.test(pass)
    ];
    return requirements.every(Boolean);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = [];
    
    if (!validatePassword(formData.password)) {
      errs.push("Password requires 8+ chars, 1 uppercase, and 1 symbol.");
    }
    if (formData.captcha !== '10') {
      errs.push("Captcha answer is incorrect.");
    }

    if (errs.length > 0) {
      setErrors(errs);
    } else {
      alert("Welcome aboard The Obsidian Void!");
      // Call Supabase Auth here
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12">
      <div className="bg-[#0c0c0c] border border-slate-800 p-8 rounded-lg shadow-2xl">
        <h2 className="font-cinzel text-2xl font-bold mb-6 text-center text-teal-500">SIGN THE ARTICLES</h2>
        
        {errors.length > 0 && (
          <div className="mb-6 p-4 bg-red-900/20 border border-red-900 text-red-400 text-xs rounded">
            {errors.map((e, i) => <p key={i}>• {e}</p>)}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">PIRATE ALIAS</label>
            <input 
              type="text" 
              required
              className="w-full bg-black border border-slate-800 rounded p-3 text-white focus:border-teal-500 outline-none transition"
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">SECRET CIPHER (PASSWORD)</label>
            <input 
              type="password" 
              required
              className="w-full bg-black border border-slate-800 rounded p-3 text-white focus:border-teal-500 outline-none transition"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            <p className="text-[10px] text-slate-600 mt-2 uppercase">Min 8 chars • 1 Uppercase • 1 Symbol</p>
          </div>

          {/* CAPTCHA SECTION */}
          <div className="bg-black/50 p-4 rounded border border-slate-900">
            <label className="block text-xs font-bold tracking-widest uppercase text-teal-600 mb-3 underline">PROVE YOUR HUMANITY</label>
            <p className="text-sm text-slate-300 mb-3">{mockCaptcha.question}</p>
            <input 
              type="text" 
              placeholder="Enter answer..."
              required
              className="w-full bg-black border border-slate-800 rounded p-2 text-white outline-none"
              onChange={(e) => setFormData({...formData, captcha: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 rounded transition uppercase tracking-widest text-sm shadow-lg shadow-teal-900/20"
          >
            JOIN THE CREW
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-slate-500 uppercase tracking-widest">
          Already a member? <a href="/login" className="text-teal-500 hover:underline">Return to ship</a>
        </p>
      </div>
    </div>
  );
}