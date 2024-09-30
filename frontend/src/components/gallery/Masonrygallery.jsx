// import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// const images = [
//     'https://source.unsplash.com/random/800x600',
//     'https://source.unsplash.com/random/801x600',
//     'https://source.unsplash.com/random/802x600',
//     'https://source.unsplash.com/random/803x600',
//     'https://source.unsplash.com/random/804x600',
//     'https://source.unsplash.com/random/805x600',
//   ];
  
//   const Masonrygallery = () => {
//     return (
//       <div className="p-8">
//         <ResponsiveMasonry
//           columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
//         >
//           <Masonry gutter="10px">
//             {images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 className="w-full block"
//                 alt={`Masonry Item ${index}`}
//               />
//             ))}
//           </Masonry>
//         </ResponsiveMasonry>
//       </div>
//     );
//   };
  
//   export default Masonrygallery;

import { useState, useEffect, useCallback } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const MasonryGallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImages = useCallback(async () => {
    setLoading(true);
    setError(null); // Clear previous errors
    try {
      const response = await fetch('/images.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const newImages = data.slice((page - 1) * 6, page * 6); // Adjust the slice logic
      if (newImages.length === 0) {
        setError('No more images to load');
      } else {
        setImages((prevImages) => [...prevImages, ...newImages]);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
      setError('Failed to load images');
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="">
      
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className="w-full block"
              alt={`Masonry Item ${index}`}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <div className="text-center mt-4">
      {error && <div className="text-red-500 mb-4">{error}</div>}
        <button
          onClick={loadMoreImages}
          className="bg-orange-400 hover:bg-indigo-600 text-white px-6 py-2 font-semibold focus:outline-none"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </div>
  );
};

export default MasonryGallery;


