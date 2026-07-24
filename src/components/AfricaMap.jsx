import { AFRICA_COUNTRY_PATHS } from "../data/africaPaths";

export default function AfricaMap({ bordered = false }) {
  return (
    <g className={bordered ? "country-set bordered" : "country-set"}>
      {AFRICA_COUNTRY_PATHS.map((c, i) => (
        <path key={`${c.id}-${i}`} className="country" d={c.d} />
      ))}
    </g>
  );
}
