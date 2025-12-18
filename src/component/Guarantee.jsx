import React, { useCallback, useState } from "react";
import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import SEOMetaTag from "../SEOMetaTag";
import CodeCheckList from "./CodeCheckList";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function Guarantee() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [myList, setMyList] = useState([]);
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const date = `${year}/${month}/${day}`;

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1800,
        xxl: 2300,
      },
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const checkCodeList = useCallback(async () => {
    setLoading(true);
    try {
      const uid = localStorage.getItem("uid");
      const userRef = query(
        collection(getFirestore(), "users"),
        where("uid", "==", uid)
      );
      const querySnapshot = await getDocs(userRef);
      const codeList =
        querySnapshot.docs[0]._document.data.value.mapValue.fields.code;
      setMyList([]);
      if (codeList !== undefined) {
        codeList.arrayValue.values.map((arr) => {
          setMyList((prev) => [...prev, arr.stringValue]);
        });
      }
      setLoading(false);
      setOpen(true);
    } catch (error) {
      console.log(error.message);
      if (
        error.message ===
        "Cannot read properties of undefined (reading '_document')"
      ) {
        alert("로그인이 필요한 서비스입니다.");
        window.location.replace("/login");
      }
      setLoading(false);
    }
  }, []);

  const handleOpen = () => {
    checkCodeList();
  };

  const nameFilter = (name) => {
    if (name.includes("460")) {
      return "BLACK ICE 460";
    } else if (name.includes("FW")) {
      return "BLACK ICE - FW";
    } else if (name.includes("MAX")) {
      return "BLACK ICE THE MAX";
    } else if (name.includes("UT")) {
      return "BLACK ICE - UT";
    } else {
      return name;
    }
  };

  const checkGuarantee = useCallback(async (number) => {
    setLoading(true);
    try {
      const numberRef = query(
        collection(getFirestore(), "numberTest"),
        where("number", "==", number)
      );
      const querySnapshot = await getDocs(numberRef);
      const documentNumber =
        querySnapshot?.docs[0]?._document.key.path.segments[6];
      if (
        querySnapshot.docs[0]._document.data.value.mapValue.fields.check !==
        undefined
      ) {
        alert("이미 인증된 코드입니다.");
        window.location.reload();
      } else if (querySnapshot.empty === false) {
        const uid = localStorage.getItem("uid");
        const nycRef = doc(db, "numberTest", documentNumber);
        const userRef = doc(db, "users", uid);
        await updateDoc(nycRef, { check: true });
        await updateDoc(userRef, {
          code: arrayUnion(
            JSON.stringify({
              클럽명: nameFilter(number),
              코드: number,
              날짜: date,
            })
          ),
        });
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
      <SEOMetaTag
        title="GTD golf"
        description="일본 천재 디자이너 조지 다케이가 만들어낸 클럽의 기능을 극대화한 풀티탄 소재의 폭발적 퍼포먼스"
        keywords="GTD, GTD GOLF"
        imgsrc="https://gtdgolf.co.kr/images/slide/1.Webp"
        url="https://gtdgolf.co.kr/guarantee"
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
          <Grid item xs={4} sm={7} md={7} lg={3} xl={3.5}>
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

                <Divider className="border">
                  <div>
                    <Link onClick={handleOpen}>
                      인증 내역 조회
                      <ArrowOutwardIcon fontSize="small" />
                    </Link>
                  </div>
                </Divider>
              </form>
              <CodeCheckList open={open} setOpen={setOpen} myList={myList} />
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default React.memo(Guarantee);
