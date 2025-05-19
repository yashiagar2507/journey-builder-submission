import React from 'react';

interface Form {
  id: string;
  name: string;
}

interface Props {
  forms: Form[];
  onSelect: (formId: string) => void;
}

const FormList: React.FC<Props> = ({ forms, onSelect }) => {
  return (
    <div>
      <h2>Forms</h2>
      <ul>
        {forms.map((form) => (
          <li key={form.id}>
            <button onClick={() => onSelect(form.id)}>{form.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormList;
