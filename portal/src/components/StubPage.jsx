import { InboxIcon } from "./icons";

export default function StubPage({ eyebrow, title, description }) {
  return (
    <>
      <div className="crumbs">
        Alké Network &rsaquo; <b>{title}</b>
      </div>
      <div className="page-title-row">
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
    </>
  );
}
