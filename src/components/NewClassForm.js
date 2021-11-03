import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function NewClassForm() {
  const [open, setOpen] = React.useState(false);
  const [className, setClassName] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = async () => {
    console.log(className, 'classname');
    const requestOptions = {
      method: "POST",
      headers: {
        "Contect-Type": "application/json",
      },
      body: JSON.stringify({
        className: className,
      }),
    };

    fetch("http://localhost:3003/test/", {
      method: "POST",
      headers: {
        "Contect-Type": "application/json",
      },
      body: JSON.stringify({
        className: className,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    
    // fetch("http://localhost:3003")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    setOpen(false);
  };

  const onChangeClassName = (e) => {
    // console.log(e.target.value);
    setClassName(e.target.value);
  };

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
