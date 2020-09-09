import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function DialogForm({ children, onClose = () => {}, title = '', ...rest }) {
  return (
    <Dialog
      fullWidth
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      {...rest}
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>{children({ onClose, ...rest })}</DialogContent>
    </Dialog>
  );
}

export default DialogForm;
