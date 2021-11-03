import ClassCard from "./ClassCard";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";

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
  const [classRooms, setClassRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003")
      .then(res => res.json())
      .then(data => {
          console.log(data);
          setClassRooms(data)
      })
  }, [])
  

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
          <tr className={classes.td}>
            <td>
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
        <td>
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
    <table className={classes.tableClassCard}>
      <tbody>{tableClassCard}</tbody>
    </table>
  );
}
