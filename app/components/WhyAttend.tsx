'use client';
import { motion } from 'framer-motion';

export default function WhyAttend() {
  const themes = [
    {
      title: '',
      subtitle: 'Culture as Infrastructure — Not Philosophy',
      description: 'Modern organizations are discovering that culture directly influences execution speed, innovation adoption, and talent sustainability. Culture is no longer a narrative; it is an operational system that determines how work gets done.',
      takeaways: [
        'Converting values into performance-driving behaviors',
        'Understanding trust, bias, and influence in decision-making',
        'Designing cultures that support speed and adaptability',
      ],
    },
    {
      title: '',
      subtitle: 'The Great Reinvention of HR — From Process Owner to Enterprise Partner',
      description: 'As automation absorbs administrative work, HR must redefine itself around advisory capability, workforce design, and business alignment.',
      takeaways: [
        'Identifying legacy HR practices that limit relevance',
        'Redesigning HR roles toward consulting, analytics, and change leadership',
        'Building HR operating models aligned with enterprise outcomes',
      ],
    },
    {
      title: '',
      subtitle: 'Workforce Economics & Capability Design in an AI-Normal World',
      description: 'The conversation is shifting from automation to productivity. Organizations must rethink how talent is deployed, reskilled, and structured to create value.',
      takeaways: [
        'Linking talent strategy with financial and operational performance',
        'Designing agile organization structures',
        'Managing cost pressures while sustaining innovation capacity'
      ],
    },
    {
      title: '',
      subtitle: 'Trust, Empathy, and Governance in a Tech-Accelerated Workplace',
      description: 'With algorithms influencing decisions, HR must ensure transparency, fairness, and human-centered leadership remain intact.',
      takeaways: [
        'Navigating legal and ethical implications of digital workplaces',
        'Building employee trust in technology-enabled environments',
        'Creating governance frameworks that enable innovation responsibly',
      ],
    },
  ];

  return (
    <section className="py-8 sm:py-4 md:py-4 px-4" data-framer-name="Why Attend" id="why-attend">
      <div className="max-w-6xl mx-auto px-2 sm:px-4" data-framer-name="Container" id="why-attend-1">

        {/* Detailed Sessions Content - Using Original Themes */}
        <div className="mb-8 sm:mb-12">
          <motion.h3 
            className="text-center mb-4 sm:mb-6"
            style={{
              fontFamily: '"Sora", "Sora Placeholder", sans-serif',
              fontSize: 'clamp(28px, 5vw, 36px)',
              fontWeight: 600,
              color: 'white'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            What You&apos;ll Learn
          </motion.h3>
          {/* Grid Layout optimized for 2x2 layout - All Equal Height */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {themes.map((theme, index) => (
              <motion.div 
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4 flex flex-col"
                style={{ 
                  borderRadius: '12px',
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  minHeight: '380px'
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2, 
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 } 
                }}
              >
                {/* Theme Number and Title */}
                <div className="mb-3">
                  <h4 
                    className="mb-2 text-justify"
                    style={{
                      fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'rgb(168, 85, 247)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {theme.title}
                  </h4>
                  <h5 
                    className="mb-3 text-justify"
                    style={{
                      fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                      fontSize: 'clamp(16px, 4vw, 18px)',
                      fontWeight: 600,
                      color: 'white',
                      lineHeight: '1.3em'
                    }}
                  >
                    {theme.subtitle}
                  </h5>
                </div>

                {/* Description */}
                <div className="mb-4 text-justify" style={{ minHeight: '100px' }}>
                  <p 
                    style={{
                      fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                      fontSize: 'clamp(12px, 3vw, 13px)',
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: '1.4em'
                    }}
                  >
                    {theme.description}
                  </p>
                </div>

                {/* Key Takeaways */}
                <div className="flex flex-col">
                  <h6 
                    className="mb-2"
                    style={{
                      fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                      fontSize: 'clamp(13px, 3.5vw, 14px)',
                      fontWeight: 600,
                      color: 'rgb(239, 200, 38)'
                    }}
                  >
                    Key {index === 4 ? 'Discussion Points' : 'Takeaways'}:
                  </h6>
                  <div className="space-y-1.5" style={{ minHeight: '120px' }}>
                    {theme.takeaways.slice(0, 4).map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span 
                          className="flex-shrink-0"
                          style={{ 
                            color: 'rgb(168, 85, 247)',
                            fontSize: '10px'
                          }}
                        >
                          •
                        </span>
                        <span 
                          style={{
                            fontFamily: '"Sora", "Sora Placeholder", sans-serif',
                            fontSize: 'clamp(11px, 2.8vw, 12px)',
                            color: 'rgba(255, 255, 255, 0.9)',
                            lineHeight: '1.3em'
                          }}
                        >
                          {takeaway}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Sliding Text Section */}
      <div className="mt-12 sm:mt-16  overflow-hidden relative" style={{ height: '180px' }}>
        {/* SVG Definitions */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <g id="svg-star-917">
              <path
                d="M49 0C49 0 49 49 49 49C49 49 98 49 98 49C98 49 49 49 49 49C49 49 49 98 49 98C49 98 49 49 49 49C49 49 0 49 0 49C0 49 49 49 49 49C49 49 49 0 49 0Z"
                fill="white"
              />
            </g>
          </defs>
        </svg>

        {/* Seamless sliding content */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center whitespace-nowrap animate-slide-seamless" style={{ willChange: 'transform' }}>
          {/* First set */}
          <div className="flex items-center gap-10 pr-10">
            <div className="flex-shrink-0">
              <p className="text-6xl md:text-8xl font-semibold text-transparent text-stroke-white font-sora">
                Reimagining Future of Work
              </p>
            </div>
            
            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16" style={{ transform: 'rotate(279.545deg)' }}>
              <svg className="w-full h-full" viewBox="0 0 98 98" fill="white">
                <use href="#svg-star-917" />
              </svg>
            </div>

            <div className="flex-shrink-0">
              <p className="text-6xl md:text-8xl font-semibold text-transparent text-stroke-white font-sora">
                Reimagining Future of Work
              </p>
            </div>

            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16" style={{ transform: 'rotate(279.321deg)' }}>
              <svg className="w-full h-full" viewBox="0 0 98 98" fill="white">
                <use href="#svg-star-917" />
              </svg>
            </div>

            <div className="flex-shrink-0">
              <p className="text-6xl md:text-8xl font-semibold text-transparent text-stroke-white font-sora">
                Reimagining Future of Work
              </p>
            </div>

            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16" style={{ transform: 'rotate(279.321deg)' }}>
              <svg className="w-full h-full" viewBox="0 0 98 98" fill="white">
                <use href="#svg-star-917" />
              </svg>
            </div>
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-32">
            <div className="flex-shrink-0">
              <p className="text-6xl md:text-8xl font-semibold text-transparent text-stroke-white font-sora">
                Reimagining Future of Work
              </p>
            </div>
            
            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16" style={{ transform: 'rotate(279.545deg)' }}>
              <svg className="w-full h-full" viewBox="0 0 98 98" fill="white">
                <use href="#svg-star-917" />
              </svg>
            </div>

            <div className="flex-shrink-0">
              <p className="text-6xl md:text-8xl font-semibold text-transparent text-stroke-white font-sora">
                Reimagining Future of Work
              </p>
            </div>

            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16" style={{ transform: 'rotate(279.321deg)' }}>
              <svg className="w-full h-full" viewBox="0 0 98 98" fill="white">
                <use href="#svg-star-917" />
              </svg>
            </div>

            <div className="flex-shrink-0">
              <p className="text-6xl md:text-8xl font-semibold text-transparent text-stroke-white font-sora">
                Reimagining Future of Work
              </p>
            </div>

            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16" style={{ transform: 'rotate(279.321deg)' }}>
              <svg className="w-full h-full" viewBox="0 0 98 98" fill="white">
                <use href="#svg-star-917" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
