import PoolImg from "../Images/aboutImg/13.jpg";
import YogaImg from "../Images/aboutImg/dylan-gillis-YJdCZba0TYE-unsplash.jpg";
import Catering from "../Images/aboutImg/catering.jpg";
import FitnessImg from "../Images/aboutImg/victor-freitas-cE31OaOfjbw-unsplash.jpg";
import Workshops from "../Images/aboutImg/IMG_8639.jpg";
import NetworkingImg from "../Images/aboutImg/photo-1577962917302-cd874c4e31d2.jpg";

import { v4 as uuidv4 } from "uuid";

function aboutImages() {
  return [
    {
      title: "Networking",
      img: NetworkingImg,
      id: uuidv4(),
    },
    {
      title: "Yoga",
      img: YogaImg,
      id: uuidv4(),
    },
    {
      title: "Catering",
      img: Catering,
      id: uuidv4(),
    },
    {
      title: "Fitness",
      img: FitnessImg,
      id: uuidv4(),
    },
    {
      title: "Swimming",
      img: PoolImg,
      id: uuidv4(),
    },
    {
      title: "Workshop",
      img: Workshops,
      id: uuidv4(),
    },
  ];
}

export default aboutImages;
