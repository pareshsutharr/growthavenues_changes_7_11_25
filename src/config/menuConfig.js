/**
 * @typedef {'home' | 'about' | 'services' | 'insights' | 'downloads' | 'calculator' | 'contact'} MenuSectionId

/**
 * @typedef {'header' | 'footer'} MenuPlacement
 */

/**
 * @typedef {Object} MenuConfigItem
 * @property {MenuSectionId} id - Unique identifier for the menu entry.
 * @property {string} label - Display label for the navigation control.
 * @property {MenuSectionId} componentKey - Key that maps to the landing page component.
 * @property {string=} hash - Optional hash fragment to expose in the URL.
 * @property {MenuPlacement[]} placements - Navigation areas that should render this item.
 */

/**
 * Primary navigation configuration shared by header and footer menus.
 * The structure is intentionally plain JS with JSDoc so TypeScript-aware tooling
 * can infer the shape without forcing a TS migration.
 * @type {MenuConfigItem[]}
 */
export const MENU_CONFIG = [
  {
    id: "home",
    label: "Home",
    componentKey: "home",
    hash: "home",
    placements: ["header", "footer"],
  },
  {
    id: "about",
    label: "About Us",
    componentKey: "about",
    hash: "about",
    placements: ["header", "footer"],
  },
  {
    id: "services",
    label: "Services",
    componentKey: "services",
    hash: "services",
    placements: ["header", "footer"],
  },
  {
    id: "insights",
    label: "Insights",
    componentKey: "insights",
    hash: "insights",
    placements: ["header", "footer"],
  },
  {
    id: "sip",
    label: "Mutual Funds",
    componentKey: "sip",
    hash: "sip",
    placements: [],
  },
  {
    id: "downloads",
    label: "Downloads",
    componentKey: "downloads",
    hash: "downloads",
    placements: ["footer"],
  },
  {
    id: "calculator",
    label: "Calculators",
    componentKey: "calculator",
    hash: "calculator",
    placements: ["footer"],
  },
  {
    id: "contact",
    label: "Contact Us",
    componentKey: "contact",
    hash: "contact",
    placements: ["header", "footer"],
  },
];

/**
 * Cached lookups for quick access.
 */
export const MENU_LOOKUP = MENU_CONFIG.reduce((acc, item) => {
  acc[item.id] = item;
  if (item.hash) {
    acc[item.hash] = item;
  }
  return acc;
}, /** @type {Record<string, MenuConfigItem>} */ ({}));

export const DEFAULT_MENU_ID = "home";
