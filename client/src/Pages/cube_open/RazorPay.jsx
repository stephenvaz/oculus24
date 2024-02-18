import React, { useState, useEffect } from "react";
import displayRazorpay from "./components/PaymentGateway";
import CustButton from "./components/CustButton";
// import { SiRazorpay } from "react-icons/si";
import { FaMoneyBillWave } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import { useSelector } from "react-redux";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { AlertTitle } from "@mui/material";
import { toast } from "react-toastify";
import ModToast from "../../Components/ModToast";
import Center from "../../animated-components/Center";

const RazorPayTest = () => {
  // const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  const redUser = useSelector(state => state.user.user);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    wca_id: "",
    phone: "",
    event: "",
  })
  const [isRegistered, setIsRegistered] = useState(false);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [severity, setSeverity] = useState("");
  const isLoggedIn = localStorage.getItem("user") ? true : false;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (!redUser) {
      setUserInfo({
        ...userInfo,
        name: "",
        email: "",
      })
      return;
    }
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("-------", user)
    setUserInfo({
      ...userInfo,
      name: user?.displayName,
      email: user?.email,
    })
  }, [localStorage.getItem("user"), redUser]);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    }
  }, [open]);

  function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInfo.name === "" || userInfo.phone === "" || userInfo.event === "") {
      // toast.error("Please fill all the fields!");
    setText("Please fill all the fields!");
    setSeverity("error");
    setOpen(true);
      return;
    }
    const regex = /^\d{10}$/;
    if (!regex.test(userInfo.phone)) {
      console.log("phone wrong")
      setText("Phone number is invalid");
      setSeverity("error");
      setOpen(true);
      // toast.error("Phone number is invalid");
      return;
    }
    // toast.success("Form submitted successfully");
    console.log("submitting form")
    setText("Form submitted successfully");
    setSeverity("success");
    setOpen(true);
  }

  return (
    <Center>
    {isLoggedIn ? (
    <div
      className="h-screen w-full flex items-center justify-center gap-2"
    >
      {open && (<ModToast text={text} severity={severity} />)}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(20px)',
          // padding: '10px',
          // borderRadius: '1rem',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          backdropFilter: 'blur( 4px )',
          border: '1px solid rgba( 255, 255, 255, 0.18 )',
        }}
        className="md:w-1/2 w-[90%] mt-16 flex flex-col items-center justify-center gap-4 p-8 rounded-xl shadow-md"
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <div className="w-full md:text-3xl text-2xl text-center text-white font-bold tracking-wide">
            Register for Oculus Cube Open 2024
          </div>
          <form
            className="w-full mt-4 flex flex-col md:gap-8 gap-5 items-center justify-center"
            onSubmit={handleSubmit}>
            <TextField
              required
              error={userInfo.name === "" ? true : false}
              helperText={userInfo.name === "" ? "Name is required" : ""}
              id="outlined-required"
              label="Name"
              value={userInfo.name}
              fullWidth
              sx={{
                '&& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: "white",
                },
                '&& .MuiInputBase-input': {
                },
                fontFamily: `"Inter", sans-serif`,

              }}
              InputLabelProps={{
                style: {
                  color: "white",
                }
              }}
              inputProps={{
                style: {
                  color: "white",
                }
              }}
              onChange={(e) => {
                setUserInfo({
                  ...userInfo,
                  name: e.target.value
                })
              }}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              value={userInfo.email}
              fullWidth
              sx={{
                '&& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: "white",
                },
                '&& .MuiInputBase-input': {
                },
                fontFamily: `"Inter", sans-serif`,

              }}
              InputProps={{
                readOnly: true
              }}
              InputLabelProps={{
                style: {
                  color: "white",
                }
              }}
              inputProps={{
                style: {
                  color: "white",
                }
              }}
            />
            <TextField
              required
              error={userInfo.phone === "" ? true : false}
              helperText={userInfo.phone === "" ? "Phone Number is required" : ""}
              id="outlined-required"
              label="Phone Number"
              value={userInfo.phone}
              fullWidth
              sx={{
                '&& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: "white",
                },
                '&& .MuiInputBase-input': {
                },
                fontFamily: `"Inter", sans-serif`,

              }}
              InputLabelProps={{
                style: {
                  color: "white",
                }
              }}
              inputProps={{
                style: {
                  color: "white",
                }
              }}
              onChange={(e) => {
                setUserInfo({
                  ...userInfo,
                  phone: e.target.value
                })
              }}
            />
            {/* <div className="w-full flex items-center justify-around"> */}
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around"
              }}
              onChange={(e) => {
                // console.log(e.target.value)
                setUserInfo({
                  ...userInfo,
                  event: e.target.value
                })
              }}
            >
              <FormControlLabel sx={{ color: "white" }} value="4" control={<Radio sx={{ color: "white" }} />} label="Upto 4 Events" />
              <FormControlLabel sx={{ color: "white" }} value="8" control={<Radio sx={{ color: "white" }} />} label="Upto 8 Events" />
            </RadioGroup>
            {/* </div> */}
            <button type="submit">
              <CustButton
                text={"Pay Now"}
                icon={<FaMoneyBillWave size={30} />}
                mOnClick={() => {
                  // displayRazorpay();
                }}

              />
            </button>
          </form>
        </div>
      </div>
    </div>) : (
      <div className="h-screen w-full text-center p-2 flex items-center justify-center text-white md:text-3xl text-xl font-bold z-[10000] tracking-wide">
        Please Login To Apply for Oculus Open Cube 2024
      </div>
    )}
    </Center>
  );
};

export default RazorPayTest;


