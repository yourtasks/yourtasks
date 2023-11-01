"use client";

import { useState } from "react";

const Description = () => {
  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore((prev) => !prev);
  };

  return (
    <p
      onClick={handleMore}
      className={`text-sm opacity-80 ${!more && "line-clamp-5"}`}
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque culpa
      sunt labore assumenda, fuga necessitatibus aut ipsa laudantium aliquid
      repudiandae veritatis est nulla accusantium adipisci harum magnam
      blanditiis voluptatibus odio? Vero laudantium fugiat nisi, quasi aliquid
      praesentium delectus. Deleniti quo beatae suscipit id voluptates
      praesentium fugiat sequi neque necessitatibus ex exercitationem
      consectetur eius voluptas voluptatum, provident debitis delectus
      aspernatur cumque. Quaerat odit, repellendus dicta placeat cupiditate vero
      excepturi. Ex distinctio cupiditate soluta enim minus recusandae animi
      modi. Ipsam architecto, blanditiis, a, labore eum sed commodi quos
      explicabo fugiat ex dolores? Facere, ducimus harum ut esse cupiditate cum
      quisquam animi obcaecati beatae, soluta atque qui hic amet rerum
      necessitatibus fugit, voluptatibus ad consequatur earum aut ipsum fuga
      doloremque eaque! Facilis, similique? Maxime rem cum beatae expedita dolor
      nisi molestiae doloribus ad impedit placeat sapiente quasi totam laborum
      accusamus natus quidem doloremque ipsam, consectetur ea dicta sit amet! Ea
      quibusdam quae esse.
    </p>
  );
};

export default Description;
