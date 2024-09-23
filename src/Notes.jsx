import React, { useContext, useEffect } from "react";
import { Button, Card, Input, Popconfirm } from "antd";
import { notesContext } from "./NotesProvider";
import { DeleteFilled } from "@ant-design/icons";
import axios from "axios";

export default function Notes() {
  const { notes, inputValue, setNotes, setInputValue } =
    useContext(notesContext);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/notes").then((response) => {
      setNotes(response.data);
    });
  }, []);

  const saveNotes = () => {
    axios
      .post("http://localhost:8080/note", { note: inputValue })
      .then((response) => {
        setNotes(response.data);
      });
  };

  const deleteNote = (id) => {
    axios.delete(`http://localhost:8080/note/${id}`).then((response) => {
      setNotes(response.data);
    });
  };

  return (
    <div>
      <Input
        placeholder="Add your Notes here"
        style={{ width: "250px", marginRight: "1rem" }}
        value={inputValue}
        onChange={handleInput}
      />
      <Button type="primary" onClick={saveNotes}>
        Save
      </Button>

      <div>
        {notes.map((note) => {
          return (
            <Card
              style={{
                width: 250,
                marginTop: "1rem",
                border: "solid 2px rgba(0,0,0,0.2)",
              }}
              size="small"
            >
              {note.note}
              <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                onConfirm={() => {
                  deleteNote(note.id);
                }}
                onCancel={() => {}}
                okText="Yes"
                cancelText="No"
              >
                <DeleteFilled style={{ marginLeft: "10rem" }} />
              </Popconfirm>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
