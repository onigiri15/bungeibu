import { useNavigate } from "@solidjs/router";
import { Meta, Title } from "@solidjs/meta";

import { Button } from "@suid/material";

import logo2024100 from "../assets/SF2024LOGO100.webp";
import logo2024200 from "../assets/SF2024LPOGO200.webp";
import logo2024400 from "../assets/SF2024LOGO400.webp";
import logo2024600 from "../assets/SF2024LOGO600.webp";
import logo2024800 from "../assets/SF2024LOGO800.webp";
import logo2024 from "../assets/SF2024LOGO1375.webp";

import "./css/SF.css";


//meta-descriptionの追加がいる

const SF = () => {
  const navigate=useNavigate()
  return (
    <>
      <Title>スクールフェア|文芸部</Title>
      <Meta content="hoge" name="description" />
      <Button>
        <picture>
          <source
            srcset={`${logo2024100} 100w,
                    ${logo2024200} 200w,
                    ${logo2024400} 400w,
                    ${logo2024600} 600w,
                    ${logo2024800} 800w,
                    ${logo2024} 1350w`}
            sizes="(max-width: 600px) 80vw, (max-width: 1000px) 40vw, 30vw"
            type="image/webp"
          />
          <img src={logo2024} alt="sf2024のロゴ" />
        </picture>
        <h2 class="sf-year">2024</h2>
        <h2 class="sf-title">星光満天宮</h2>
      </Button>
      <Button onClick={() => navigate("/")} >ホームへ</Button>
    </>
  );
};
export default SF;
