import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
  render(
    <Card />
    );
});

it("matches snapshot", function () {
  const { container } = render(<Card photos = {TEST_IMAGES}
    title= "images for testing" />);
  expect(container).toMatchSnapshot();
});