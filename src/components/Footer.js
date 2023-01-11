import { Container, Paper } from "@mui/material";

function Footer() {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 10px)",
        bottom: 0,
        width: "100%",
        // position: "sticky",
      }}
      component="footer"
      square
      // variant="outlined"
    >
      <Container maxWidth="lg">
        <h1>Footer</h1>
      </Container>
    </Paper>
  );
}

export default Footer;
