import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
  // unsure about what currNum should be
  render(
    <Card
      caption={TEST_IMAGES[0].caption}
      src={TEST_IMAGES[0].src}
      currNum={1}
      totalNum={TEST_IMAGES.length}
    />
  );
});

it("matches snapshot", function () {
  const { container } = render(
    <Card
      caption={"testing image 1"}
      src={"test1.com"}
      currNum={1}
      totalNum={3}
    />);
  expect(container).toMatchSnapshot();
});