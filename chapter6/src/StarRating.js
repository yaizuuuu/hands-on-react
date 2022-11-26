import React, { useState } from 'react';
import Star from './Star';

// export default function StarRating({
//   style = {},
//   totalStars = 5,
//   ...props
// }) {
//   const [selectedStars, setSelectedStars] = useState(0);
//
//   return (
//     <div style={{ padding: '5px', ...style }} {...props}>
//       {[...Array(totalStars)].map((n, i) => (
//         <Star
//           key={i}
//           selected={selectedStars > i}
//           onSelect={() => setSelectedStars(i + 1)}
//         />
//       ))}
//       <p>{selectedStars} of {totalStars}</p>
//     </div>
//   );
// }

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  onRate = f => f,
}) {
  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>{selectedStars} of {totalStars}</p>
    </>
  );
}
