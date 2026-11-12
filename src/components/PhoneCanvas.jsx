import { useEffect, useRef } from "react";
import { registerPhone } from "../lib/phoneScene";

/* A canvas showing the ALKÉ Network app on a phone.
   scene: "hero" (two phones) or "mining" (one phone).
   src / srcBack: optional real screenshot paths (e.g. "/screens/mining.jpg")
   that replace the drawn stand-in screens. */
export default function PhoneCanvas({ scene, src = "", srcBack = "", label }) {
  const ref = useRef(null);
  useEffect(() => registerPhone(ref.current), [scene, src, srcBack]);
  return <canvas ref={ref} data-phone={scene} data-src={src} data-src-back={srcBack} role="img" aria-label={label} />;
}
