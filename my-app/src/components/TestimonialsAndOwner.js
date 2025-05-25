// import React from 'react';
// import './TestimonialsAndOwner.css'; // Import CSS file

// const testimonials = [
//   {
//     name: 'John Doe',
//     role: 'CEO, ABC Corp',
//     message: 'This company transformed our workflow. Highly recommended!',
//   },
//   {
//     name: 'Jane Smith',
//     role: 'CTO, TechFlow',
//     message: 'Exceptional service and support throughout our journey.',
//   },
//   {
//     name: 'Jane Smith',
//     role: 'CTO, TechFlow',
//     message: 'Exceptional service and support throughout our journey.',
//   },
//   {
//     name: 'Jane Smith',
//     role: 'CTO, TechFlow',
//     message: 'Exceptional service and support throughout our journey.',
//   }, 
//   {
//     name: 'Jane Smith',
//     role: 'CTO, TechFlow',
//     message: 'Exceptional service and support throughout our journey.',
//   },{
//     name: 'Jane Smith',
//     role: 'CTO, TechFlow',
//     message: 'Exceptional service and support throughout our journey.',
//   },
// ];

// const owner =[{
//   name: 'Pankaj Bhimrajka',
//   title: 'Founder & Director',
//   bio: 'Pankaj brings over 30 years of experience in driving innovation and delivering high-impact products of bags.',
//   image: '/owner.jpg', // Replace with actual image path
// },{
//   name: 'Pankaj Bhimrajka',
//   title: 'Founder & Director',
//   bio: 'Pankaj brings over 30 years of experience in driving innovation and delivering high-impact products of bags.',
//   image: '/owner.jpg', // Replace with actual image path
// }] ;

// const TestimonialsAndOwner = () => {
//   return (
//     <section className="testimonials-owner-section">
//       {/* Testimonials */}
//       <div className="testimonials">
//         <h2 className="section-title">What Our Clients Say</h2>
//         <div className="testimonial-list">
//           {testimonials.map((t, index) => (
//             <div key={index} className="testimonial-card">
//               <p className="message">"{t.message}"</p>
//               <p className="name">{t.name}</p>
//               <p className="role">{t.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Owner Highlight */}
//       <div className="owner-highlight">
//         <img src={owner.image} alt={owner.name} className="owner-image" />
//         <div className="owner-info">
//           <h3 className="owner-name">{owner.name}</h3>
//           <p className="owner-title">{owner.title}</p>
//           <p className="owner-bio">{owner.bio}</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsAndOwner;
import React from 'react';
import './TestimonialsAndOwner.css'; // Import your CSS
import pankaj from '../assets/pankaj.jpg'
import nishank from '../assets/nishank.jpg'

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, ABC Corp',
    message: 'This company transformed our workflow. Highly recommended!',
  },
  {
    name: 'Jane Smith',
    role: 'CTO, TechFlow',
    message: 'Exceptional service and support throughout our journey.',
  },
  // Add more unique testimonials if needed
];

const owners = [
  {
    name: 'Pankaj Bhimrajka',
    title: 'Founder & Director',
    bio: 'Pankaj brings over 30 years of experience in driving innovation and delivering high-impact products of bags.',
    image: pankaj, // Replace with actual image path
  },
  {
    name: 'Nishank Bhimrajka',
    title: 'Co-Founder & CMO',
    bio: 'Nishasnk has led marketing for over a decade with deep focus on sustainable branding and eco-friendly packaging.',
    image: nishank, // Replace with actual image path
  },
];

const TestimonialsAndOwner = () => {
  return (
    <section className="testimonials-owner-section">
      {/* Testimonials Section */}
      <div className="testimonials">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-list">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <p className="message">"{t.message}"</p>
              <p className="name">{t.name}</p>
              <p className="role">{t.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Owners Section */}
      <div className="owners">
        <h2 className="section-title">Meet Our Founders</h2>
        <div className="owner-list">
          {owners.map((o, index) => (
            <div key={index} className="owner-highlight">
              <img src={o.image} alt={o.name} className="owner-image" />
              <div className="owner-info">
                <h3 className="owner-name">{o.name}</h3>
                <p className="owner-title">{o.title}</p>
                <p className="owner-bio">{o.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndOwner;
