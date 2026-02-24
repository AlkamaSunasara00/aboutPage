"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Camera,
  ListChecks,
  Clock,
  RefreshCw,
} from "lucide-react";

export default function InspectionTransparency() {

  const features = [
    {
      icon: ClipboardCheck,
      title: "Inspection Summary",
      desc: "Comprehensive overview of vehicle condition before commitment.",
    },
    {
      icon: Camera,
      title: "Photo Documentation",
      desc: "Visual evidence capturing real vehicle condition.",
    },
    {
      icon: ListChecks,
      title: "Checklist Evaluation",
      desc: "Systematic inspection across key mechanical components.",
    },
    {
      icon: Clock,
      title: "Timestamped Report",
      desc: "Verified inspection timeline for transparency.",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">

      {/* soft glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[400px] bg-fourth/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm tracking-[0.35em] uppercase text-third font-semibold mb-5">
            Inspection Transparency
          </p>

          <h2 className="text-[44px] md:text-[54px] font-bold leading-tight text-primary">
            Built on <span className="text-fourth">Verified Inspection</span>
          </h2>

          <p className="text-third mt-6 text-[17px] leading-relaxed">
            AVX supports a standardized inspection framework that improves clarity
            and confidence before buyers commit.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-24 items-center">

          {/* LEFT VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#1f2937] bg-[#0f1117]/80 backdrop-blur-xl p-10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">

              <p className="text-primary text-lg font-semibold mb-2">
                Inspection Report
              </p>

              <p className="text-third text-sm mb-8">
                Standardized condition evaluation
              </p>

              {/* progress */}
              <div className="space-y-6">
                {[
                  { label: "Engine Condition", score: 92 },
                  { label: "Braking System", score: 88 },
                  { label: "Structural Integrity", score: 95 },
                  { label: "Interior Condition", score: 90 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-third">{item.label}</span>
                      <span className="text-primary font-medium">{item.score}%</span>
                    </div>

                    <div className="h-2 rounded-full bg-[#1f2937] overflow-hidden">
                      <div
                        className="h-full bg-fourth rounded-full"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-[#1f2937] text-third text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-fourth" />
                Jan 15, 2024 — Timestamp verified
              </div>

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="space-y-10">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-5">

                  <div className="w-12 h-12 rounded-xl bg-fourth/10 border border-fourth/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-fourth" />
                  </div>

                  <div>
                    <h4 className="text-primary font-semibold mb-1 text-lg">
                      {feature.title}
                    </h4>
                    <p className="text-third leading-relaxed max-w-sm">
                      {feature.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 flex items-center justify-between border-t border-[#1f2937] pt-6">

              <div className="flex items-center gap-3 text-primary">
                <RefreshCw className="w-5 h-5 text-fourth" />
                Need a fresh inspection?
              </div>

              <button className="px-6 py-2.5 rounded-lg bg-fourth/15 border border-fourth/20 text-fourth hover:bg-fourth/25 transition">
                Request Re-inspection
              </button>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}