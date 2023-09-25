import React, { useCallback, useState } from "react";
import {
  Box,
  Checkbox,
  Grid,
  Typography,
  CircularProgress,
  Stack,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { firebaseAuth } from "../firebase";
import SEOMetaTag from "../SEOMetaTag";

function Signup() {
  const [loading, setLoading] = useState(false);
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
    getValues,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const postUserData = useCallback(async (email, password, phone, username) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const uid = userCredential?.user.uid;
      const userRef = doc(getFirestore(), "users", uid);
      await setDoc(userRef, {
        uid: uid,
        email: email,
        name: username,
        phone: phone,
      });
      window.location.replace("/");
    } catch (e) {
      console.error(e);
      console.log(e.message);
      e.message === "Firebase: Error (auth/email-already-in-use)." &&
        alert("이미 가입된 사용자입니다.");
      setLoading(false);
    }
  }, []);

  const onSubmit = (data) => {
    postUserData(data.email, data.password, data.phone, data.username);
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
        title="GTD golf"
        description="Beginning of Triple Titan 트리플 티탄 드라이버의 시작"
        keywords="GOLF, GOLF BAG, GEAR, Driver, Wood, Utility, Iron, Wedge, Putter, CLUB, FITTING, Premium"
      />
      <ThemeProvider theme={theme}>
        <Grid
          container
          columns={{ xs: 6, sm: 12, md: 12, lg: 12, xl: 12 }}
          sx={{
            minheight: "100vh",
            marginTop: {
              xs: "70px",
              sm: "80px",
              md: "200px",
              lg: "200px",
              xl: "330px",
            },
            marginBottom: {
              sm: "50px",
              lg: "200px",
              xl: "310px",
            },
          }}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Grid item xs={4.5} sm={8} md={6} lg={5} xl={4}>
            <Box
              sx={{
                padding: {
                  sm: "90px 0px",
                  lg: "90px 0px",
                  xl: "200px 120px",
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
                  SIGN UP
                </Typography>
                <Box
                  sx={{
                    display: {
                      xs: "flex",
                      sm: "flex",
                    },
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                    },
                    justifyContent: {
                      xs: "space-evenly",
                      sm: "space-evenly",
                    },
                    alignItems: {
                      xs: "space-evenly",
                    },
                  }}
                >
                  <Grid
                    item
                    xs={6}
                    sm={8}
                    md={6}
                    lg={5}
                    xl={4}
                    justifyContent={"center"}
                  >
                    <Typography component={"h2"}>이메일</Typography>
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
                    <Typography component={"h2"}>비밀번호</Typography>
                    <input
                      name="password"
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
                    {errors.password?.type === "maxLength" && (
                      <h5 style={{ fontSize: "14px" }}>
                        12글자 이하 입력해 주세요.
                      </h5>
                    )}
                    <Typography component={"h2"}>비밀번호 확인</Typography>
                    <input
                      type="password"
                      placeholder="passwordCheck"
                      {...register("passwordCheck", {
                        validate: (value) => value === getValues("password"),
                      })}
                    />
                    {errors.passwordCheck?.type === "validate" && (
                      <h5 style={{ fontSize: "14px" }}>
                        패스워드와 일치하지 않습니다.
                      </h5>
                    )}
                    <Typography component={"h2"}>이름</Typography>
                    <input
                      name="username"
                      type="text"
                      placeholder="name"
                      {...register("username", {
                        required: true,
                        maxLength: 5,
                        minLength: 2,
                      })}
                    />
                    {errors.username?.type === "required" && (
                      <h5 style={{ fontSize: "14px" }}>필수 항목입니다.</h5>
                    )}
                    {errors.username?.type === "minLength" && (
                      <h5 style={{ fontSize: "14px" }}>
                        2글자 이상 입력해 주세요.
                      </h5>
                    )}
                    {errors.username?.type === "maxLength" && (
                      <h5 style={{ fontSize: "14px" }}>
                        5글자 이하 입력해 주세요.
                      </h5>
                    )}
                    <Typography component={"h2"}>휴대전화</Typography>
                    <input
                      name="phone"
                      type="text"
                      placeholder="숫자만 입력해 주세요."
                      {...register("phone", {
                        required: true,
                        pattern:
                          /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g,
                      })}
                    />
                    {errors.phone?.type === "required" && (
                      <h5 style={{ fontSize: "14px" }}>필수 항목입니다.</h5>
                    )}
                    {errors.phone?.type === "pattern" && (
                      <h5 style={{ fontSize: "14px" }}>
                        휴대전화 번호가 정확한지 확인해 주세요.
                      </h5>
                    )}
                    <Box
                      display={"flex"}
                      sx={{
                        marginTop: {
                          xs: "25px",
                          sm: "20px",
                        },
                        marginBottom: {
                          xs: "8px",
                          sm: "5px",
                        },
                      }}
                    >
                      <Typography
                        component={"h2"}
                        sx={{
                          fontSize: {
                            sm: "14px",
                          },
                        }}
                      >
                        [필수]
                        <Link to="/terms">이용약관 동의</Link>
                      </Typography>

                      {errors.terms?.type === "required" ? (
                        <Checkbox
                          className="red"
                          type="checkbox"
                          {...register("terms", { required: true })}
                        />
                      ) : (
                        <Checkbox
                          className="white"
                          type="checkbox"
                          {...register("terms", { required: true })}
                        />
                      )}
                    </Box>
                    <Box
                      display={"flex"}
                      sx={{
                        marginBottom: {
                          xs: "40px",
                          sm: "68px",
                          lg: "68px",
                        },
                      }}
                    >
                      <Typography
                        component={"h2"}
                        sx={{
                          fontSize: {
                            sm: "14px",
                          },
                        }}
                      >
                        [필수]
                        <Link to="/policy">개인정보 수집 및 이용 동의</Link>
                      </Typography>
                      {errors.policy?.type === "required" ? (
                        <Checkbox
                          className="red"
                          type="checkbox"
                          {...register("policy", { required: true })}
                        />
                      ) : (
                        <Checkbox
                          className="white"
                          type="checkbox"
                          {...register("policy", { required: true })}
                        />
                      )}
                    </Box>
                    <button type="submit" disabled={isSubmitting}>
                      SIGN UP
                    </button>
                  </Grid>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default React.memo(Signup);
