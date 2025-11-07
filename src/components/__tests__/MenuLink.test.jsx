import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MenuLink from "../MenuLink";
import { MENU_CONFIG } from "../../config/menuConfig";

describe("MenuLink", () => {
  const sampleItem = MENU_CONFIG[0];

  it("prevents default navigation and notifies selection on click", () => {
    const handleSelect = jest.fn();
    const { getByText } = render(
      <MenuLink item={sampleItem} isActive={false} onSelect={handleSelect} />
    );
    const anchor = getByText(sampleItem.label);
    const hrefBefore = window.location.href;
    fireEvent.click(anchor);
    expect(window.location.href).toBe(hrefBefore);
    expect(handleSelect).toHaveBeenCalledWith(sampleItem);
  });

  it("activates on space key press", () => {
    const handleSelect = jest.fn();
    const { getByText } = render(
      <MenuLink item={sampleItem} isActive={false} onSelect={handleSelect} />
    );
    const anchor = getByText(sampleItem.label);
    const spaceEvent = new KeyboardEvent("keydown", {
      key: " ",
      bubbles: true,
      cancelable: true,
    });
    anchor.dispatchEvent(spaceEvent);
    expect(spaceEvent.defaultPrevented).toBe(true);
    expect(handleSelect).toHaveBeenCalledWith(sampleItem);
  });

  it("marks active item with aria-current", () => {
    const { getByText } = render(
      <MenuLink item={sampleItem} isActive onSelect={jest.fn()} />
    );
    const anchor = getByText(sampleItem.label);
    expect(anchor).toHaveAttribute("aria-current", "page");
  });
});
