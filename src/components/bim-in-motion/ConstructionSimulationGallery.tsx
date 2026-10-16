import React, { useState } from 'react';
import { constructionSimVideos, ConstructionVideoSim } from '../../data/bimInMotionData';
import { Play, Pause, RotateCcw, Clock, DollarSign, X } from 'lucide-react';

export const ConstructionSimulationGallery: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<ConstructionVideoSim | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [simProgress, setSimProgress] = useState<number>(40);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-wider mb-2 font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Module 03 · 4D &amp; 5D Construction Simulation
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-900">
            Time-Sequenced 4D Logistics &amp; 5D Cost Planning
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Simulate the physical construction sequence before ground-break. Link 3D geometry with Primavera P6 / MS Project schedules and cost databases.
          </p>
        </div>

        <div className="text-[11px] font-mono text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5 self-start shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Synchro 4D &amp; Navisworks TimeLiner</span>
        </div>
      </div>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {constructionSimVideos.map((video) => (
          <div
            key={video.id}
            onClick={() => {
              setActiveVideo(video);
              setIsPlaying(true);
              setSimProgress(45);
            }}
            className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col"
          >
            {/* Poster Thumbnail */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-900">
              <img
                src={video.posterUrl}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Duration and Type Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[11px] font-mono text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded border border-white/20">
                <Clock className="w-3 h-3 text-blue-400" />
                <span>{video.duration}</span>
                <span className="text-slate-400" aria-hidden="true">·</span>
                <span className="text-blue-300 font-semibold">{video.videoType}</span>
              </div>

              {/* Play Button Trigger */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>
            </div>

            {/* Video Card Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[11px] font-mono text-blue-600 font-semibold block mb-1">
                  {video.discipline}
                </span>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-display">
                  {video.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                  {video.description}
                </p>
              </div>

              {/* 5D Cost Linkage Insight */}
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-700 bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                <div className="font-semibold text-blue-700 flex items-center gap-1 mb-1 font-mono">
                  <DollarSign className="w-3.5 h-3.5" />
                  5D Cost &amp; Quantity Linkage:
                </div>
                <div className="line-clamp-2 text-slate-600">
                  {video.fiveDLinkage}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Accessible Interactive Video Player Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full p-6 space-y-5 relative overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 mb-1 font-semibold">
                <span>{activeVideo.videoType}</span>
                <span aria-hidden="true">·</span>
                <span>{activeVideo.discipline}</span>
                <span aria-hidden="true">·</span>
                <span>Duration {activeVideo.duration}</span>
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900">
                {activeVideo.title}
              </h3>
            </div>

            {/* Simulated Animated Screen */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-300">
              <img
                src={activeVideo.posterUrl}
                alt={activeVideo.title}
                className="w-full h-full object-cover filter brightness-75"
              />

              <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none">
                <div className="flex items-center justify-between text-xs font-mono text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-amber-400'}`} />
                    {isPlaying ? '4D SIMULATION PLAYING' : 'PAUSED'}
                  </span>
                  <span>WBS Activity · Day +142</span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-mono text-slate-100">
                    <span>Task Progression: Floor-by-Floor Cycle</span>
                    <span>{simProgress}% Complete</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-300"
                      style={{ width: `${simProgress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between gap-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <button
                  onClick={() => setSimProgress(10)}
                  className="p-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
                  title="Restart"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 max-w-md flex items-center gap-3">
                <span className="text-[11px] font-mono text-slate-500">Scrub</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={simProgress}
                  onChange={(e) => setSimProgress(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              <div className="text-xs font-mono text-slate-600">
                00:{simProgress < 10 ? `0${Math.floor(simProgress / 10)}` : Math.floor(simProgress / 6)} / {activeVideo.duration}
              </div>
            </div>

            {/* 5D Cost Breakdown Callout */}
            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-1">
              <div className="text-xs font-mono font-bold text-emerald-800 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4" />
                5D Quantity &amp; Cost Planning Integration Note
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-body">
                {activeVideo.fiveDLinkage}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
