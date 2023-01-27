import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";

const FormOne = () => {
  const alert = useAlert();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("06");

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    phone: null,
  });

  const checkInputs = () => {
    if (name.length < 3) {
      setErrors((prev) => ({ ...prev, name: "process" }));
    } else if (name.length < 4) {
      setErrors((prev) => ({ ...prev, name: false }));
    } else {
      setErrors((prev) => ({ ...prev, name: true }));
    }

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.length < 6) {
      setErrors((prev) => ({ ...prev, email: "process" }));
    } else if (!emailRegex.test(email)) {
      setErrors((prev) => ({ ...prev, email: false }));
    } else {
      setErrors((prev) => ({ ...prev, email: true }));
    }

    if (phone.length < 5) {
      setErrors((prev) => ({ ...prev, phone: "process" }));
    } else if (phone.length > 10) {
      setErrors((prev) => ({ ...prev, phone: false }));
    } else if (phone.length === 10) {
      setErrors((prev) => ({ ...prev, phone: true }));
    }
  };

  useEffect(() => {
    checkInputs();
  }, [name, email, phone]);

  const displayColorInput = (inputName) => {
    switch (inputName) {
      case "name":
        if (errors.name === true) {
          return "info";
        } else if (errors.name === false) {
          return "error";
        } else {
          return "warning";
        }
      case "email":
        if (errors.email === true) {
          return "info";
        } else if (errors.email === false) {
          return "error";
        } else {
          return "warning";
        }
      case "phone":
        if (errors.phone === true) {
          return "info";
        } else if (errors.phone === false) {
          return "error";
        } else {
          return "warning";
        }
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    checkInputs();

    if (
      errors.email === true &&
      errors.name === true &&
      errors.phone === true
    ) {
      // Everything is okay
    } else if (!errors.email) {
      alert.show("Email is invalid!", { bgColor: "danger" });
    } else if (!errors.name) {
      alert.show("The name should be at least 4 long", { bgColor: "danger" });
    } else if (!errors.phone) {
      alert.show("Invalid Phone Number (10 numbers)", { bgColor: "danger" });
    }
  };

  return (
    <form
      onSubmit={handleNext}
      className="col-lg-8 start-50 bg-light rounded-3 d-lg-flex flex-column row-cols-lg-1 justify-content-center align-items-center"
    >
      <h1 className="fw-bold">Personal Info</h1>
      <p className="text-secondary">
        Please provide your name, email, address, and phone number.
      </p>

      <TextField
        className="my-3"
        label="Name"
        variant="outlined"
        color={displayColorInput("name")}
        size="small"
        value={name}
        placeholder="e.g.Zakaria Imzilen"
        onChange={({ target }) => setName(target.value)}
      />

      <TextField
        className="my-3"
        label="Email Address"
        variant="outlined"
        color={displayColorInput("email")}
        size="small"
        value={email}
        placeholder="e.g.zakariyaimzilen@gmail.com"
        onChange={({ target }) => setEmail(target.value)}
      />

      <TextField
        className="my-3"
        label="Phone Number"
        variant="outlined"
        color={displayColorInput("phone")}
        size="small"
        value={phone}
        placeholder="e.g.0644444444"
        onChange={({ target }) => setPhone(target.value)}
      />

      <button type="submit" className="position-absolute text-light rounded-2">
        Next Step
      </button>
    </form>
  );
};

export default FormOne;
