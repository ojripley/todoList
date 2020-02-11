import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { FormControl } from "@material-ui/core";

export default function EditableText(props) {

  const [text, setText] = useState(props.text || props.defaultText);
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
  };

  const handleMouseOut = () => {
    if (mouseOver) {
      setMouseOver(false);
      if (text.length === 0) {
        setText(props.defaultText);
      }
    }
  };

  const handleClick = () => {
    setMouseOver(false);
  };

  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      setMouseOver(false);
      if(text.length === 0) {
        setText(props.defaultText);
      }
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}>
      <FormControl fullWidth style={{width: '33em'}}>
        <TextField
          value={text}
          margin="normal"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          onClick={handleClick}
          disabled={text === props.defaultText ? true : false}
          multiline
        />
      </FormControl>
    </div>
  );
};
