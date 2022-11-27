import React, { useEffect, useState } from 'react';
import Checkbox from './Checkbox';
import { UseAnyKeyToRender } from './UseAnyKeyToRender';
import WordCount from './WordCount';

// const word = ['gnar'];

function App() {
  // const [val, set] = useState('');
  // const [phrase, setPhrase] = useState('example phrase');
  //
  // const createPhrase = () => {
  //   setPhrase(val);
  //   set('');
  // };
  //
  // useEffect(() => {
  //   console.log(`typing "${val}"`);
  // }, [val]);
  //
  // useEffect(() => {
  //   console.log(`saved phrase: "${phrase}"`);
  // }, [phrase]);
  //
  // useEffect(() => {
  //   console.log('only once after initial render');
  //
  //   return () => console.log('rerender');
  // }, [val, phrase]);

  // UseAnyKeyToRender();
  //
  // useEffect(() => {
  //   console.log('fresh render');
  // }, [word]);

  // return (
  //   <div className="App">
  //     <Checkbox />
  //
  //     <label>Favorite phrase:</label>
  //     <input
  //       value={val}
  //       placeholder={phrase}
  //       onChange={e => set(e.target.value)}
  //     />
  //     <button onClick={createPhrase}>send</button>
  //   </div>
  // );

  // return <h1>Open the console</h1>;

  return <WordCount>You are not going to believe this but ...</WordCount>;
}

export default App;
