// FeatureList.tsx

interface Feature {
  title: string;
  description: string;
}

interface FeatureListProps {
  title: string;
  features: Feature[];
  className?: string;
}

export default function FeatureList({
  features,
  className,
  title,
}: FeatureListProps) {
  return (
    <div className="feature-wrap">
      <h3>{title}</h3>
      <div className={`feature-wrapper${className ? " " + className : ""}`}>
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
