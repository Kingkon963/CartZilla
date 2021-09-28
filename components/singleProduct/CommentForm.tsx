import * as React from "react";
import Image from "next/dist/client/image";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import { ClassNames } from "@emotion/react";
import { MenuItem } from "@mui/material";

const CommentForm: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-medium text-gray-600">Write a review</h1>
      <div className="flex flex-col gap-7 mt-5">
        <TextField
          fullWidth
          label="Your name"
          size="small"
          helperText="Will be displayed on the comment."
          required
          sx={{
            "& > .MuiFormHelperText-root": {
              marginLeft: "3px",
              fontFamily: "Rubik",
            },
            "& > .MuiInputBase-root": {
              backgroundColor: "white",
            },
          }}
        />
        <TextField
          fullWidth
          label="Your email"
          size="small"
          helperText="Authentication only - we won't spam you."
          required
          type="email"
          sx={{
            "& > .MuiFormHelperText-root": {
              marginLeft: "3px",
              fontFamily: "Rubik",
            },
            "& > .MuiInputBase-root": {
              backgroundColor: "white",
            },
          }}
        />
        <TextField
          fullWidth
          required
          select
          label="Rating"
          size="small"
          type="email"
          defaultValue={5}
          sx={{
            "& > .MuiFormHelperText-root": {
              marginLeft: "3px",
              fontFamily: "Rubik",
            },
            "& > .MuiInputBase-root": {
              backgroundColor: "white",
            },
          }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </TextField>

        <TextField
          fullWidth
          multiline
          minRows={6}
          label="Review"
          size="small"
          helperText="Your review must be at least 50 characters."
          required
          sx={{
            "& > .MuiFormHelperText-root": {
              marginLeft: "3px",
              fontFamily: "Rubik",
            },
            "& > .MuiInputBase-root": {
              backgroundColor: "white",
            },
          }}
        />
        <TextField
          fullWidth
          multiline
          minRows={2}
          label="Pros"
          size="small"
          placeholder="Separated by commas"
          required
          sx={{
            "& > .MuiFormHelperText-root": {
              marginLeft: "3px",
              fontFamily: "Rubik",
            },
            "& > .MuiInputBase-root": {
              backgroundColor: "white",
            },
          }}
        />
        <TextField
          fullWidth
          multiline
          minRows={2}
          label="Cons"
          size="small"
          placeholder="Separated by commas"
          required
          sx={{
            "& > .MuiFormHelperText-root": {
              marginLeft: "3px",
              fontFamily: "Rubik",
            },
            "& > .MuiInputBase-root": {
              backgroundColor: "white",
            },
          }}
        />
      </div>
      <button className="w-full p-3 primary-btn mt-5">Submit a Review</button>
    </div>
  );
};

export default CommentForm;
