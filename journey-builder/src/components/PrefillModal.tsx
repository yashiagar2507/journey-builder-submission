import React from 'react';

interface Props {
  fieldName: string;
  sources: string[];
  onSelect: (source: string) => void;
  onClose: () => void;
}

const PrefillModal: React.FC<Props> = ({ fieldName, sources, onSelect, onClose }) => {
  return (
    <div className="modal">
      <h4>Select Prefill Source for {fieldName}</h4>
      <ul>
        {sources.map((source) => (
          <li key={source}>
            <button onClick={() => onSelect(source)}>{source}</button>
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PrefillModal;
