export default function DocIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M4 1.5h5.5L12 4v10a.5.5 0 0 1-.5.5h-7A.5.5 0 0 1 4 14V2a.5.5 0 0 1 .5-.5z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M9 1.5V4h3" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none" />
      <path d="M6 8h4M6 10.5h4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}
