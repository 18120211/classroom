import * as React from "react";
import "./App.css";
import NewClassForm from "../components/NewClassForm";
import ClassRooms from "../components/ClassRooms";

export default function App() {
  return (
    <>
      <NewClassForm />
      <ClassRooms/>
    </>
  );
}