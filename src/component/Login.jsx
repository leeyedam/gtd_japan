import React, { useCallback, useEffect, useState } from "react";
import { Box, Grid, Typography, CircularProgress, Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../store/userReducer";
import LoginModal from "./LoginModal";
import SEOMetaTag from "../SEOMetaTag";

function Login() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const dispatch = useDispatch();
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 2600,
      },
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const loginUser = useCallback(async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      window.location.replace("/");
    } catch (e) {
      console.error(e);
      e.message === "Firebase: Error (auth/user-not-found)." &&
        alert("사용자를 찾을 수 없습니다.");
      e.message === "Firebase: Error (auth/wrong-password)." &&
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (!!user) {
        dispatch(setUser(user));
        localStorage.setItem("token", user.accessToken);
        localStorage.setItem(
          "expirationTime",
          user.stsTokenManager.expirationTime
        );
      } else {
        dispatch(clearUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  const onSubmit = (data) => {
    loginUser(data.email, data.password);
  };
  if (loading) {
    return (
      <Stack alignItems="center" justifyContent="center" height="100vh">
        <CircularProgress
          size={150}
          style={{
            color: "#aa2727",
          }}
        />
      </Stack>
    );
  }

  return (
    <div className="form">
      <SEOMetaTag
        title="LOGIN | GTD golf"
        description="Beginning of Triple Titan 트리플 티탄 드라이버의 시작"
        keyword="GOLF, GOLF BAG, GEAR, Driver, Wood, Utility, Iron, Wedge, Putter, CLUB, FITTING, Premium"
      />
      <ThemeProvider theme={theme}>
        <Grid
          container
          columns={{ xs: 6, sm: 12, md: 12, lg: 12, xl: 12 }}
          sx={{
            height: "100vh",
          }}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Grid item xs={4} sm={7} md={4} lg={3} xl={2.5}>
            <Box
              sx={{
                padding: {
                  sm: "90px 80px",
                  lg: "90px 60px",
                  xl: "250px 120px",
                },
                border: { xs: "none", sm: ".8px solid #fff" },
                borderRadius: "10px",
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography
                  component={"h1"}
                  sx={{
                    fontSize: { xs: "23px", sm: "25px", lg: "40px" },
                  }}
                >
                  LOGIN
                </Typography>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                {errors.email?.type === "required" && (
                  <h5 style={{ fontSize: "14px" }}>필수 항목입니다.</h5>
                )}
                {errors.email?.type === "pattern" && (
                  <h5 style={{ fontSize: "14px" }}>
                    유효한 이메일을 입력해 주세요.
                  </h5>
                )}
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
                {errors.password?.type === "required" && (
                  <h5 style={{ fontSize: "14px" }}>필수 항목입니다.</h5>
                )}
                {errors.password?.type === "minLength" && (
                  <h5 style={{ fontSize: "14px" }}>
                    6글자 이상 입력해 주세요.
                  </h5>
                )}
                <button type="submit" disabled={isSubmitting}>
                  LOGIN
                </button>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      marginBottom: { xs: "6px", sm: "10px" },
                      fontSize: { xs: "14px", xl: "20px" },
                    }}
                  >
                    <Typography
                      component={"p"}
                      sx={{
                        color: "#fff",
                        fontSize: { xs: "14px", xl: "20px" },
                      }}
                    >
                      아직 회원이 아니신가요?
                    </Typography>
                    <Link to="/signup">Sign Up</Link>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      fontSize: { xs: "14px", xl: "20px" },
                    }}
                  >
                    <Typography
                      component={"p"}
                      sx={{
                        color: "#fff",
                        fontSize: { xs: "14px", xl: "20px" },
                      }}
                    >
                      비밀번호를 잊으셨나요?
                    </Typography>
                    <Link onClick={handleOpen}>비밀번호 찾기</Link>
                  </Box>
                </Box>
              </form>
              <LoginModal open={open} setOpen={setOpen} />
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default React.memo(Login);
