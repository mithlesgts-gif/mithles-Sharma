import React, { useState } from 'react';
import { AlertOctagon, CheckCircle2, RotateCcw, ArrowRight, ShieldAlert } from 'lucide-react';

export const ClashDetectionDemo: React.FC = () => {
  const [resolutionStrategy, setResolutionStrategy] = useState<'initial' | 'reroute' | 'sleeve'>('initial');

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold">
            <AlertOctagon className="w-4 h-4" />
            <span>Interactive Clash Resolution Sandbox</span>
          </div>
          <h3 className="text-xl font-bold font-display text-slate-900 mt-1">
            Coordination Scenario: 600x400 Supply Duct vs. Post-Tensioned Concrete Beam
          </h3>
        </div>

        {/* Status Pill */}
        <div className="flex items-center gap-2 self-start">
          {resolutionStrategy === 'initial' ? (
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              PHYSICAL INTERFERENCE DETECTED
            </span>
          ) : (
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-300 flex items-center gap-1.5 font-bold">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              RESOLVED &amp; COORDINATED
            </span>
          )}
        </div>
      </div>

      {/* Main Visual Comparison Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Interactive Diagram Area */}
        <div className="lg:col-span-7 bg-slate-900 rounded-2xl border border-slate-800 p-6 min-h-[300px] flex flex-col justify-between relative overflow-hidden shadow-inner">
          {/* Elevation HUD */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>GRID B-4 INTERSECTION · LEVEL 03</span>
            <span>ELEVATION: +11.450m</span>
          </div>

          {/* Schematic SVG Visualization */}
          <div className="relative py-8 flex items-center justify-center">
            <svg viewBox="0 0 500 220" className="w-full max-w-lg h-auto select-none">
              {/* Finished Ceiling Line */}
              <line x1="20" y1="30" x2="480" y2="30" stroke="#475569" strokeDasharray="4 4" strokeWidth="1" />
              <text x="30" y="24" fill="#94a3b8" fontSize="10" fontFamily="monospace">FINISHED CEILING LINE (+11.800m)</text>

              {/* Concrete Beam */}
              <rect x="180" y="30" width="140" height="90" fill="#475569" stroke="#94a3b8" strokeWidth="2" rx="2" />
              <text x="195" y="75" fill="#f1f5f9" fontSize="12" fontWeight="bold" fontFamily="monospace">PT BEAM (600x900)</text>

              {/* HVAC Duct Geometry */}
              {resolutionStrategy === 'initial' && (
                <>
                  <rect x="40" y="60" width="420" height="45" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" opacity="0.85" />
                  <text x="60" y="88" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="monospace">SUPPLY AIR DUCT (600x400)</text>
                  
                  {/* Collision Point (Blue Halo Highlight) */}
                  <circle cx="250" cy="82" r="22" fill="#0284c7" opacity="0.4" />
                  <circle cx="250" cy="82" r="14" fill="#38bdf8" opacity="0.9" className="animate-pulse" />
                  <text x="236" y="86" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="monospace">CLASH</text>
                </>
              )}

              {resolutionStrategy === 'reroute' && (
                <>
                  <path 
                    d="M 40 60 L 150 60 L 175 135 L 325 135 L 350 60 L 460 60 L 460 105 L 340 105 L 315 180 L 185 180 L 160 105 L 40 105 Z" 
                    fill="#0284c7" 
                    stroke="#38bdf8" 
                    strokeWidth="2" 
                  />
                  <text x="60" y="88" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="monospace">OFFSET REROUTE (-450mm JOG)</text>
                  <text x="200" y="162" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">CLEARANCE: 75mm OK</text>
                </>
              )}

              {resolutionStrategy === 'sleeve' && (
                <>
                  <rect x="40" y="60" width="420" height="45" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
                  <circle cx="250" cy="82" r="28" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
                  <rect x="220" y="60" width="60" height="45" fill="#38bdf8" opacity="0.4" />
                  <text x="195" y="145" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">ENGINEERED SLEEVE DIA 500</text>
                </>
              )}
            </svg>
          </div>

          {/* Coordinate Readout */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800">
            <span>Interference Status: {resolutionStrategy === 'initial' ? 'Active Collision' : '0.00 mm (Clear)'}</span>
            <span>Navisworks Issue ID: #CL-MEP-0419</span>
          </div>
        </div>

        {/* Resolution Options */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
            Select Engineered Resolution Path
          </div>

          <div className="space-y-2">
            <button
              onClick={() => setResolutionStrategy('initial')}
              className={`w-full p-4 rounded-xl border text-left transition-all ${
                resolutionStrategy === 'initial'
                  ? 'bg-blue-50/80 border-blue-500 text-slate-900 shadow-sm'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-blue-700">Option 01: Unresolved Collision</span>
                <span className="text-slate-400 font-normal">Baseline</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Direct physical conflict between 600x400 supply air duct and 600x900 post-tensioned concrete beam.
              </p>
            </button>

            <button
              onClick={() => setResolutionStrategy('reroute')}
              className={`w-full p-4 rounded-xl border text-left transition-all ${
                resolutionStrategy === 'reroute'
                  ? 'bg-blue-50/80 border-blue-600 text-slate-900 shadow-sm'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-blue-700">Option A: Offset Duct Routing</span>
                <span className="text-blue-600 font-normal">(Recommended)</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Jog duct below beam soffit with 45° elbows. Preserves structural integrity completely without cast-in sleeves.
              </p>
            </button>

            <button
              onClick={() => setResolutionStrategy('sleeve')}
              className={`w-full p-4 rounded-xl border text-left transition-all ${
                resolutionStrategy === 'sleeve'
                  ? 'bg-blue-50/80 border-blue-600 text-slate-900 shadow-sm'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-blue-700">Option B: Engineered Beam Sleeve</span>
                <span className="text-blue-600 font-normal">Requires SE Sign-off</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Locate cylindrical sleeve at neutral stress axis. Requires structural calculation check and extra rebar trim bars.
              </p>
            </button>
          </div>

          <div className="pt-2 text-xs text-slate-500 font-mono flex items-center justify-between">
            <span>Federated in Navisworks Manage</span>
            <span className="text-blue-600 font-bold">BCF 2.1 Protocol</span>
          </div>
        </div>
      </div>
    </div>
  );
};
