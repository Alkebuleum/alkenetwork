import { InboxIcon } from "./icons";

export default function StubPage({ eyebrow, title, description }) {
  return (
    <div className="page">
      <div className="page-head">
        <div>
          {eyebrow && <div className="page-eyebrow">{eyebrow}</div>}
          <h1>{title}</h1>
        </div>
      </div>
      <div className="empty-state">
        <InboxIcon />
        <h3>This module isn't built yet</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
