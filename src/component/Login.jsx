import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
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
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="form">
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
                  type="text"
                  placeholder="id"
                  {...register("id", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
                {errors.id?.type === "required" && (
                  <span style={{ fontSize: "14px" }}>필수 항목입니다.</span>
                )}
                {errors.id?.type === "minLength" && (
                  <span style={{ fontSize: "14px" }}>
                    4글자 이상 입력해 주세요.
                  </span>
                )}
                <input
                  type="text"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
                {errors.password?.type === "required" && (
                  <span style={{ fontSize: "14px" }}>필수 항목입니다.</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span style={{ fontSize: "14px" }}>
                    6글자 이상 입력해 주세요.
                  </span>
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
                    <Link>Sign Up</Link>
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
                    <Link>비밀번호 찾기</Link>
                  </Box>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default React.memo(Login);
