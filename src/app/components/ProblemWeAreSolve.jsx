import React from 'react';

const ProblemWeAreSolve = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[var(--color-secondary)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight text-[var(--color-primary)]">
            The Used Vehicle Market <br /> 
            <span className="text-[var(--color-fourth)]">Needed Structure</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--color-fourth)]"></div>
        </div>

        {/* Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Fragmented Listings */}
          <div className="p-8 border border-[var(--color-third)]/20 rounded-2xl hover:border-[var(--color-fourth)] transition-colors group">
            <div className="mb-6 text-[var(--color-fourth)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M3 7v1a3 3 0 0 0 6 0V7"/><path d="M9 7v1a3 3 0 0 0 6 0V7"/><path d="M15 7v1a3 3 0 0 0 6 0V7"/><path d="M19 21v-4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4"/><rect width="16" height="12" x="4" y="3"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)]">Fragmented Listings</h3>
            <p className="text-[var(--color-third)] leading-relaxed font-[var(--font-secondary)]">
              Vehicles scattered across platforms without consistency, making the search process exhausting and inefficient.
            </p>
          </div>

          {/* Low Transparency */}
          <div className="p-8 border border-[var(--color-third)]/20 rounded-2xl hover:border-[var(--color-fourth)] transition-colors group">
            <div className="mb-6 text-[var(--color-fourth)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 14.83 4.24 4.24"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)]">Low Transparency</h3>
            <p className="text-[var(--color-third)] leading-relaxed font-[var(--font-secondary)]">
              Limited inspection clarity and unclear seller credibility often leave buyers feeling uncertain and unprotected.
            </p>
          </div>

          {/* No Accountability Layer */}
          <div className="p-8 border border-[var(--color-third)]/20 rounded-2xl hover:border-[var(--color-fourth)] transition-colors group">
            <div className="mb-6 text-[var(--color-fourth)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)]">No Accountability Layer</h3>
            <p className="text-[var(--color-third)] leading-relaxed font-[var(--font-secondary)]">
              No performance visibility for consultants, creating a marketplace where quality and service aren't measurable.
            </p>
          </div>

        </div>

        {/* Closing Line */}
        <div className="mt-16 pt-8 border-t border-[var(--color-third)]/10 text-center">
          <p className="text-2xl italic font-semibold text-[var(--color-primary)]">
            AVX was built to solve this <span className="text-[var(--color-fourth)]">structurally</span> — not cosmetically.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProblemWeAreSolve;