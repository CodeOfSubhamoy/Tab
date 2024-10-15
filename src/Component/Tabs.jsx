import { useState } from 'react';

export default function Tabs({ defaultValue, items }) {
  const [currvalue, setValue] = useState(
    defaultValue ?? items[0].value,
  );

  return (
    <div className="tabs">
      <div className="tabs-list">
        {items.map(({label, value})=>{
            const isActive = value === currvalue;
            return(
                <button
                    key={value}
                    type='button'
                    className={[
                        'tabs-list-item',  isActive && 'tabs-list-item--active'
                    ].filter(Boolean).join(' ')}
                    onClick={()=>setValue(value)}
                >{label}</button>
            )
        })}
      </div>
      <div>
        {items.map(({value, panel})=>{
            return <p key={value} hidden={value !== currvalue}>{panel}</p>
        })}
      </div>
    </div>
  );
}
