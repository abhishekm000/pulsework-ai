import FeatureCard from "./components/FeatureCard";

// Inside the features section:
<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
  {features.map((feature) => (
    <FeatureCard key={feature.title} {...feature} />
  ))}
</div>