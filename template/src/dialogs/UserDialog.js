import React from 'react';
import DialogForm from 'components/DialogForm';
import UserForm from 'forms/UserForm';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import AddButton from 'components/AddButton';

function UserDialog({
  onSubmit,
  initialValues,
  onClose = () => {},
  onAdd = () => {},
  open = false,
}) {
  return (
    <div>
      <DialogForm title="Usuário" open={open} onClose={onClose}>
        {({ onClose }) => (
          <UserForm
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

export default UserDialog;
