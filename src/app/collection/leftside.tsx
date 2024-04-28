import React from "react";
import MainLayout from "../layouts/MainLayout";
import Marquee from "react-fast-marquee";

const Leftside: React.FC = () => {
  return (
    <MainLayout>
      <section>
        <div>
          <h3>Explore your first Collectible</h3>
          <h4>Meta Lives</h4>
          <h4>Live in Astrix</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            deleniti autem iste quae dolorem, saepe porro minima ipsum mollitia
            exercitationem pariatur laboriosam cum excepturi repellendus soluta.
            Exercitationem tenetur nulla.
          </p>
          <div>
            <h4>22k people intrested</h4>
            {/* <mar */}
            {/*             
            <Marquee direction="up" className="w-32 h-32">
              I can be a React component, multiple React components, or just
              some text.
            </Marquee> */}
            {/* <marquee direction="up">This text will scroll from bottom to up</marquee> */}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Leftside;
