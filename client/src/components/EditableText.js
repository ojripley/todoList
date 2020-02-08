import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Edit from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";

export default function EditableText(props) {

  const [text, setText] = useState('test');
  const [editMode, setEditMode] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleMouseEnter= () => {
    if (!mouseOver) {
      setMouseOver(true);
    }
  };

  const handleMouseOut = () => {
    if (mouseOver) {
      setMouseOver(false);
    }
    setEditMode(false);
  };

  const handleClick = () => {
    setEditMode(true);
    setMouseOver(false);
  };

  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      setMouseOver(false);
      setEditMode(false);
    }
  }


  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}>
      <TextField
        name="text"
        defaultValue={props.defaultText}
        margin="normal"
        onChange={handleChange}
        disabled={!editMode}
        onKeyPress={handleKeyPress}
        onClick={handleClick}
      />
      {mouseOver && <IconButton onClick={handleClick}>
        <Edit />
      </IconButton>}
    </div>
  );
}
