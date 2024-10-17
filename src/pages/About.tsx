import { Meta, Title } from "@solidjs/meta";

const About = (props: { metaDescription: string }) => {
  return (
    <>
      <Title>About|大阪星光文芸部</Title>
      <Meta content={props.metaDescription} name="description" />
      <h1>aa</h1>
    </>
  );
};
export default About;
