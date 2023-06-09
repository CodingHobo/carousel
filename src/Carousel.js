import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    if (currCardIdx !== photos.length - 1) {
      setCurrCardIdx(currCardIdx + 1);
    }
  }

  //Decrements currCardIdx state by 1
  function goBackward() {
    if (currCardIdx > 0) {
      setCurrCardIdx(currCardIdx - 1);
    }
  }

  // set visibilty for left arrow;
  let leftArrowVis;

  if (currCardIdx === 0) {
    leftArrowVis = "hidden";
  } else {
    leftArrowVis = "";
  }

  // set visibilty for right arrow;
  let rightArrowVis;

  if (currCardIdx +1 === total) {
    rightArrowVis = "hidden";
  } else {
    rightArrowVis = "";
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
          <i
            className={`bi bi-arrow-left-circle ${leftArrowVis}`}
            onClick={goBackward}
          />

        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
          <i
            className={`bi bi-arrow-right-circle ${rightArrowVis}`}
            onClick={goForward}
          />
      </div>
    </div>
  );
}

export default Carousel;
