import { motion } from 'framer-motion'
import { useState } from 'react'

function VideoSection() {
  // Replace these with your actual video IDs
  const videos = [
    { id: "dQw4w9WgXcQ", title: "Office Tour", thumbnail: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: "ysz5S6PUM-U", title: "Team Culture", thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: "tgbNymZ7vqY", title: "Project Success", thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }
  ]

  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      {/* Reduced padding (py-16) and background decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
              Life at CAMET IT
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              A glimpse into our daily work, culture, and success stories.
            </p>
          </motion.div>
          
          <div className="hidden md:block">
             <a href="#contact" className="text-brand-400 text-sm font-semibold hover:text-white transition-colors">
               View All Stories →
             </a>
          </div>
        </div>

        {/* Video Collage Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px] md:h-[400px]">
          {/* Main Large Video (Left) */}
          <motion.div
            className="md:col-span-2 relative rounded-xl overflow-hidden group shadow-lg border border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {activeVideo === 0 ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videos[0].id}?autoplay=1`}
                title={videos[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div 
                className="absolute inset-0 bg-cover bg-center cursor-pointer transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${videos[0].thumbnail}')` }}
                onClick={() => setActiveVideo(0)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-brand-600 group-hover:border-brand-500 transition-all">
                      <svg className="w-5 h-5 text-white pl-1" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{videos[0].title}</h3>
                      <p className="text-slate-300 text-xs">Featured Story</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column (2 Smaller Videos Stacked) */}
          <div className="grid grid-rows-2 gap-4">
            {videos.slice(1).map((video, index) => (
              <motion.div
                key={index + 1}
                className="relative rounded-xl overflow-hidden group shadow-lg border border-white/10"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 1) * 0.1 }}
              >
                {activeVideo === index + 1 ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div 
                    className="absolute inset-0 bg-cover bg-center cursor-pointer transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${video.thumbnail}')` }}
                    onClick={() => setActiveVideo(index + 1)}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                       <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                          <svg className="w-4 h-4 text-white pl-1" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
                       </div>
                    </div>
                    <div className="absolute bottom-3 left-3">
                       <h4 className="text-white font-semibold text-sm shadow-black drop-shadow-md">{video.title}</h4>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
