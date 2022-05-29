import styled from "@emotion/styled";

/* Header Image */
/* ****************************************** */

export const StyledHeaderImage = styled('div')({
  height: "50vh",
  position: "relative",
  '& img': {
    width: "100%",
    height: "100%",
    objectFit: 'cover',
  },
  //Overlay
  '&:after': {
    content: '""',
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
})


/* Search bar */
/* ****************************************** */

export const StyledSearchBar = styled('div')({
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  transform: "translateY(50%)"
})


/* Headline */
/* ****************************************** */

export const StyledHeadline = styled('div')({
  position: "absolute",
  bottom: "20%",
  left: 0,
  right: 0
})