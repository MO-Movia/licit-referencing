import { REFERENCE } from './ReferenceNodeSpec';
import { EditorView } from 'prosemirror-view';

export function insertReference(
  view: EditorView,
  id: string,
  docId: string,
  docLabel: string
) {
  const node = view.state?.schema.nodes[REFERENCE].create({
    docId,
    docLabel,
    id,
  });
  const tr = view.state.tr.replaceSelectionWith(node);
  view.dispatch(tr);
}
