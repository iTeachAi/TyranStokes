import React, { useState, useMemo } from "react";

export default function PlayerProfile() {
  const data = {
    player_summary: {
      name: "Tyran Stokes",
      archetype: "Versatile Forward",
      persona: "Confident, dominant, and high-energy with a polished skill set",
      play_style: "Physical inside-out scorer with playmaking and defensive versatility",
      confidence_level: "high",
    },
    design_direction: {
      theme: "Bold & Premium",
      tone: "Energetic yet polished",
      visual_style: "Dark with high-contrast vibrant accents",
      color_palette: ["#0B0B0B", "#FF4500", "#FFFFFF", "#1E90FF", "#D3D3D3"],
      typography: "Modern Sans Serif with strong headlines and clean body text",
    },
    layout: {
      hero_section:
        "Full-bleed action shot with dynamic overlay showing name, rank (#1), height, and position",
      sections: [
        "Player Bio & Story",
        "Key Stats & Physical Profile",
        "Highlight Videos",
        "Recent News & Achievements",
        "Social Media & Fan Engagement",
        "Recruiting & College Interest",
      ],
      flow_order: [
        "hero_section",
        "Player Bio & Story",
        "Key Stats & Physical Profile",
        "Highlight Videos",
        "Recent News & Achievements",
        "Recruiting & College Interest",
        "Social Media & Fan Engagement",
      ],
    },
    content_strategy: {
      primary_focus: "Showcase elite athleticism, skill dominance, and versatility",
      secondary_focus: "Build narrative of leadership, high potential, and commitment",
      key_highlights: [
        "5-star consensus top recruit in 2026",
        "6'7\", 230 lb with 7-foot wingspan",
        "Multiple triple-doubles and high-impact performances",
        "State championship winner and MVP accolades",
        "Strong social media presence and fan base",
      ],
    },
    features: [
      "Dynamic video carousel with short and full-length highlights",
      "Interactive stats dashboard highlighting physical measurements and recent game performance",
      "Integrated social feed for Instagram, Twitter",
      "Recruiting timeline with college visit updates",
      "Downloadable PDF profile for coaches and scouts",
    ],
    visual_assets: {
      image_style: "High-contrast, action-oriented photos with motion blur effects",
      video_usage: "Embedded highlight reels and clips emphasizing physicality and skill",
      background_style: "Dark gradient with subtle textured overlays to enhance focus on content",
    },
    conversion_elements: {
      cta: "Schedule a Recruiter Call / Download Player Profile",
      coach_focus:
        "Detailed stats and video highlights optimized for talent evaluation",
      parent_focus:
        "Storytelling section emphasizing character, work ethic, and achievements",
    },
    confidence_notes: {
      design_intent:
        "Design elevates Tyran's status as the top recruit blending premium visuals with comprehensive data to appeal to coaches, parents, and fans.",
      data_strength: "high",
    },
  };

  const colors = data.design_direction.color_palette;
  const [activeVideo, setActiveVideo] = useState(0);
  const [hoverStat, setHoverStat] = useState(null);

  const videos = useMemo(
    () => [
      {
        title: "Explosive Rim Finishes",
        duration: "1:24",
        type: "Short Reel",
      },
      {
        title: "Playmaking + Defense Mix",
        duration: "3:40",
        type: "Game Cut",
      },
      {
        title: "Full Game Highlights",
        duration: "8:12",
        type: "Full Length",
      },
    ],
    []
  );

  const stats = [
    { label: "Height", value: "6'7\"", trend: "+2\" growth", meter: 90 },
    { label: "Weight", value: "230 lb", trend: "Elite strength", meter: 88 },
    { label: "Wingspan", value: "7'0\"", trend: "Elite reach", meter: 94 },
    { label: "Versatility", value: "9.6/10", trend: "Two-way impact", meter: 96 },
  ];

  const achievements = [
    "#1 Ranked Recruit (2026)",
    "State Championship MVP",
    "Multiple Triple-Doubles",
    "All-State First Team",
  ];

  const recruiting = [
    { year: "2024", note: "Started national circuit dominance" },
    { year: "2025", note: "Visited top D1 programs" },
    { year: "2026", note: "Consensus 5-star, #1 overall" },
  ];

  return (
    <div
      style={{
        fontFamily:
          "\"Inter\", \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif",
        background: `linear-gradient(180deg, ${colors[0]} 0%, #0E0E10 60%, #111 100%)`,
        color: colors[2],
        minHeight: "100vh",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }
        .container { width: min(1200px, 92vw); margin: 0 auto; }
        .glass { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(10px); }
        .glow { box-shadow: 0 0 30px rgba(255,69,0,0.3); }
        .accent { color: ${colors[1]}; }
        .blue { color: ${colors[3]}; }
        .chip { padding: 8px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.12); }
        .hover-lift { transition: transform .3s ease, box-shadow .3s ease, border .3s ease; }
        .hover-lift:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.35); border-color: rgba(255,69,0,0.5); }
        .grid { display: grid; gap: 20px; }
        .hero { position: relative; overflow: hidden; }
        .hero::before { content: ""; position: absolute; inset: 0; background: radial-gradient(60% 60% at 70% 20%, rgba(30,144,255,0.25), transparent 60%); pointer-events: none; }
        .hero::after { content: ""; position: absolute; inset: 0; background: linear-gradient(120deg, rgba(255,69,0,0.25), transparent 60%); pointer-events: none; }
        .video-card { cursor: pointer; }
        .progress { height: 10px; border-radius: 999px; background: rgba(255,255,255,0.08); overflow: hidden; }
        .progress > span { display: block; height: 100%; background: linear-gradient(90deg, ${colors[1]}, ${colors[3]}); }
        .pulse { animation: pulse 2.4s ease-in-out infinite; }
        @keyframes pulse { 0%,100% { transform: scale(1); opacity: .9; } 50% { transform: scale(1.02); opacity: 1; } }
        .section-title { font-size: clamp(22px, 2.2vw, 30px); letter-spacing: .04em; text-transform: uppercase; }
        .cta-btn { background: ${colors[1]}; color: ${colors[2]}; border: none; padding: 14px 20px; border-radius: 12px; font-weight: 700; cursor: pointer; transition: transform .2s ease, box-shadow .2s ease; }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(255,69,0,0.4); }
        .subtle { color: ${colors[4]}; }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } .stats-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .stats-grid { grid-template-columns: 1fr !important; } .flow { flex-direction: column; align-items: flex-start !important; } }
      `}</style>

      {/* Hero */}
      <section className="hero" style={{ padding: "70px 0 40px" }}>
        <div className="container">
          <div
            className="grid hero-grid"
            style={{ gridTemplateColumns: "1.2fr 1fr", alignItems: "center" }}
          >
            <div>
              <div
                className="chip glass"
                style={{ display: "inline-flex", gap: 10, alignItems: "center" }}
              >
                <span className="accent" style={{ fontWeight: 700 }}>
                  #1
                </span>
                <span className="subtle" style={{ fontSize: 12 }}>
                  National Rank • 2026
                </span>
              </div>
              <h1
                style={{
                  fontSize: "clamp(40px, 6vw, 76px)",
                  margin: "18px 0 10px",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                {data.player_summary.name}
              </h1>
              <p style={{ fontSize: 18, maxWidth: 560, color: colors[4] }}>
                {data.player_summary.persona}
              </p>
              <div
                className="flow"
                style={{ display: "flex", gap: 16, margin: "20px 0 30px" }}
              >
                <div className="chip glass">
                  <strong className="accent">{data.player_summary.archetype}</strong>
                </div>
                <div className="chip glass">
                  <span className="blue">6'7"</span> • 230 lb • 7'0" WS
                </div>
                <div className="chip glass">
                  <span className="subtle">Position:</span> Forward
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <button className="cta-btn">
                  {data.conversion_elements.cta}
                </button>
                <button
                  className="cta-btn"
                  style={{ background: "transparent", border: `1px solid ${colors[1]}` }}
                >
                  Download Coach Packet
                </button>
              </div>
            </div>
            <div
              className="glass glow"
              style={{
                padding: 20,
                borderRadius: 24,
                position: "relative",
                minHeight: 320,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(120deg, rgba(255,69,0,0.18), rgba(30,144,255,0.12)), url('https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop') center/cover",
                  filter: "saturate(1.2) contrast(1.1)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div className="chip glass">
                    <span className="accent">Top Recruit</span>
                  </div>
                  <div className="chip glass">
                    <span className="blue">High Energy</span>
                  </div>
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: 24 }}>Signature Impact</h3>
                  <p style={{ margin: "6px 0 0", color: colors[4] }}>
                    Dominant two-way presence with elite athleticism and composure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Player Overview */}
      <section style={{ padding: "30px 0 60px" }}>
        <div className="container grid" style={{ gridTemplateColumns: "1.1fr 1fr" }}>
          <div className="glass hover-lift" style={{ padding: 26, borderRadius: 18 }}>
            <div className="section-title">Player Bio & Story</div>
            <h3 style={{ margin: "10px 0" }}>{data.player_summary.archetype}</h3>
            <p className="subtle" style={{ lineHeight: 1.7 }}>
              {data.content_strategy.secondary_focus}
            </p>
            <p style={{ marginTop: 10, color: colors[4] }}>
              {data.player_summary.play_style}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
              {data.content_strategy.key_highlights.map((h) => (
                <span key={h} className="chip glass">
                  {h}
                </span>
              ))}
            </div>
          </div>
          <div className="glass hover-lift" style={{ padding: 26, borderRadius: 18 }}>
            <div className="section-title">Persona & Play Style</div>
            <p style={{ margin: "14px 0", color: colors[4] }}>
              {data.player_summary.persona}
            </p>
            <div style={{ marginTop: 10 }}>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>Confidence Index</div>
              <div className="progress">
                <span style={{ width: "92%" }} />
              </div>
              <div style={{ fontSize: 12, marginTop: 8 }} className="subtle">
                {data.player_summary.confidence_level} confidence
              </div>
            </div>
            <div style={{ marginTop: 20, display: "grid", gap: 10 }}>
              {data.features.slice(0, 3).map((f) => (
                <div key={f} className="chip glass">
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "10px 0 60px" }}>
        <div className="container">
          <div className="section-title">Key Stats & Physical Profile</div>
          <div
            className="grid stats-grid"
            style={{ gridTemplateColumns: "repeat(4, 1fr)", marginTop: 18 }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="glass hover-lift"
                onMouseEnter={() => setHoverStat(i)}
                onMouseLeave={() => setHoverStat(null)}
                style={{ padding: 20, borderRadius: 16 }}
              >
                <div style={{ fontSize: 13, color: colors[4] }}>{s.label}</div>
                <div style={{ fontSize: 26, fontWeight: 800, marginTop: 6 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 12, margin: "6px 0 10px" }} className="subtle">
                  {s.trend}
                </div>
                <div className="progress">
                  <span style={{ width: `${s.meter}%` }} />
                </div>
                {hoverStat === i && (
                  <div style={{ marginTop: 10, fontSize: 12 }} className="accent">
                    Elite tier metric
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section style={{ padding: "10px 0 60px" }}>
        <div className="container">
          <div className="section-title">Highlight Videos</div>
          <div className="grid" style={{ gridTemplateColumns: "1.1fr 1fr", marginTop: 18 }}>
            <div className="glass" style={{ padding: 22, borderRadius: 18 }}>
              <div
                style={{
                  height: 260,
                  borderRadius: 14,
                  background:
                    "linear-gradient(120deg, rgba(255,69,0,0.25), rgba(30,144,255,0.25)), url('https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1200&auto=format&fit=crop') center/cover",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="pulse"
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 56,
                    color: colors[2],
                    textShadow: "0 10px 30px rgba(0,0,0,0.6)",
                  }}
                >
                  ▶
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    right: 16,
                    display: "flex",
                    justifyContent: "space-between",
                    background: "rgba(0,0,0,0.45)",
                    padding: "8px 12px",
                    borderRadius: 10,
                  }}
                >
                  <div>{videos[activeVideo].title}</div>
                  <div className="subtle">{videos[activeVideo].duration}</div>
                </div>
              </div>
              <div style={{ marginTop: 14, color: colors[4] }}>
                {data.content_strategy.primary_focus}
              </div>
            </div>
            <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 12 }}>
              {videos.map((v, idx) => (
                <div
                  key={v.title}
                  className="glass hover-lift video-card"
                  onClick={() => setActiveVideo(idx)}
                  style={{
                    padding: 16,
                    borderRadius: 14,
                    border:
                      activeVideo === idx
                        ? `1px solid ${colors[1]}`
                        : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div style={{ fontWeight: 700 }}>{v.title}</div>
                  <div style={{ fontSize: 12 }} className="subtle">
                    {v.type} • {v.duration}
                  </div>
                </div>
              ))}
              <div className="glass hover-lift" style={{ padding: 16, borderRadius: 14 }}>
                <div style={{ fontWeight: 700 }}>Full-Length Film Room</div>
                <div style={{ fontSize: 12 }} className="subtle">
                  Coach-optimized cutups available upon request
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & News */}
      <section style={{ padding: "10px 0 60px" }}>
        <div className="container grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="glass hover-lift" style={{ padding: 24, borderRadius: 18 }}>
            <div className="section-title">Recent News & Achievements</div>
            <ul style={{ margin: "16px 0 0", paddingLeft: 18, color: colors[4] }}>
              {achievements.map((a) => (
                <li key={a} style={{ marginBottom: 10 }}>
                  <span style={{ color: colors[2] }}>{a}</span>
                </li>
              ))}
            </ul>
            <div
              className="chip glass"
              style={{ marginTop: 14, display: "inline-flex" }}
            >
              <span className="accent">MVP Impact</span>
            </div>
          </div>
          <div className="glass hover-lift" style={{ padding: 24, borderRadius: 18 }}>
            <div className="section-title">Recruiting Timeline</div>
            <div style={{ marginTop: 12, display: "grid", gap: 12 }}>
              {recruiting.map((r) => (
                <div key={r.year} className="chip glass" style={{ width: "100%" }}>
                  <strong style={{ marginRight: 10 }}>{r.year}</strong>
                  <span className="subtle">{r.note}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, color: colors[4] }}>
              {data.conversion_elements.coach_focus}
            </div>
          </div>
        </div>
      </section>

      {/* Recruiting & CTA */}
      <section style={{ padding: "10px 0 60px" }}>
        <div
          className="container glass glow"
          style={{
            padding: "30px",
            borderRadius: 20,
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div className="section-title">Recruiting & College Interest</div>
            <p style={{ color: colors[4], maxWidth: 520 }}>
              {data.conversion_elements.parent_focus}
            </p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button className="cta-btn">Schedule Recruiter Call</button>
            <button
              className="cta-btn"
              style={{ background: colors[3], boxShadow: "0 10px 24px rgba(30,144,255,0.4)" }}
            >
              Download PDF Profile
            </button>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section style={{ padding: "10px 0 80px" }}>
        <div className="container grid" style={{ gridTemplateColumns: "1.3fr 1fr" }}>
          <div className="glass hover-lift" style={{ padding: 24, borderRadius: 18 }}>
            <div className="section-title">Social Media & Fan Engagement</div>
            <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
              {[
                { platform: "Instagram", handle: "@tyran.stokes", engagement: "425K" },
                { platform: "X / Twitter", handle: "@stokeselite", engagement: "210K" },
                { platform: "YouTube", handle: "Tyran Highlights", engagement: "155K" },
              ].map((s) => (
                <div key={s.platform} className="chip glass" style={{ width: "100%" }}>
                  <strong style={{ marginRight: 10 }}>{s.platform}</strong>
                  <span className="subtle">{s.handle}</span>
                  <span style={{ float: "right" }} className="accent">
                    {s.engagement}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass hover-lift" style={{ padding: 24, borderRadius: 18 }}>
            <div className="section-title">Fan Momentum</div>
            <div style={{ marginTop: 16 }}>
              <div style={{ fontWeight: 700 }}>Engagement Growth</div>
              <div className="progress" style={{ marginTop: 10 }}>
                <span style={{ width: "86%" }} />
              </div>
              <div className="subtle" style={{ fontSize: 12, marginTop: 8 }}>
                +34% month over month
              </div>
            </div>
            <div style={{ marginTop: 18, color: colors[4] }}>
              {data.confidence_notes.design_intent}
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: "30px 0 60px", textAlign: "center", color: colors[4] }}>
        <div className="container">
          <div style={{ fontWeight: 700, marginBottom: 6 }}>
            {data.player_summary.name} • {data.player_summary.archetype}
          </div>
          <div style={{ fontSize: 12 }}>
            {data.design_direction.theme} • {data.design_direction.tone}
          </div>
        </div>
      </footer>
    </div>
  );
}
