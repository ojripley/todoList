import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function EditableText(props) {

  const [text, setText] = useState(props.text || props.defaultText);
  const [editMode, setEditMode] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  const handleChange = event => {
    setText(event.target.value);
    props.setValue(event.target.value);
  };

  const handleMouseEnter= () => {
    if (!mouseOver) {
      setMouseOver(true);
    }
    if (text === props.defaultText) {
      setText('');
    }
    setEditMode(true);
  };

  const handleMouseOut = () => {
    if (mouseOver) {
      setMouseOver(false);
      setEditMode(false);
      if (text.length === 0) {
        setText(props.defaultText);
      }
    }
  };

  const handleClick = () => {
    setEditMode(true);
    setMouseOver(false);
  };

  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      setMouseOver(false);
      setEditMode(false);
      if(text.length === 0) {
        setText(props.defaultText);
      }
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}>
      <TextField
        value={text}
        margin="normal"
        onChange={handleChange}
        disabled={!editMode}
        onKeyPress={handleKeyPress}
        onClick={handleClick}
      />
    </div>
  );
};
