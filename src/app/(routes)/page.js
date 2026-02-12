import React from 'react';

const AboutProblem = () => {
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

export default AboutProblem;





///////3rd  section 
// import React from 'react';

// const AboutDifferent = () => {
//   return (
//     <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-[var(--color-secondary)] overflow-hidden">
//       {/* Background Decor - Subtle blue glow for interest */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-fourth)]/5 rounded-full blur-[120px] -z-10"></div>
      
//       <div className="max-w-7xl mx-auto">
        
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter uppercase italic">
//             Not Another <br />
//             <span className="text-[var(--color-fourth)] not-italic">Listing Platform</span>
//           </h2>
//           <p className="text-[var(--color-third)] max-w-2xl mx-auto font-[var(--font-secondary)]">
//             We didn't just build a database; we built an ecosystem of trust and verified performance.
//           </p>
//         </div>

//         {/* Differentiator Blocks */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          
//           {/* 01. Verified Consultant Identity */}
//           <div className="relative p-10 bg-white/5 border border-[var(--color-third)]/10 rounded-3xl group hover:bg-[var(--color-fourth)]/10 transition-all duration-300">
//             <span className="absolute top-8 right-10 text-5xl font-bold opacity-10 group-hover:opacity-100 group-hover:text-[var(--color-fourth)] transition-opacity">01</span>
//             <div className="max-w-[85%]">
//               <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">Verified Consultant Identity</h3>
//               <p className="text-[var(--color-third)] leading-relaxed">
//                 Every consultant profile carries structured business information and performance signals. No anonymous sellers—only verified professionals.
//               </p>
//             </div>
//           </div>

//           {/* 02. Inspection Layer */}
//           <div className="relative p-10 bg-white/5 border border-[var(--color-third)]/10 rounded-3xl group hover:bg-[var(--color-fourth)]/10 transition-all duration-300">
//             <span className="absolute top-8 right-10 text-5xl font-bold opacity-10 group-hover:opacity-100 group-hover:text-[var(--color-fourth)] transition-opacity">02</span>
//             <div className="max-w-[85%]">
//               <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">Inspection Layer</h3>
//               <p className="text-[var(--color-third)] leading-relaxed">
//                 Optional assurance that matters. AVX enables independent inspection visibility and re-verification options to give you peace of mind.
//               </p>
//             </div>
//           </div>

//           {/* 03. Performance Transparency */}
//           <div className="relative p-10 bg-white/5 border border-[var(--color-third)]/10 rounded-3xl group hover:bg-[var(--color-fourth)]/10 transition-all duration-300">
//             <span className="absolute top-8 right-10 text-5xl font-bold opacity-10 group-hover:opacity-100 group-hover:text-[var(--color-fourth)] transition-opacity">03</span>
//             <div className="max-w-[85%]">
//               <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">Performance Transparency</h3>
//               <p className="text-[var(--color-third)] leading-relaxed">
//                 Numbers don't lie. Consultant storefronts display real-time activity, authentic reviews, and actual engagement metrics.
//               </p>
//             </div>
//           </div>

//           {/* 04. Structured Search & Discovery */}
//           <div className="relative p-10 bg-white/5 border border-[var(--color-third)]/10 rounded-3xl group hover:bg-[var(--color-fourth)]/10 transition-all duration-300">
//             <span className="absolute top-8 right-10 text-5xl font-bold opacity-10 group-hover:opacity-100 group-hover:text-[var(--color-fourth)] transition-opacity">04</span>
//             <div className="max-w-[85%]">
//               <h3 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">Structured Search & Discovery</h3>
//               <p className="text-[var(--color-third)] leading-relaxed">
//                 Our algorithm ranks vehicles by relevance and quality signals, ensuring you see the best value first, not just the newest post.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutDifferent;

/////4th section
// import React from 'react';

// const HowAvxWorks = () => {
//   return (
//     <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-[var(--color-secondary)] overflow-hidden">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Section Header */}
//         <div className="text-center mb-16 md:mb-24">
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
//             How AVX Works
//           </h2>
//           <p className="text-xl md:text-2xl text-[var(--color-third)] max-w-3xl mx-auto">
//             A clear, transparent, and direct path from discovery to ownership
//           </p>
//           <div className="w-24 h-1 bg-[var(--color-fourth)] mx-auto mt-8 rounded-full"></div>
//         </div>

//         {/* Steps - Vertical timeline style with cards */}
//         <div className="relative">
//           {/* Optional subtle vertical line (visible on md+) */}
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/5 transform -translate-x-1/2"></div>

//           <div className="space-y-16 md:space-y-24 relative">
            
//             {/* Step 1 */}
//             <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
//               <div className="md:w-1/2 flex justify-center md:justify-end">
//                 <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/40 border-2 border-[var(--color-fourth)]/30 flex items-center justify-center text-3xl md:text-4xl font-bold text-[var(--color-fourth)] shadow-lg">
//                   1
//                 </div>
//               </div>
//               <div className="md:w-1/2">
//                 <div className="bg-black/25 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-10 hover:border-[var(--color-fourth)]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[var(--color-fourth)]/10">
//                   <h3 className="text-2xl md:text-3xl font-bold mb-5 text-[var(--color-primary)] group-hover:text-[var(--color-fourth)] transition-colors">
//                     Search & Discover
//                   </h3>
//                   <p className="text-[var(--color-third)] text-base md:text-lg leading-relaxed">
//                     Browse vehicles using powerful filters — budget, body type, fuel, brand, location, or directly by trusted consultants.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Step 2 */}
//             <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
//               <div className="md:w-1/2 flex justify-center md:justify-start">
//                 <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/40 border-2 border-[var(--color-fourth)]/30 flex items-center justify-center text-3xl md:text-4xl font-bold text-[var(--color-fourth)] shadow-lg">
//                   2
//                 </div>
//               </div>
//               <div className="md:w-1/2">
//                 <div className="bg-black/25 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-10 hover:border-[var(--color-fourth)]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[var(--color-fourth)]/10">
//                   <h3 className="text-2xl md:text-3xl font-bold mb-5 text-[var(--color-primary)] group-hover:text-[var(--color-fourth)] transition-colors">
//                     Evaluate Transparently
//                   </h3>
//                   <p className="text-[var(--color-third)] text-base md:text-lg leading-relaxed">
//                     Access detailed specs, real condition reports, high-quality photos, and — when available — full inspection reports.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Step 3 */}
//             <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
//               <div className="md:w-1/2 flex justify-center md:justify-end">
//                 <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/40 border-2 border-[var(--color-fourth)]/30 flex items-center justify-center text-3xl md:text-4xl font-bold text-[var(--color-fourth)] shadow-lg">
//                   3
//                 </div>
//               </div>
//               <div className="md:w-1/2">
//                 <div className="bg-black/25 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-10 hover:border-[var(--color-fourth)]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[var(--color-fourth)]/10">
//                   <h3 className="text-2xl md:text-3xl font-bold mb-5 text-[var(--color-primary)] group-hover:text-[var(--color-fourth)] transition-colors">
//                     Connect Directly
//                   </h3>
//                   <p className="text-[var(--color-third)] text-base md:text-lg leading-relaxed">
//                     Message or chat directly with the consultant — ask questions, book test drives, negotiate, all in one place.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Step 4 */}
//             <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
//               <div className="md:w-1/2 flex justify-center md:justify-start">
//                 <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/40 border-2 border-[var(--color-fourth)]/30 flex items-center justify-center text-3xl md:text-4xl font-bold text-[var(--color-fourth)] shadow-lg">
//                   4
//                 </div>
//               </div>
//               <div className="md:w-1/2">
//                 <div className="bg-black/25 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-10 hover:border-[var(--color-fourth)]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[var(--color-fourth)]/10">
//                   <h3 className="text-2xl md:text-3xl font-bold mb-5 text-[var(--color-primary)] group-hover:text-[var(--color-fourth)] transition-colors">
//                     Verify if Needed
//                   </h3>
//                   <p className="text-[var(--color-third)] text-base md:text-lg leading-relaxed">
//                     For extra peace of mind, request an AVX-verified inspection — transparent reports visible to you and the consultant.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Step 5 */}
//             <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
//               <div className="md:w-1/2 flex justify-center md:justify-end">
//                 <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black/40 border-2 border-[var(--color-fourth)]/30 flex items-center justify-center text-3xl md:text-4xl font-bold text-[var(--color-fourth)] shadow-lg">
//                   5
//                 </div>
//               </div>
//               <div className="md:w-1/2">
//                 <div className="bg-black/25 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-10 hover:border-[var(--color-fourth)]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[var(--color-fourth)]/10">
//                   <h3 className="text-2xl md:text-3xl font-bold mb-5 text-[var(--color-primary)] group-hover:text-[var(--color-fourth)] transition-colors">
//                     Transact Independently
//                   </h3>
//                   <p className="text-[var(--color-third)] text-base md:text-lg leading-relaxed">
//                     Finalize the deal directly between buyer and consultant — securely and on your terms.
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* Optional subtle final message */}
//         <div className="mt-20 md:mt-28 text-center">
//           <p className="text-xl md:text-2xl font-medium text-[var(--color-third)] max-w-4xl mx-auto">
//             Simple. Transparent. Direct. Built for real people buying and selling real vehicles.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HowAvxWorks;


// import React from 'react';

// const ForBuyers = () => {
//   const buyerFeatures = [
//     "Verified consultant storefronts",
//     "Structured vehicle detail pages",
//     "Optional inspection reassurance",
//     "Inquiry & communication transparency",
//     "Marketplace-level filtering"
//   ];

//   return (
//     <section className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--color-secondary)] relative overflow-hidden">
//       {/* Background Ambient Glow */}
//       <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-fourth)] opacity-10 blur-[120px] rounded-full"></div>

//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row items-stretch gap-0 border border-[var(--color-fourth)]/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,123,255,0.1)]">
          
//           {/* Left Side: Impactful Blue Header */}
//           <div className="lg:w-2/5 bg-[var(--color-fourth)] p-12 md:p-16 flex flex-col justify-between">
//             <div>
//               <span className="text-[var(--color-secondary)] font-bold uppercase tracking-[0.3em] text-xs mb-4 block opacity-80">Platform Focus</span>
//               <h2 className="text-5xl md:text-7xl font-bold text-[var(--color-secondary)] uppercase italic tracking-tighter leading-[0.9]">
//                 For <br /> Buyers
//               </h2>
//             </div>
            
//             <div className="mt-12">
//               <div className="w-20 h-1.5 bg-[var(--color-secondary)] mb-6"></div>
//               <p className="text-[var(--color-secondary)] font-medium text-lg leading-snug font-[var(--font-secondary)]">
//                 Built for those who value structure, transparency, and verified data over marketplace noise.
//               </p>
//             </div>
//           </div>

//           {/* Right Side: Feature List & Action */}
//           <div className="lg:w-3/5 bg-[#0a0a0a] p-12 md:p-16 flex flex-col justify-center">
//             <div className="space-y-8 mb-12">
//               {buyerFeatures.map((item, index) => (
//                 <div key={index} className="flex items-start gap-6 group">
                  
//                   {/* PERFECTED BLUE TICK BOX */}
//                   <div className="flex-shrink-0 mt-1 w-7 h-7 border-2 border-[var(--color-fourth)] rounded-md flex items-center justify-center group-hover:bg-[var(--color-fourth)]/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,123,255,0.2)]">
//                     <svg 
//                       width="16" 
//                       height="12" 
//                       viewBox="0 0 16 12" 
//                       fill="none" 
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path 
//                         d="M1.5 6L5.5 10L14.5 1.5" 
//                         stroke="#007bff" /* Using your specific hex for absolute clarity */
//                         strokeWidth="3" 
//                         strokeLinecap="round" 
//                         strokeLinejoin="round"
//                         className="drop-shadow-sm"
//                       />
//                     </svg>
//                   </div>

//                   <span className="text-xl md:text-2xl font-bold text-[var(--color-primary)] uppercase tracking-tight font-[var(--font-primary)] group-hover:text-[var(--color-fourth)] transition-colors duration-300">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <div className="pt-8 border-t border-[var(--color-fourth)]/20">
//               <button className="group relative overflow-hidden bg-transparent border-2 border-[var(--color-fourth)] px-12 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,123,255,0.4)]">
//                 <span className="relative z-10 text-[var(--color-fourth)] font-bold uppercase tracking-widest group-hover:text-[var(--color-secondary)] transition-colors duration-300">
//                   Browse Vehicles
//                 </span>
//                 <div className="absolute inset-0 bg-[var(--color-fourth)] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// // export default ForBuyers;

//////section 8 and 9
// import React from "react";

// const VisionApproach = () => {
//   return (
//     <section className="py-20 px-6 md:px-12 bg-[var(--color-secondary)] text-[var(--color-primary)]">

//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

//         {/* OUR VISION */}
//         <div
//           className="
//           border border-[var(--color-fourth)]
//           rounded-xl p-8
//           bg-gradient-to-b from-[#0e0e0e] to-[#141414]
//           hover:scale-[1.02] transition-all
//         "
//         >
//           <h2 className="text-3xl font-bold mb-4">
//             Our <span className="text-[var(--color-fourth)]">Vision</span>
//           </h2>

//           <p className="text-[var(--color-third)] leading-relaxed">
//             To build India’s most accountable and performance-driven automotive marketplace —  
//             where credibility, not just listings, defines visibility.
//           </p>

//           <div className="mt-6 h-1 w-20 bg-[var(--color-fourth)] rounded-full"></div>
//         </div>

//         {/* OUR APPROACH */}
//         <div
//           className="
//           border border-[var(--color-third)]
//           rounded-xl p-8
//           bg-[#0f0f0f]
//           hover:scale-[1.02] transition-all
//         "
//         >
//           <h2 className="text-3xl font-bold mb-4">
//             Our <span className="text-[var(--color-fourth)]">Approach</span>
//           </h2>

//           <p className="text-[var(--color-third)] leading-relaxed">
//             AVX does not replace consultants.  
//             It empowers them with visibility, structure, and measurable performance signals —  
//             while giving buyers the confidence of verified identity and inspection clarity.
//           </p>

//           <div className="mt-6 h-1 w-20 bg-[var(--color-fourth)] rounded-full"></div>
//         </div>

//       </div>

//       {/* Soft Closing Line */}
//       <div className="max-w-4xl mx-auto text-center mt-12">
//         <p className="text-sm text-[var(--color-third)]">
//           Built on trust. Backed by transparency. Driven by performance.
//         </p>
//       </div>

//     </section>
//   );
// };

// export default VisionApproach;



// /////section 10th
// import React from 'react';

// const ComplianceNote = () => {
//   return (
//     <section className="py-16 px-6 bg-[var(--color-secondary)]">
//       <div className="max-w-4xl mx-auto">
        
//         {/* Compact Glass Capsule */}
//         <div className="relative group p-[1px] rounded-[30px] overflow-hidden bg-gradient-to-r from-[var(--color-fourth)]/40 via-transparent to-[var(--color-fourth)]/40">
          
//           <div className="bg-[#0a0a0a] rounded-[29px] p-8 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
//             {/* LARGE IMPACT ICON */}
//             <div className="flex-shrink-0">
//               <div className="relative">
//                 {/* Outer Glow for Icon */}
//                 <div className="absolute inset-0 bg-[var(--color-fourth)] blur-2xl opacity-20"></div>
//                 <svg 
//                   width="80" 
//                   height="80" 
//                   viewBox="0 0 24 24" 
//                   fill="none" 
//                   stroke="var(--color-fourth)" 
//                   strokeWidth="1" 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round"
//                   className="relative z-10 opacity-90"
//                 >
//                   <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
//                   <circle cx="12" cy="12" r="3" fill="var(--color-fourth)" className="opacity-40" />
//                   <path d="m9 12 2 2 4-4" strokeWidth="2.5" />
//                 </svg>
//               </div>
//             </div>

//             {/* CONTENT BLOCK - EXACT CONTENT AS REQUESTED */}
//             <div className="text-center md:text-left relative z-10">
//               <h4 className="text-[var(--color-fourth)] font-black uppercase tracking-[0.5em] text-[12px] mb-4">
//                 Compliance & Transparency Note
//               </h4>
//               <p className="text-[var(--color-primary)] text-lg md:text-xl font-[var(--font-secondary)] leading-relaxed">
//                 AVX is a marketplace platform. Transactions, pricing, and negotiation occur <span className="text-[var(--color-fourth)] font-bold italic">directly</span> between buyers and consultants. AVX does not hold or process payments between parties.
//               </p>
//               <p className="mt-4 text-[var(--color-fourth)] font-bold uppercase tracking-widest text-sm italic">
//                 This protects you legally.
//               </p>
//             </div>

//             {/* Subtle "Safe" Badge */}
//             <div className="absolute top-4 right-8 hidden md:block">
//               <span className="text-[var(--color-fourth)] opacity-[0.07] font-black italic text-5xl select-none">AVX-SECURE</span>
//             </div>

//           </div>
//         </div>

//         {/* Minimalist Footer Detail */}
//         <div className="mt-6 flex justify-center gap-10">
//             <div className="h-[1px] w-20 bg-[var(--color-third)]/30 self-center"></div>
//             <span className="text-[8px] uppercase tracking-[0.8em] font-bold text-[var(--color-fourth)]">Legal Independence Verified</span>
//             <div className="h-[1px] w-20 bg-[var(--color-third)]/30 self-center"></div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ComplianceNote;