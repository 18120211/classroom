import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function NewClassForm({open, handleClickOpen, handleClose, handleCreate, onChangeClassName}) {
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        + Tạo lớp học mới
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Tạo lớp học</DialogTitle>
        <DialogContent>
          <TextField
            onChange={onChangeClassName}
            autoFocus="true"
            margin="dense"
            id="className"
            label="Tên lớp"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button onClick={handleCreate}>Tạo</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
