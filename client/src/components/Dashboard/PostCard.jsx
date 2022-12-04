import axios from "axios";
import React, { useEffect, useState } from "react";

const PostCard = (prop) => {
  const [imageURL, setImageURL] = useState("");
  useEffect(() => {
    const fetchImage = async () => {
      if (prop.data.image_id === "") {
        setImageURL("");
      } else {
        let imgURL = await axios.get(
          `http://localhost:8080/image/${prop.data.image_id}`
        );
        imgURL = imgURL.data.image_data;
        setImageURL(`data:image/jpeg;base64,${imgURL}`);
      }
    };
    fetchImage();
  });
  return (
    <div className="h-fit bg-[white] m-2 rounded">
      <div className=" p-2 text-[1.5rem] font-[600] font-Inconsolata">
        {prop.data.title}
      </div>
      <div className="">{imageURL !== "" && <img src={imageURL} />}</div>
      <div className=" p-2">{prop.data.content}</div>
    </div>
  );
};

export default PostCard;
