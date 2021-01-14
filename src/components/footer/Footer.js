import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: `100%`,
    position: "absolute",
    overflow: "hidden",
    // marginTop: "",
    marginBottom: "0",
    padding: "6em 0",
  },
  link: {
    fontSize: "1.25em",
    color: "#fff",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  copylight: {
    color: "#fff",
    fontSize: "1em",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justify="center">
        </Grid>
        <Grid container direction="column" style={{ margin: "1.2em 0" }}>
        </Grid>
        <Grid
          item
          container
          component={"a"}
          target="_blank"
          rel="noreferrer noopener"
          href="/"
          justify="center"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography className={classes.copylight}>
            &copy;  HomePage
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;