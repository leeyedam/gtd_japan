import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { sendPasswordResetEmail } from "firebase/auth";
import { useCallback } from "react";
import { firebaseAuth } from "../firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: { xs: 200, sm: 350, md: 550 },
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxhadow: 24,
  p: 7,
  textAlign: "center",
  minHeight: { md: "280px" },
};

export default function CodeCheckList({ open, setOpen, myList }) {
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const titleTextStyle = {
    fontWeight: 600,
    fontSize: {
      xs: "12px",
      sm: "18px",
      md: "16px",
    },
  };

  const subTitleTextStyle = {
    fontSize: {
      xs: "8px",
      sm: "14px",
      md: "14px",
    },
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
            <Typography
              id="transition-modal-title"
              variant="h4"
              style={{
                fontWeight: 500,
              }}
              sx={{
                fontSize: { xs: "24px", sm: "28px", md: "30px" },
              }}
            >
              정품 인증 내역
            </Typography>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "40px",
              }}
            >
              {myList.length > 0 ? (
                <TableContainer
                  sx={{
                    textAlign: { xs: "left", sm: "left", md: "center" },
                  }}
                >
                  <Table size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={titleTextStyle}>클럽명</TableCell>
                        <TableCell sx={titleTextStyle}>코드</TableCell>
                        <TableCell sx={titleTextStyle}>날짜</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {myList.map((arr) => {
                        return (
                          <TableRow
                            key={JSON.parse(arr).코드}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell
                              id="transition-modal-title"
                              component="th"
                              scope="row"
                              mr="20px"
                              sx={{
                                ...subTitleTextStyle,
                                minWidth: {
                                  xs: "105px",
                                  sm: "155px",
                                },
                              }}
                            >
                              {JSON.parse(arr).클럽명}
                            </TableCell>
                            <TableCell
                              id="transition-modal-title"
                              mr="20px"
                              sx={subTitleTextStyle}
                            >
                              {JSON.parse(arr).코드}
                            </TableCell>
                            <TableCell
                              id="transition-modal-title"
                              sx={subTitleTextStyle}
                            >
                              {JSON.parse(arr).날짜}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              ) : (
                <>
                  <Typography
                    id="transition-modal-title"
                    mb="25px"
                    style={{
                      color: "#5c5c5c",
                    }}
                    sx={{
                      fontSize: { xs: "20px", sm: "24px", md: "26px" },
                    }}
                  >
                    인증 내역이 없습니다.
                  </Typography>
                  <Typography
                    id="parent-modal-description"
                    component="p"
                    style={{
                      color: "#5c5c5c",
                    }}
                    sx={{
                      fontSize: { xs: "12px", sm: "16px", md: "16px" },
                    }}
                  >
                    GTD 정품은 GTD 골프 코리아 공식 대리점을 통한 판매가
                    이뤄지고 있으며, 공식 대리점으로부터 구매한 제품에 한하여
                    A/S 및 품질 보증을 해드리고 있습니다.
                  </Typography>
                </>
              )}

              <Button
                variant="contained"
                sx={{
                  marginTop: "30px",
                }}
                onClick={handleClose}
              >
                확인
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
