import React from 'react';
import Color from './Color';
import { useColors } from './ColorProvider';

// export default function ColorList({
//   colors = [],
//   onRemoveColor = f => f,
//   onRateColor = f => f,
// }) {
//   if (!colors.length) return <div>No Colors</div>;
//
//   return (
//     <div>
//       {
//         colors.map(color => <Color
//           key={color.id}
//           {...color}
//           onRemove={onRemoveColor}
//           onRate={onRateColor}
//         />)
//       }
//     </div>
//   );
// }

// Contextを使う
export default function ColorList() {
  const { colors } = useColors();

  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

  return <div className="color-list">{colors.map(color => <Color key={color.id} {...color} />)}</div>;
}