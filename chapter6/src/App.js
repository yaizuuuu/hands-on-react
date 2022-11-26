import React, { useState } from 'react';
import colorData from './color-data.json';
import ColorList from './ColorList';
import { v4 } from 'uuid';
import AddColorForm from './AddColorForm';

// function App() {
//   const [colors, setColors] = useState(colorData);
//
//   return <>
//     <AddColorForm
//       onNewColor={(title, color) => {
//         setColors([
//           ...colors,
//           {
//             id: v4(),
//             rating: 0,
//             title,
//             color,
//           },
//         ]);
//       }
//       }
//     />
//     <ColorList
//       colors={colors}
//       onRemoveColor={id => {
//         const newColors = colors.filter(color => color.id !== id);
//         setColors(newColors);
//       }}
//       onRateColor={(id, rating) => {
//         const newColors = colors.map(color => {
//           if (color.id !== id) return color;
//
//           return { ...color, rating };
//         });
//
//         setColors(newColors);
//       }}
//     />
//   </>;
// }

// Contextを使う
function App() {
  return <>
    <AddColorForm />
    <ColorList />
  </>;
}

export default App;
