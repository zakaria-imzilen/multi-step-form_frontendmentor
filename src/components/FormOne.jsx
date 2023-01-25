import TextField from "@mui/material/TextField";
import { useState } from "react";

const FormOne = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("06");

  return (
    <form className="col-lg-8 start-50 bg-light rounded-3 d-lg-flex flex-column row-cols-lg-1 justify-content-center align-items-center">
      <h1 className="fw-bold">Personal Info</h1>
      <p className="text-secondary">
        Please provide your name, email, address, and phone number.
      </p>

      <TextField
        className="my-3"
        label="Name"
        variant="outlined"
        size="small"
        value={name}
        placeholder="e.g.Zakaria Imzilen"
        onChange={({ target }) => setName(target.value)}
      />

      <TextField
        className="my-3"
        label="Email Address"
        variant="outlined"
        size="small"
        value={email}
        placeholder="e.g.zakariyaimzilen@gmail.com"
        onChange={({ target }) => setEmail(target.value)}
      />

      <TextField
        className="my-3"
        label="Phone Number"
        variant="outlined"
        size="small"
        value={phone}
        placeholder="e.g.0644444444"
        onChange={({ target }) => setPhone(target.value)}
      />
    </form>
  );
};

export default FormOne;
