import { Meta, Title } from "@solidjs/meta";
import { onMount } from "solid-js";

const members = (props: { metaDescription: string }) => {
  onMount(() => {
    console.log("onMount");
  });
  return (
    <>
      <Title>Members|大阪星光文芸部</Title>
      <Meta content={props.metaDescription} name="description" />
      <h1>members</h1>
      <h2>onigiri</h2>
    </>
  );
};
export default members;
