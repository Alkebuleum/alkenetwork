// Shared brand mark: orbit ring + three hub nodes + connecting spokes.
export default function Mark({ className }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="18.5" stroke="var(--accent)" strokeWidth="1.4" />
      <circle cx="20" cy="10" r="2.4" fill="var(--accent)" />
      <circle cx="10" cy="24" r="2.4" fill="var(--accent)" />
      <circle cx="30" cy="24" r="2.4" fill="var(--accent)" />
      <circle cx="20" cy="20" r="1.8" fill="var(--accent)" />
      <path
        d="M20 12.4V18.5M12 22.8L18.3 19.6M28 22.8L21.7 19.6M20 21.8V27.6"
        stroke="var(--accent)"
        strokeWidth="1.2"
      />
    </svg>
  );
}
