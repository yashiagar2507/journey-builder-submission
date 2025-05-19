import React from 'react';

interface FieldMapping {
  fieldName: string;
  source: string | null;
}

interface Props {
  mappings: FieldMapping[];
  onEdit: (fieldName: string) => void;
  onClear: (fieldName: string) => void;
}

const PrefillMapping: React.FC<Props> = ({ mappings, onEdit, onClear }) => {
  return (
    <div>
      <h3>Prefill Mappings</h3>
      <ul>
        {mappings.map((m) => (
          <li key={m.fieldName}>
            <span>{m.fieldName}: {m.source || 'No prefill'}</span>
            <button onClick={() => onEdit(m.fieldName)}>Edit</button>
            {m.source && <button onClick={() => onClear(m.fieldName)}>Clear</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrefillMapping;
