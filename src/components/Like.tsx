import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";

interface Props {
  onClick: (liked: boolean) => void;
  size: number;
}

const Like = ({ size, onClick }: Props) => {
  const [liked, setLiked] = useState(true);

  const toggle = () => {
    setLiked(!liked);
    onClick(liked);
  };

  if (liked) {
    return <IoHeartOutline size={size} onClick={toggle} />;
  } else {
    return <IoHeart color="red" size={size} onClick={toggle} />;
  }
};

export default Like;
