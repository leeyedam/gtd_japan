import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { sendPasswordResetEmail } from "firebase/auth";
import { useCallback } from "react";
import { firebaseAuth } from "../firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 200, sm: 300, md: 400 },
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 5,
};

export default function LoginModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const changePassword = useCallback(async (email) => {
    console.log(email, "2");
    try {
      await sendPasswordResetEmail(firebaseAuth, email);
      alert(
        "메일이 성공적으로 보내졌습니다! 메일에서 비밀번호 변경을 진행해 주세요."
      );
      window.location.reload();
    } catch (e) {
      console.error(e);
      alert("등록되지 않은 이메일입니다.");
    }
  }, []);

  const onSubmit = (data) => {
    console.log(data.email);
    changePassword(data.email);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        style={{
          backgroundColor: "#ffffff80",
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                계정 확인
              </Typography>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "35px",
                }}
              >
                <input
                  className="emailCheck"
                  name="email"
                  type="text"
                  placeholder="이메일 입력"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                {errors.email?.type === "required" && (
                  <h5 className="h5" style={{ fontSize: "14px" }}>
                    필수 항목입니다.
                  </h5>
                )}
                {errors.email?.type === "pattern" && (
                  <h5 style={{ fontSize: "14px" }}>
                    유효한 이메일을 입력해 주세요.
                  </h5>
                )}
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                  sx={{
                    marginTop: "30px",
                  }}
                >
                  확인
                </Button>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
