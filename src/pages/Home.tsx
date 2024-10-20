import { createSignal, onMount } from "solid-js";
import { Meta, Title } from "@solidjs/meta";
import { useNavigate } from "@solidjs/router";
import { Button } from "@suid/material";

import "./css/Home.css";

const [isMounted, setIsMounted] = createSignal(false);

const Welcomeanimation = () => {
  onMount(() => {
    // 少し遅らせてアニメーションを開始
    setTimeout(() => setIsMounted(true), 500);
  });
  return (
    <div id="welcomebg">
      <h1 class="title" classList={{mounted: isMounted()}}>
        大阪星光学院
        <br />
        文芸部
      </h1>
    </div>
  );
};

const Home = (props: { metaDescription: string }) => {
  const navigate = useNavigate();
  return (
    <>
      <Title>Home|大阪星光文芸部</Title>
      <Meta content={props.metaDescription} name="description" />
      <Welcomeanimation />
      <h1>Home</h1>
      <h2>onigiri</h2>
      <Button onClick={() => navigate("/sf")}>スクールフェアはこちら</Button>
    </>
  );
};
export default Home;
