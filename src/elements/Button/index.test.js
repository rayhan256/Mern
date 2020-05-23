import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("should not be allowed to click if isDisabled is true", () => {
  const { container } = render(<Button isDisabled> </Button>);
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});
