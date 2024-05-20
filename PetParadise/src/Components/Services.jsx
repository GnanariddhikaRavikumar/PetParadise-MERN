// import React from 'react';
// import Navigationbar from './Navigationbar';
// import './Services.css';

// const Service = () => {
//   const cardContent = [
//     {
//       name: "David Dell",
//       description: "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
//       image: "https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg"
//     },
//     {
//       name: "David Dell",
//       description: "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
//       // image: "path/to/profile1.jpg"
//     },
//     {
//       name: "David Dell",
//       description: "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
//       // image: "path/to/profile1.jpg"
//     },
//     {
//       name: "David Dell",
//       description: "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
//       // image: "path/to/profile1.jpg"
//     },
//     {
//       name: "David Dell",
//       description: "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
//       // image: "path/to/profile1.jpg"
//     },
//     {
//       name: "David Dell",
//       description: "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
//       // image: "path/to/profile1.jpg"
//     },
//     // Add more card objects here
//   ];

//   return (
//     <>
//       <div>
//         <Navigationbar />
//       </div>
//       <br/><br/><br/>
//       <div className="card-container">
//         {cardContent.map((card, index) => (
//           <div key={index} className="card">
//             <div className="image-content">
//               <span className="overlay"></span>
//               <div className="card-image">
//                 {card.image && <img src={card.image} alt={card.name} className="card-img" />}
//               </div>
//             </div>
//             <div className="card-content">
//               <h2 className="name">{card.name}</h2>
//               <p className="description">{card.description}</p>
//               <button className="button">View More</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Service;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navigationbar from './Navigationbar';
import './Services.css';

const Service = () => {
  const [cardContent, setCardContent] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/doctors')
      .then(response => {
        setCardContent(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div>
        <Navigationbar />
      </div>
      <br/><br/><br/><br/>
      <h3>For any Queries or Consultancy contact the nearby doctor</h3>
      <div className="card-container">
        {cardContent.map((card, index) => (
          <div key={index} className="card">
            <div className="image-content">
              <span className="overlay"></span>
              <div className="card-image">
                <img src={card.image_url} alt={card.name} className="card-img" />
              </div>
            </div>
            <div className="card-content">
              <h2 className="name">{card.name}</h2>
              <p className="description"><strong>Qualification:</strong>{card.qualification}</p>
              <p className="description"><strong>Contact:</strong>{card.contact}</p>
              <p className="description"><strong>Hospital Location:</strong>{card.city}</p>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
