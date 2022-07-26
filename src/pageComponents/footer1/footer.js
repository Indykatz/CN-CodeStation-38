import "./footer.css";
import { FooterStyled, FooterH4Styled } from "./footer.styles";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterH4Styled>2022 CodeNation M38 Group 2</FooterH4Styled>
      <div className="FooterLinksStyled">
        <a
          href="https://github.com/alexbellairs"
          rel="noreferrer noopener"
          target="_blank"
        >
          alexbellairs
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/garethhough"
          rel="noreferrer noopener"
          target="_blank"
        >
          garethhough
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/harb0t"
          rel="noreferrer noopener"
          target="_blank"
        >
          harb0t
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/Indykatz"
          rel="noreferrer noopener"
          target="_blank"
        >
          Indykatz
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/jamlindsay97"
          rel="noreferrer noopener"
          target="_blank"
        >
          jamlindsay97
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/Javabar"
          rel="noreferrer noopener"
          target="_blank"
        >
          Javabar
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/jbridges373"
          rel="noreferrer noopener"
          target="_blank"
        >
          jbridges373
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/KarlEvans70"
          rel="noreferrer noopener"
          target="_blank"
        >
          KarlEvans70
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/Wren4Wren"
          rel="noreferrer noopener"
          target="_blank"
        >
          Wren4Wren
        </a>
        <p>
          <a href="/">Home</a>
        </p>
      </div>
    </FooterStyled>
  );
};

export default Footer;
