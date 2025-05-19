import React, { useEffect, useState } from 'react';
import { fetchFormGraph } from './services/api';
import FormList from './components/FormList';
import PrefillMapping from './components/PrefillMapping';
import PrefillModal from './components/PrefillModal';
import { getAllParentForms } from './utils/traverseGraph';
import type { Form } from './formTypes'; 

interface FieldMapping {
  fieldName: string;
  source: string | null;
}

const App: React.FC = () => {
  const [forms, setForms] = useState<Form[]>([]);
  const [selectedFormId, setSelectedFormId] = useState<string | null>(null);
  const [mappings, setMappings] = useState<FieldMapping[]>([]);
  const [modalField, setModalField] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchFormGraph();
        setForms(data.forms);
      } catch (e) {
        console.error('Failed to load forms', e);
      }
    };
    load();
  }, []);

  const handleSelectForm = (formId: string) => {
    setSelectedFormId(formId);
    const form = forms.find((f) => f.id === formId);
    if (form) {
      setMappings(form.fields.map((field) => ({ fieldName: field, source: null })));
    }
  };

  const handleEditMapping = (field: string) => {
    setModalField(field);
  };

  const handleClearMapping = (field: string) => {
    setMappings((prev) =>
      prev.map((m) => (m.fieldName === field ? { ...m, source: null } : m))
    );
  };

  const handleSelectSource = (source: string) => {
    if (modalField) {
      setMappings((prev) =>
        prev.map((m) => (m.fieldName === modalField ? { ...m, source } : m))
      );
      setModalField(null);
    }
  };

  const selectedForm = forms.find((f) => f.id === selectedFormId);

  // Get DAG sources + global sources
  const availableSources = [
    ...(selectedForm
      ? getAllParentForms(forms, selectedForm.id)
          .flatMap((form) => form.fields.map((field) => `${form.name}.${field}`))
      : []),
    'GlobalData1',
    'GlobalData2',
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Journey Builder</h1>
      <FormList forms={forms} onSelect={handleSelectForm} />
      {selectedForm && (
        <PrefillMapping
          mappings={mappings}
          onEdit={handleEditMapping}
          onClear={handleClearMapping}
        />
      )}
      {modalField && (
        <PrefillModal
          fieldName={modalField}
          sources={availableSources}
          onSelect={handleSelectSource}
          onClose={() => setModalField(null)}
        />
      )}
    </div>
  );
};

export default App;
