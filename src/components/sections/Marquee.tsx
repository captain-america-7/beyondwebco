export default function Marquee() {
  const clients = ["Quantix", "Velo", "Aether", "Fluxo", "Lumina", "Nexus"];
  
  return (
    <section className="py-16 bg-surface-container-lowest border-y border-outline-variant/30 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {[1, 2].map((i) => (
          <div key={i} className="flex gap-20 items-center px-10">
            {clients.map((client, j) => (
              <span key={`${i}-${j}`} className="text-3xl font-black text-on-surface/20 uppercase tracking-[0.2em]">
                {client}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
