---
to: src/dialogs/<%= h.changeCase.pascal(name) %>Dialog.js
---
import React from 'react';
import DialogForm from 'components/DialogForm';
import <%= h.changeCase.pascal(name) %>Form from 'forms/<%= h.changeCase.pascal(name) %>Form';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import AddButton from 'components/AddButton';

function <%= h.changeCase.pascal(name) %>Dialog({
  onSubmit,
  initialValues,
  onClose = () => {},
  onAdd = () => {},
  open = false,
}) {
  return (
    <div>
      <DialogForm title="<%= title %>" open={open} onClose={onClose}>
        {({ onClose }) => (
          <<%= h.changeCase.pascal(name) %>Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            footer={({ submitting }) => (
              <DialogActions>
                {!submitting && (
                  <Button onClick={onClose} color="primary">
                    Cancelar
                  </Button>
                )}
                <Button
                  variant="contained"
                  disabled={submitting}
                  type="submit"
                  color="primary"
                >
                  Enviar
                </Button>
              </DialogActions>
            )}
          />
        )}
      </DialogForm>
      <AddButton onClick={onAdd} />
    </div>
  );
}

export default <%= h.changeCase.pascal(name) %>Dialog;
