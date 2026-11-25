export default function FeatureCard({ icon, title, description }) {
  return (
    <article className="rounded-2xl border border-[#222222]/10 bg-white/70 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FA8112] to-[#f6a33a] text-xl font-bold">
        {icon}
      </span>

      <h3 className="mt-5 text-lg font-bold">{title}</h3>
      <p className="mt-2 leading-7 text-[#222222]/65">{description}</p>
    </article>
  );
}