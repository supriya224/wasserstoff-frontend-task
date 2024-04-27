import Image from "next/image";
import React from "react";

const CollectibleData = () => {
  return (
    <section>
      <div>
        <div>
          <h3>2024</h3>
          <p>by Pablo</p>
        </div>
        <div>
          <h3>Collectible Name</h3>
        </div>
        <div>
            <Image src="https://astrix.security/wp-content/uploads/2022/06/og.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default CollectibleData;
