import { useNavigate } from "react-router-dom";
import classes from "./AnimeCard.module.scss";
const AnimeCard = (props) => {
  const navigate = useNavigate();

  const FullAnimeInfo = (animeId) => {
    console.log(animeId);
    console.log("animeId");
    console.log(props.images?.jpg.image_url);
    navigate({
      pathname: "/anime-info",
      search: `id=${animeId}`,
    });
    console.log(props.images.jpg.image_url);
  };
  return (
    <div
      className={classes.card}
      onClick={() => FullAnimeInfo(props.anime.mal_id)}
    >
      <img src={props.anime.images.jpg.image_url} alt="" />

      <span className={classes.title}>{props.anime.title}</span>

      <span className={classes.episodes}>{props.anime.episodes} ep</span>
      <span className={classes.score}>{props.anime.score}</span>
    </div>
  );
};

export default AnimeCard;
