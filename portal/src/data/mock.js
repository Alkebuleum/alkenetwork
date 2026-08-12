// Mock development data — no backend exists yet for app.alke.network.
// All institutions and people below are fictional. See services/README
// for the API contract this data stands in for.

export const CURRENT_USER = {
  name: "Samuel Achebe",
  initials: "SA",
  institution: "University of Kiraya",
  role: "Program Lead",
};

export const INTELLIGENCE_ITEMS = [
  {
    id: "int-1",
    category: "AI",
    sector: "Higher Education",
    title: "AI agents are moving into institutional workflows",
    why: "Universities are beginning to automate repetitive student and administrative workflows while developing governance around institutional data.",
  },
  {
    id: "int-2",
    category: "DLT",
    sector: "Financial Infrastructure",
    title: "Central-bank consortia are testing shared settlement ledgers",
    why: "Several central-bank-convened pilots moved from proof-of-concept to limited production this quarter — relevant if your institution touches cross-border payments.",
  },
  {
    id: "int-3",
    category: "Sovereignty",
    sector: "Cross-sector",
    title: "Open-weight model adoption is accelerating among public institutions",
    why: "Institutions are weighing local deployment against vendor APIs as open-weight model quality closes the gap.",
  },
];

export const PEER_ACTIVITY = [
  {
    id: "peer-1",
    institution: "Dande Teaching Hospital",
    sector: "Healthcare",
    country: "Kenya",
    action: "started a sandbox on AI triage-note summarization",
  },
  {
    id: "peer-2",
    institution: "Meridian Savings Bank",
    sector: "Banking",
    country: "Philippines",
    action: "published sandbox findings on stablecoin settlement",
  },
  {
    id: "peer-3",
    institution: "Coastal Registrar's Office",
    sector: "Public Records",
    country: "Jamaica",
    action: "joined the Trusted Records & Identity working group",
  },
];

export const SANDBOX_PROJECTS = [
  {
    id: "sbx-1",
    name: "Cross-Border Credential Verification",
    practice: "DLT Practice",
    phase: "Sandbox",
    progress: 68,
    team: "Registrar · CIO · Alké Advisor",
    nextMilestone: "Verification test with sample cohort",
  },
  {
    id: "sbx-2",
    name: "Admissions Document Review Agent",
    practice: "AI Practice",
    phase: "Prototype",
    progress: 34,
    team: "Admissions Lead · Data Governance · Alké Advisor",
    nextMilestone: "Human-oversight review checkpoint",
  },
];

export const WORKING_GROUPS = [
  { id: "wg-1", name: "Institutional AI Governance", members: 24, meetsNext: "Aug 19" },
  { id: "wg-2", name: "Higher Education & Credentials", members: 18, meetsNext: "Aug 21" },
];

export const RECOMMENDED_ACTION = {
  title: "Complete your Sovereignty Center baseline assessment",
  body: "Your institution hasn't set a baseline for technology dependency yet. It takes about 12 minutes and unlocks tailored recommendations.",
  cta: "Start assessment",
};

export const NOTIFICATIONS_COUNT = 3;

export const PHASES = ["Discover", "Design", "Prototype", "Sandbox", "Measure", "Decide"];

export function phaseIndex(phase) {
  return PHASES.indexOf(phase);
}
