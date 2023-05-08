import React from "react";
import PageHeader from "../../Components/PageHeader";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import store from "../../Redux/store";

const CardMediaContainer = ({ title, description, onClick, imgUrl }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={onClick} color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

const Newsfeed = () => {
  const newsfeed = useSelector((state) => state.newsfeed);

  return (
    <Provider store={store}>
      <div>
        <h2>Newsfeed</h2>
        <PageHeader title="Newsfeed" />
        {newsfeed.map((n, index) => (
          <div key={index}>
            <CardMediaContainer
              index={index}
              title={n.title}
              description={n.description}
            />
            <br />
          </div>
        ))}
      </div>
    </Provider>
  );
};

CardMediaContainer.defaultProps = {
  title: "Insert title here...",
  description: "Insert description here...",
  imgUrl:
    "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
};

export default Newsfeed;
