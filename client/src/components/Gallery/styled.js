import styled from "@emotion/styled";

export const ImageContainer = styled('div')({
    position: "relative",
    paddingBottom: "50%",
    '& img':{
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        objectFit: "cover",
        width: "100%",
        height: "100%"
    }
})