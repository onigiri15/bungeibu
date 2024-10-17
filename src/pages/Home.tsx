import { Meta, Title } from "@solidjs/meta";
import { useNavigate } from "@solidjs/router";
import { Button } from "@suid/material";



const Home = (props: { metaDescription: string }) => {
  const navigate = useNavigate();
  return (
    <>
      <Title>About|大阪星光文芸部</Title>
      <Meta content={props.metaDescription} name="description" />
      <h1>Home</h1>
      <h2>onigiri</h2>
      <Button onClick={() => navigate("/sf")}>スクールフェアはこちら</Button>
    </>
  );
};
export default Home;
