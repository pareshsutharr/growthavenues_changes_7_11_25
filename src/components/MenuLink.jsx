import React, { useCallback } from "react";
import { MENU_LOOKUP } from "../config/menuConfig";

/**
 * @typedef {import("../config/menuConfig").MenuConfigItem} MenuConfigItem
 */

/**
 * Shared navigation control used by header and footer.
 *
 * @param {Object} props
 * @param {MenuConfigItem} props.item
 * @param {boolean} props.isActive
 * @param {(item: MenuConfigItem) => void} props.onSelect
 * @param {string=} props.className
 * @param {string=} props.activeClassName
 * @param {React.ReactNode=} props.children
 * @param {boolean=} props.disableHash
 */
export default function MenuLink({
  item,
  isActive,
  onSelect,
  className = "",
  activeClassName = "",
  children,
  disableHash = false,
  ...rest
}) {
  const handleActivate = useCallback(
    (event) => {
      if (event && typeof event.preventDefault === "function") {
        event.preventDefault();
      }
      onSelect(item);
    },
    [item, onSelect]
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (!event) return;
      if (event.key === " ") {
        event.preventDefault();
        onSelect(item);
      }
    },
    [item, onSelect]
  );

  const classes = [className, isActive ? activeClassName : ""]
    .filter(Boolean)
    .join(" ");

  const hash = item.hash || item.id;
  const href = disableHash ? undefined : `#${hash}`;

  return (
    <a
      data-menu-id={item.id}
      href={href}
      className={classes || undefined}
      aria-current={isActive ? "page" : undefined}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {children ?? item.label}
    </a>
  );
}

export function resolveMenuItem(idOrHash) {
  return MENU_LOOKUP[idOrHash];
}
