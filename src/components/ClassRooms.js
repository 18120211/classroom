import ClassCard from "./ClassCard";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import NewClassForm from "./NewClassForm";

const useStyles = makeStyles({
  tableClassCard: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  td: {
    padding: "10px",
  },
});

export default function ClassRooms() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [newClassName, setNewClassName] = useState("");
  const [classRooms, setClassRooms] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_CLASSROOM_SERVER)
      .then((res) => res.json())
      .then((data) => {
        setClassRooms(data);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = async () => {
    console.log(newClassName, "classname");
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        className: newClassName,
      }),
    };

    fetch(process.env.REACT_APP_CLASSROOM_SERVER, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClassRooms(data);
      });
    setOpen(false);
  };

  const onChangeClassName = (e) => {
    setNewClassName(e.target.value);
  };

  const tableClassCard = [];
  const offset = classRooms.length % 3;
  const limit = Math.ceil(classRooms.length / 3.0);

  let row;
  for (let i = 0; i < limit; i++) {
    if (i === limit - 1) {
      if (offset === 2) {
        row = (
          <tr>
            <td className={classes.td}>
              <ClassCard
                className={classRooms[i * 3].className}
                teacher={classRooms[i * 3].teacher}
              />
            </td>
            <td className={classes.td}>
              <ClassCard
                className={classRooms[i * 3 + 1].className}
                teacher={classRooms[i * 3 + 1].teacher}
              />
            </td>
          </tr>
        );
        tableClassCard.push(row);
        continue;
      } else if (offset === 1) {
        row = (
          <tr>
            <td className={classes.td}>
              <ClassCard
                className={classRooms[i * 3].className}
                teacher={classRooms[i * 3].teacher}
              />
            </td>
          </tr>
        );
        tableClassCard.push(row);
        continue;
      }
    }
    row = (
      <tr>
        <td className={classes.td}>
          <ClassCard
            className={classRooms[i * 3].className}
            teacher={classRooms[i * 3].teacher}
          />
        </td>
        <td className={classes.td}>
          <ClassCard
            className={classRooms[i * 3 + 1].className}
            teacher={classRooms[i * 3 + 1].teacher}
          />
        </td>
        <td className={classes.td}>
          <ClassCard
            className={classRooms[i * 3 + 2].className}
            teacher={classRooms[i * 3 + 2].teacher}
          />
        </td>
      </tr>
    );
    tableClassCard.push(row);
  }
  return (
    <>
      <NewClassForm
        open={open}
        handleClickOpen={() => handleClickOpen()}
        handleClose={() => handleClose()}
        handleCreate={() => handleCreate()}
        onChangeClassName={(e) => onChangeClassName(e)}
      />
      <table className={classes.tableClassCard}>
        <tbody>{tableClassCard}</tbody>
      </table>
    </>
  );
}
