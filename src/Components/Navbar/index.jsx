import React, { useEffect, useState } from "react";
import { Box, Button, List, ListItem, Stack } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDispatch, useSelector } from "react-redux";
import { mode } from "../../Store/Slice/darkMode";
import { Drawer, useMediaQuery } from "@mui/material";
const darkNav = "#1C1C28";
const lightNav = "#FFFFFF";
const lightBtnLogin = "#0EA5E980";
const darkBtnLogin = "#4E81FB66";
const lightBtnRegister = "#0EA5E9";
const darkBtnRegister = "#4E81FB";
const lightSearchInp = "#F3F4F6";
const lightIcon = "#F3F4F6";
const darkSearchInp = "#1C1C28";
const lightP = "#1C1C28";
const darkZmenu = "#28293D";

export default function Navbar() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const mobileSize = useMediaQuery("(max-width:600px)");
  const { theme } = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "30px",
    border: "1px solid #777C94",
    color: "#777C94",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",

    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      padding: "15px",
      color: theme && "#777C94",

      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme ? lightNav : darkNav,
          width: "100%",
          height: "130px",
          display: "flex",
          alignItems: "center",
          display: "flex",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            marginLeft: "45px",
            zIndex: "9999",
          }}
        >
          <Button
            sx={{
              marginLeft: "0px !important",
              padding: "13px 38px",
              backgroundColor: theme
                ? darkBtnRegister
                : lightBtnRegister + "!important",
              color: "white",
              borderRadius: "50px",
              fontSize: "16px",
            }}
          >
            Register
          </Button>
        </Box>
        <Box
          sx={{
            marginLeft: "-48px",
          }}
        >
          <Button
            sx={{
              padding: "13px 38px",
              backgroundColor: theme
                ? darkBtnLogin
                : lightBtnLogin + "!important",
              color: "white",
              borderRadius: "50px",
              fontSize: "16px",
            }}
          >
            Login
          </Button>
        </Box>
        <Box>
          <Box
            onClick={() => dispatch(mode())}
            sx={{
              cursor: "pointer",
              width: "55px",
              height: "55px",
              backgroundColor: theme ? lightIcon : darkNav,
              borderRadius: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "10px",
              border: "1px solid #777C94",
            }}
          >
            {theme ? (
              <BedtimeIcon />
            ) : (
              <LightModeIcon
                sx={{
                  color: "#777C94",
                }}
              />
            )}
          </Box>
        </Box>
        <Search
          sx={{
            display: { xs: "none", md: "none", lg: "inline-block" },
            backgroundColor: theme ? lightSearchInp : darkSearchInp,
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <Box
            sx={{
              direction: "rtl",
            }}
          >
            <StyledInputBase
              placeholder="جستجو"
              inputProps={{ "aria-label": "search" }}
            />
          </Box>
        </Search>
        <List
          sx={{
            direction: "rtl",
            display: { lg: "flex", md: "none", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
            gap: "0px",
            position: "fixed",
            marginLeft: "65%",
            transform: "translate(-50%)",
          }}
         >
          <ListItem
            sx={{
              cursor: "pointer",
              position: "relative",
              "&:hover ul": {
                opacity: "1",
                visibility: "visible",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: theme ? "black" : "white",
              }}
            >
              item
              <ExpandMoreIcon />
            </Box>
            <List
              sx={{
                position: "absolute",
                width: "255px",
                height: "auto",
                backgroundColor: theme ? darkZmenu : "rgb(177, 176, 176)",
                borderRadius: "15px",
                padding: "20px 90px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "330px",
                gap: "0px !important",
                transition: "all .5s",
                opacity: "0",
                visibility: "hidden",
                color: "white",
              }}
            >
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
            </List>
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              position: "relative",
              "&:hover ul": {
                opacity: "1",
                visibility: "visible",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: theme ? "black" : "white",
              }}
            >
              item
              <ExpandMoreIcon />
            </Box>
            <List
              sx={{
                position: "absolute",
                width: "255px",
                height: "auto",
                backgroundColor: theme ? darkZmenu : "rgb(177, 176, 176)",
                borderRadius: "15px",
                padding: "20px 90px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "330px",
                gap: "0px !important",
                transition: "all .5s",
                opacity: "0",
                visibility: "hidden",
                color: "white",
              }}
            >
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
            </List>
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              position: "relative",
              "&:hover ul": {
                opacity: "1",
                visibility: "visible",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: theme ? "black" : "white",
              }}
            >
              item
              <ExpandMoreIcon />
            </Box>
            <List
              sx={{
                position: "absolute",
                width: "255px",
                height: "auto",
                backgroundColor: theme ? darkZmenu : "rgb(177, 176, 176)",
                borderRadius: "15px",
                padding: "20px 90px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "330px",
                gap: "0px !important",
                transition: "all .5s",
                opacity: "0",
                visibility: "hidden",
                color: "white",
              }}
            >
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
            </List>
          </ListItem>
          <ListItem
            sx={{
              cursor: "pointer",
              position: "relative",
              "&:hover ul": {
                opacity: "1",
                visibility: "visible",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: theme ? "black" : "white",
              }}
            >
              item
              <ExpandMoreIcon />
            </Box>
            <List
              sx={{
                position: "absolute",
                width: "255px",
                height: "auto",
                backgroundColor: theme ? darkZmenu : "rgb(177, 176, 176)",
                borderRadius: "15px",
                padding: "20px 90px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "330px",
                gap: "0px !important",
                transition: "all .5s",
                opacity: "0",
                visibility: "hidden",
                color: "white",
              }}
            >
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
              <ListItem>items</ListItem>
            </List>
          </ListItem>
        </List>
        <Box
          sx={{
            marginLeft: "85vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
          }}
        >
          <Box
            sx={{
              marginLeft: { xs: "0px", lg: "40px" },
            }}
          >
            <img
              style={{
                width: "125px",
                height: "70px",
                borderLeft: ".5px solid black",
                paddingLeft: "10px",
              }}
              src="https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/logo.webp"
              class="w-20 md:w-[104px]"
              alt="سبز لرن"
              loading="lazy"
            ></img>
          </Box>

          <IconButton
            className="menu-icon"
            onClick={() => setOpenMobileNav(!openMobileNav)}
          >
            <MenuIcon
              sx={{
                zIndex: "99999",
                color: !theme ? "#94A3b8" : "black",
                display: { xs: "inline-block", md: "inline-block", lg: "none" },
                fontSize: "32px",
                marginLeft: "-350px ",
              }}
            />
          </IconButton>
        </Box>
        <Drawer
          className="mobileNav"
          onClose={() => setOpenMobileNav(!openMobileNav)}
          open={openMobileNav}
          anchor="right"
        >
          
          <List
            sx={{
              padding: "0 30px",
              color: "black",
              display: "flex",
              flexDirection: "column",
              gap:'20px'
            }}
           >
              <Box sx={{
                display:'flex',
                justifyContent:'center',
                padding:'20px 0px 0px 0px'
              }}
              >
            <img
              style={{
                width: "125px",
                height: "70px",
              }}
              src="https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/logo.webp"
              class="w-20 md:w-[104px]"
              alt="سبز لرن"
              loading="lazy"
            ></img>
          </Box>
            <Search
          sx={{
            backgroundColor: theme ? lightSearchInp : darkSearchInp,
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <Box
            sx={{
              direction: "rtl",
            }}
          >
            <StyledInputBase
              placeholder="جستجو"
              inputProps={{ "aria-label": "search" }}
            />
          </Box>
        </Search>
            <ListItem
              sx={{ 
                direction:'rtl',  
                padding: "0",
                marginTop: "10px",
                cursor: "pointer",
                "&:hover ul": {
                  opacity: "1",
                  visibility: "visible",
                },
              }}
            >
              <Box sx={{
                display:"flex" ,
                alignItems:'center',
                gap:'110px'
              }}>
              <Box>
              item
              </Box>
              <ExpandMoreIcon sx={{
                marginLeft:'-10px'
              }}/>
              </Box>
              <List sx={{
                position:'absolute',
                display:'block',
                marginTop:'80px',
              }}>
              </List>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  );
}