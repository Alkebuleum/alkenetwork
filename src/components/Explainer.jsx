import { useState } from "react";

const VIDEO_ID = "q5jmcuY93Qc";

export default function Explainer() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="watch">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow"><span className="idx">02 —</span> Watch</span>
          <h2>See how Alké Network works</h2>
          <p className="section-lede">
            A short explainer on the governance model, the sandbox, and how institutions
            participate — in under three minutes.
          </p>
        </div>
        <div className="video-frame reveal">
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1`}
              title="Alké Network — explainer video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              className="video-thumb"
              onClick={() => setPlaying(true)}
              aria-label="Play the Alké Network explainer video"
            >
              <img
                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt=""
                loading="lazy"
              />
              <span className="video-play">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
