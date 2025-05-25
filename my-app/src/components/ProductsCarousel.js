// import React, { useEffect, useState } from 'react';
// import bag1 from '../assets/bopp-carry-bags.webp';
// import bag2 from '../assets/box-bag.webp';
// import bag3 from '../assets/d-cut.webp';
// import bag4 from '../assets/lehanga-cover.webp';
// import bag5 from '../assets/non-wovencarrybag.jpg';
// import './ProductsCarousel.css';

// const images = [
//   { src: bag1, label: 'BOPP Carry Bag' },
//   { src: bag2, label: 'Box Bag' },
//   { src: bag3, label: 'D-Cut Bag' },
//   { src: bag4, label: 'Lehenga Cover' },
//   { src: bag5, label: 'Non-Woven Carry Bag' },
// ];

// function ProductsCarousel() {
//   const [startIndex, setStartIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const getVisibleImages = () => {
//     const visible = [];
//     for (let i = 0; i < 4; i++) {
//       visible.push(images[(startIndex + i) % images.length]);
//     }
//     return visible;
//   };

//   return (
//     <div className="carousel-wrapper">
//       <p className="carousel-title">SPECIAL PRODUCTS OF US</p>
//       <div className="carousel-row">
//         {getVisibleImages().map((img, index) => (
//           <div key={index} className="carousel-img-container fade-in">
//             <img src={img.src} alt={img.label} className="carousel-img" />
//             <div className="carousel-label">{img.label}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductsCarousel;
import React, { useEffect, useState } from 'react';
import bag1 from '../assets/bopp-carry-bags.webp';
import bag2 from '../assets/box-bag.webp';
import bag3 from '../assets/d-cut.webp';
import bag4 from '../assets/lehanga-cover.webp';
import bag5 from '../assets/non-wovencarrybag.jpg';
import './ProductsCarousel.css';

const images = [
  { src: bag1, label: 'BOPP Carry Bag' },
  { src: bag2, label: 'Box Bag' },
  { src: bag3, label: 'D-Cut Bag' },
  { src: bag4, label: 'Lehenga Cover' },
  { src: bag5, label: 'Non-Woven Carry Bag' },
];

function ProductsCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setVisibleCount(1);
      } else if (width < 900) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(images[(startIndex + i) % images.length]);
    }
    return visible;
  };

  return (
    <div className="carousel-wrapper">
      <p className="carousel-title">SPECIAL PRODUCTS OF US</p>
      <div className="carousel-row">
        {getVisibleImages().map((img, index) => (
          <div key={index} className="carousel-img-container fade-in">
            <img src={img.src} alt={img.label} className="carousel-img" />
            <div className="carousel-label">{img.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsCarousel;
