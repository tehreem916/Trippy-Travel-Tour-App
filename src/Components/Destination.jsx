import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";

import "./Destinationstyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot within a time frame.</p>

      <DestinationData 
      className="first-des"
      heading="Taal Volcano, Batangas"
      text="One of the most iconic views in the Philippines. If you're a nature lover, this is the place to be. Guides will assist you in navigating the area and providing historical context. If you are a history buff, you'll love learning about the volcano's past eruptions and the impact it has had on the surrounding area."
      img1={Mountain1}
      img2={Mountain2}
      
      />
      <DestinationData 
      className="first-des-reverse"
      heading="Mt. Daguldul, Batangas"
      text="if you're looking for a challenging hike with breathtaking views, Mt. Daguldul is the perfect destination. The trail takes you through lush forests and offers panoramic views of the surrounding mountains and coastline. It's a great way to connect with nature and get some exercise at the same time."
      img1={Mountain3}
      img2={Mountain4}
      
      />

      
    </div>
  );
};

export default Destination;