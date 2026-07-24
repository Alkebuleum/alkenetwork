// Shared network-mark icon: circle + triangle "link" + spokes + nodes.
export default function Mark({ className, ...rest }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" {...rest}>
      <g stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" fill="none">
        <circle cx="50" cy="50" r="44" strokeWidth="6" />
        <path d="M37 31 L65 42 M65 42 L38 63 M38 63 L37 31" />
        <path d="M37 31 L19.5 19.5 M37 31 L50 6.5" />
        <path d="M65 42 L80.5 19.5 M65 42 L93.5 50" />
        <path d="M38 63 L19.5 80.5 M38 63 L50 93.5" />
      </g>
      <g fill="currentColor">
        <circle cx="37" cy="31" r="7" />
        <circle cx="65" cy="42" r="7" />
        <circle cx="38" cy="63" r="7" />
      </g>
    </svg>
  );
}
