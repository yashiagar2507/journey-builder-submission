import type { Form } from '../formTypes';
export const getAllParentForms = (
  forms: Form[],
  targetFormId: string,
  visited = new Set<string>()
): Form[] => {
  const form = forms.find(f => f.id === targetFormId);
  if (!form || visited.has(form.id)) return [];

  visited.add(form.id);

  const directDeps = form.dependencies
    .map(depId => forms.find(f => f.id === depId))
    .filter((f): f is Form => !!f);

  const indirectDeps = directDeps.flatMap(dep =>
    getAllParentForms(forms, dep.id, visited)
  );

  return [...directDeps, ...indirectDeps];
};
