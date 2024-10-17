import { Meta, Title } from "@solidjs/meta";
import { useNavigate } from "@solidjs/router";

import { Button } from "@suid/material";

const NotFound = (props: { metaDescription: string }) => {
  const navigate = useNavigate();
  return (
    <>
      <Title>NotFound|大阪星光文芸部</Title>
      <Meta content={props.metaDescription} name="description" />
      <h1>404</h1>
      <h2>onigiri</h2>
      <Button onClick={() => navigate("/")}>home</Button>
    </>
  );
};
export default NotFound;
