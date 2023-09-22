import React, { useCallback, useState } from "react";
import { Box, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

function Guarantee() {
  const [loading, setLoading] = useState(false);
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1800,
      },
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const checkGuarantee = useCallback(async (number) => {
    setLoading(true);
    try {
      const userRef = query(
        collection(getFirestore(), "numberTest"),
        where("number", "==", number)
      );
      const querySnapshot = await getDocs(userRef);
      const documentNumber =
        querySnapshot?.docs[0]?._document.key.path.segments[6];

      if (
        querySnapshot.docs[0]._document.data.value.mapValue.fields.check !==
        undefined
      ) {
        alert("이미 인증된 코드입니다.");
        window.location.reload();
      } else if (querySnapshot.empty === false) {
        const nycRef = doc(db, "numberTest", documentNumber);
        await updateDoc(nycRef, { check: true });
        alert("인증이 완료되었습니다.");
        window.location.replace("/");
      }
    } catch (e) {
      alert("시리얼 코드를 확인해 주세요.");
      window.location.reload();
      console.error(e);
      setLoading(false);
    }
  }, []);

  const onSubmit = (data) => {
    if (!localStorage.getItem("token")) {
      alert("로그인이 필요한 서비스입니다.");
      window.location.replace("/login");
      return;
    }
    checkGuarantee(data.number);
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
          <Grid item xs={4} sm={7} md={4} lg={3} xl={3.5}>
            <Box
              sx={{
                padding: {
                  sm: "90px 80px",
                  lg: "90px 60px",
                  xl: "130px 100px",
                },
                border: { xs: "none", sm: ".8px solid #fff" },
                borderRadius: "10px",
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography
                  component={"h1"}
                  sx={{
                    fontSize: { xs: "28px", sm: "32px", lg: "40px" },
                  }}
                >
                  정품 인증
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "18px", sm: "20px", lg: "20px" },
                    textAlign: "center",
                    marginBottom: "50px",
                  }}
                >
                  시리얼 코드를 등록해 주세요.
                  <br /> 다양한 혜택을 받으실 수 있습니다
                </Typography>
                <input
                  name="number"
                  type="text"
                  placeholder="시리얼코드 -없이 입력해 주세요."
                  {...register("number", {
                    required: true,
                  })}
                />
                {errors.number?.type === "required" && (
                  <h5 style={{ fontSize: "14px" }}>필수 항목입니다.</h5>
                )}

                <button type="submit" disabled={isSubmitting}>
                  등록하기
                </button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default React.memo(Guarantee);
