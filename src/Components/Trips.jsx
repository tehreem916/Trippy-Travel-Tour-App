import "./Tripstyles.css";
import TripData from "./TripData.jsx";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";




function Trips() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData 
                image={Trip1}
                heading="Trip to Indonesia"
                text="Indonesia, officially the Republic of Indonesia, is a unitary sovereign state and transcontinental country.It consists of country in Southeast Asia and Oceania between the Indian and Pacific oceans. It is the world's largest island country, with more than seventeen thousand islands, and at 1,904,569 square kilometres (735,358 sq mi), the 14th-largest by land area and the 7th-largest in combined sea and land area."
                />
                <TripData 
                image={Trip2}
                heading="Trip to Malaysia"
                text="Malaysia is a southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It is known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."
                />
                <TripData 
                image={Trip3}
                heading="Trip to France"
                text="France, officially the French Republic, is a transcontinental country comprising territory in western Europe and several overseas regions and territories. The Metropole is located in mainland Europe, while the overseas regions and territories consist of French Guiana in South America, and several islands in the Indian and Pacific oceans."
                />



            </div>
           
        </div>
    );
}
export default Trips;