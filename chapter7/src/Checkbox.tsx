import React, { useEffect, useState } from 'react';

function Checkbox() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  }, [checked]);

  return (
    <div>
      <input
        type="checkbox"
        value={checked.toString()}
        onChange={() => setChecked(checked => !checked)}
      />
      {checked ? 'checked' : 'not checked'}
    </div>
  );
}

export default Checkbox;
