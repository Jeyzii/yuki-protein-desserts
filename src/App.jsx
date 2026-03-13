import { useState, useEffect } from "react";
import { Star, Sparkles, ChevronDown, ChevronUp, Instagram, Facebook, Mail, ArrowRight, CheckCircle, Leaf, ImageOff } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Sakura Strawberry Cake",
    desc: "Layered protein sponge with strawberry cream & fresh berry topping",
    protein: "24g",
    cal: "210 kcal",
    price: "₱320",
    tag: "Best Seller",
    gradient: "from-pink-300 to-rose-200",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Chocolate Cherry Dream",
    desc: "Rich dark chocolate protein cake topped with a maraschino cherry",
    protein: "28g",
    cal: "240 kcal",
    price: "₱350",
    tag: "Fan Fave",
    gradient: "from-rose-400 to-pink-300",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Vanilla Blossom Petit Four",
    desc: "Soft vanilla protein cake with white chocolate glaze & sprinkles",
    protein: "20g",
    cal: "190 kcal",
    price: "₱280",
    tag: "New",
    gradient: "from-fuchsia-200 to-pink-200",
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Mochi Berry Box",
    desc: "Assorted protein mochi in strawberry, lychee & raspberry flavors",
    protein: "18g",
    cal: "175 kcal",
    price: "₱400",
    tag: "Limited",
    gradient: "from-pink-200 to-rose-300",
    image: null, // No image — shows default placeholder
  },
];

const faqs = [
  { q: "Are these actually high-protein?", a: "Yes! Every Yuki dessert packs 18–28g of protein per serving. We use whey isolate and plant-based blends — no chalky taste, promise." },
  { q: "Do they taste like 'diet food'?", a: "Absolutely not. Our recipes are crafted by a pastry chef and a sports nutritionist together. Your taste buds won't know the difference." },
  { q: "How long do they stay fresh?", a: "5 days refrigerated, 3 months frozen. We recommend enjoying them within 3 days for peak fluffiness." },
  { q: "Do you ship nationwide?", a: "Yes! We ship across the Philippines via same-day Lalamove in Metro Manila and JRS/LBC for provincial orders." },
];

const Petal = ({ style }) => (
  <div
    className="absolute opacity-30 animate-pulse"
    style={{
      width: "10px", height: "14px",
      background: "linear-gradient(135deg, #fbb6ce, #f9a8d4)",
      borderRadius: "50% 50% 50% 0 / 60% 60% 40% 40%",
      ...style,
    }}
  />
);

const DefaultImage = ({ gradient }) => (
  <div className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-2`}>
    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.35)" }}>
      <ImageOff size={24} color="rgba(190,24,93,0.45)" />
    </div>
    <span style={{ fontSize: "10px", color: "rgba(190,24,93,0.5)", letterSpacing: "0.08em" }}>Photo coming soon</span>
  </div>
);

export default function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showTop, setShowTop] = useState(false);
  const [imgErrors, setImgErrors] = useState({});

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: "linear-gradient(160deg, #fff0f6 0%, #fce7f3 50%, #fbcfe8 100%)", fontFamily: "'Georgia', serif" }}
    >
      <Petal style={{ top: "8%", left: "5%", animationDelay: "0s" }} />
      <Petal style={{ top: "20%", right: "8%", animationDelay: "1s", transform: "rotate(45deg)" }} />
      <Petal style={{ top: "60%", left: "3%", animationDelay: "2s", transform: "rotate(-30deg)" }} />
      <Petal style={{ top: "75%", right: "5%", animationDelay: "0.5s" }} />

      {/* ── NAV ── */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "rgba(255,240,246,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(249,168,212,0.3)" }}
      >
        <div className="flex items-center gap-2">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            {[0,72,144,216,288].map((r, i) => (
              <ellipse key={r} cx="18" cy="9" rx="5" ry="8" fill={i%2===0?"url(#pg1)":"url(#pg2)"} opacity={i%2===0?0.95:0.92} transform={`rotate(${r} 18 18)`} />
            ))}
            {[0,72,144,216,288].map(r => (
              <line key={r} x1="18" y1="18" x2="18" y2="3" stroke="#f9a8d4" strokeWidth="0.6" opacity="0.5" transform={`rotate(${r} 18 18)`} />
            ))}
            <circle cx="18" cy="18" r="4.5" fill="#fff" />
            <circle cx="18" cy="18" r="3" fill="url(#pg3)" />
            {[[18,15.5],[20.2,16.8],[19.4,19.3],[16.6,19.3],[15.8,16.8]].map(([x,y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="0.8" fill="#fbbf24" />
            ))}
            <defs>
              <radialGradient id="pg1" cx="50%" cy="30%" r="70%"><stop offset="0%" stopColor="#fce7f3"/><stop offset="100%" stopColor="#ec4899"/></radialGradient>
              <radialGradient id="pg2" cx="50%" cy="30%" r="70%"><stop offset="0%" stopColor="#fbcfe8"/><stop offset="100%" stopColor="#db2777"/></radialGradient>
              <radialGradient id="pg3" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#fce7f3"/><stop offset="100%" stopColor="#f9a8d4"/></radialGradient>
            </defs>
          </svg>
          <span className="text-xl font-bold" style={{ color: "#be185d", fontFamily: "'Georgia', serif", letterSpacing: "0.06em" }}>YUKI</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#9d174d" }}>
          {["Menu", "About", "FAQ", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-pink-500 transition-colors tracking-wider" style={{ fontFamily: "'Georgia', serif" }}>{item}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center text-center px-6 pt-20 pb-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-40 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #fce7f3, #fbcfe8, transparent)" }} />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-widest"
          style={{ background: "rgba(249,168,212,0.3)", color: "#be185d", border: "1px solid #f9a8d4" }}>
          <Sparkles size={12} /> HIGH PROTEIN · GUILT-FREE · DELICIOUS
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          style={{ color: "#be185d", fontFamily: "'Georgia', serif", textShadow: "0 2px 20px rgba(236,72,153,0.15)", letterSpacing: "-0.01em" }}>
          Desserts that<br />
          <span style={{ background: "linear-gradient(135deg, #ec4899, #f43f5e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            love you back
          </span>
        </h1>

        <p className="max-w-xl text-lg leading-relaxed mb-10" style={{ color: "#9d174d", fontFamily: "'Georgia', serif" }}>
          Handcrafted protein-packed cakes, petit fours & mochi — made fresh daily in Manila. Because you deserve something sweet AND strong. 🌸
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a href="#menu" className="flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold shadow-xl transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #ec4899, #f43f5e)", fontSize: "15px", textDecoration: "none" }}>
            See the Menu <ArrowRight size={16} />
          </a>
          <a href="#about" className="px-8 py-3.5 rounded-full font-semibold transition-all hover:bg-pink-100"
            style={{ color: "#be185d", border: "2px solid #f9a8d4", fontSize: "15px", textDecoration: "none" }}>
            Learn More
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mt-16">
          {[{ value: "18–28g", label: "Protein per serving" }, { value: "200+", label: "Happy customers" }, { value: "< 250", label: "Calories each" }].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-bold" style={{ color: "#ec4899", fontFamily: "'Georgia', serif" }}>{value}</div>
              <div className="text-sm mt-1" style={{ color: "#9d174d" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MENU ── */}
      <section id="menu" className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest mb-2 font-semibold" style={{ color: "#ec4899" }}>✦ OUR MENU ✦</p>
          <h2 className="text-4xl font-bold" style={{ color: "#be185d", fontFamily: "'Georgia', serif" }}>This season's treats</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id}
              className="relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(249,168,212,0.4)", boxShadow: "0 4px 24px rgba(236,72,153,0.08)" }}>

              {/* Image area */}
              <div className="h-44 relative overflow-hidden">
                {p.image && !imgErrors[p.id] ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    onError={() => setImgErrors(prev => ({ ...prev, [p.id]: true }))}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <DefaultImage gradient={p.gradient} />
                )}
                <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white shadow"
                  style={{ background: "rgba(236,72,153,0.85)", backdropFilter: "blur(4px)" }}>
                  {p.tag}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-base mb-1" style={{ color: "#be185d", fontFamily: "'Georgia', serif" }}>{p.name}</h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "#9d174d" }}>{p.desc}</p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ background: "#fce7f3", color: "#be185d" }}>🥊 {p.protein}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ background: "#fce7f3", color: "#be185d" }}>🔥 {p.cal}</span>
                </div>
                <span className="text-lg font-bold" style={{ color: "#ec4899", fontFamily: "'Georgia', serif" }}>{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY YUKI ── */}
      <section id="about" className="py-20 px-6" style={{ background: "rgba(255,255,255,0.4)", backdropFilter: "blur(8px)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest mb-2 font-semibold" style={{ color: "#ec4899" }}>✦ WHY YUKI ✦</p>
            <h2 className="text-4xl font-bold" style={{ color: "#be185d", fontFamily: "'Georgia', serif" }}>Protein. Pastry. Perfection.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Sparkles size={28} color="#ec4899" />, title: "Chef-Crafted", body: "Every recipe is developed by a professional pastry chef who knows that texture and taste can never be compromised." },
              { icon: <CheckCircle size={28} color="#ec4899" />, title: "Macro-Balanced", body: "Dietitian-approved nutritional profiles. High protein, lower sugar, real ingredients — no artificial junk." },
              { icon: <Leaf size={28} color="#ec4899" />, title: "Made Fresh Daily", body: "Baked in small batches every morning in our Manila kitchen. What you get is as fresh as it gets." },
            ].map(({ icon, title, body }) => (
              <div key={title} className="rounded-3xl p-8 text-center transition-all hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(249,168,212,0.4)", boxShadow: "0 4px 24px rgba(236,72,153,0.06)" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "#fce7f3" }}>{icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#be185d", fontFamily: "'Georgia', serif" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9d174d" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest mb-2 font-semibold" style={{ color: "#ec4899" }}>✦ LOVE NOTES ✦</p>
          <h2 className="text-4xl font-bold" style={{ color: "#be185d", fontFamily: "'Georgia', serif" }}>What our customers say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Andrea M.", review: "I literally cried the first time I had the chocolate cherry cake. It tasted like an actual dessert, not diet food. 10/10!", stars: 5 },
            { name: "Gia R.", review: "My gym besties and I order a box every week now. The macro breakdown is actually legit. Sakura cake is our fave!", stars: 5 },
            { name: "Kai T.", review: "I bought these as a gift and my girlfriend was obsessed. The packaging is so cute and the mochi is incredible.", stars: 5 },
          ].map(({ name, review, stars }) => (
            <div key={name} className="rounded-3xl p-6 transition-all hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(249,168,212,0.35)", boxShadow: "0 4px 20px rgba(236,72,153,0.06)" }}>
              <div className="flex gap-1 mb-3">{Array.from({ length: stars }).map((_, i) => <Star key={i} size={14} fill="#ec4899" color="#ec4899" />)}</div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#9d174d" }}>"{review}"</p>
              <p className="text-sm font-bold" style={{ color: "#be185d" }}>— {name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-16 px-6 max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs tracking-widest mb-2 font-semibold" style={{ color: "#ec4899" }}>✦ FAQ ✦</p>
          <h2 className="text-4xl font-bold" style={{ color: "#be185d", fontFamily: "'Georgia', serif" }}>Got questions?</h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(249,168,212,0.4)" }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-sm" style={{ color: "#be185d" }}>
                {faq.q}
                <ChevronDown size={16} className="flex-shrink-0 ml-4 transition-transform duration-200"
                  style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", color: "#ec4899" }} />
              </button>
              {openFaq === i && <div className="px-6 pb-4 text-sm leading-relaxed" style={{ color: "#9d174d" }}>{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 pb-16 max-w-4xl mx-auto">
        <div className="rounded-3xl p-12 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #ec4899, #f43f5e)", boxShadow: "0 20px 60px rgba(236,72,153,0.3)" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative" style={{ fontFamily: "'Georgia', serif" }}>Ready to treat yourself?</h2>
          <p className="text-pink-100 mb-8 text-lg relative">Fresh batches available daily. DM us on Instagram or send us an email!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
            <button className="px-8 py-3.5 rounded-full font-semibold text-pink-600 bg-white shadow-lg transition-transform hover:scale-105" style={{ fontSize: "15px" }}>DM on Instagram 📸</button>
            <button className="px-8 py-3.5 rounded-full font-semibold text-white transition-all hover:bg-white hover:bg-opacity-20"
              style={{ border: "2px solid rgba(255,255,255,0.6)", fontSize: "15px" }}>Send an Email</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact" className="py-10 px-6 text-center" style={{ borderTop: "1px solid rgba(249,168,212,0.3)" }}>
        <div className="text-2xl font-bold mb-2 tracking-widest" style={{ color: "#be185d", fontFamily: "'Georgia', serif" }}>YUKI</div>
        <p className="text-sm mb-6" style={{ color: "#9d174d" }}>Protein Desserts · Made with love in Manila 🌸</p>
        <div className="flex justify-center gap-5 mb-6">
          {[{ icon: <Instagram size={18} />, label: "Instagram" }, { icon: <Facebook size={18} />, label: "Facebook" }, { icon: <Mail size={18} />, label: "Email" }].map(({ icon, label }) => (
            <button key={label} className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "#fce7f3", color: "#ec4899" }} aria-label={label}>{icon}</button>
          ))}
        </div>
        <p className="text-xs" style={{ color: "#d1a0bb" }}>© 2026 Yuki Protein Desserts. All rights reserved.</p>
      </footer>

      {/* ── SCROLL TO TOP ── */}
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110"
          style={{ background: "linear-gradient(135deg, #ec4899, #f472b6)", color: "#fff", border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(236,72,153,0.4)" }}
          aria-label="Scroll to top">
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}