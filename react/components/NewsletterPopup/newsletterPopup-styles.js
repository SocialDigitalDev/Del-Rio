import styled from "styled-components";

export const Container = styled.section `
  width: 100%;
  display: ${({ show }) => (show ? "block !important" : "none")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  pointer-events: ${({ show }) => (show ? "auto" : "none")};
  transition: 0.2s ease-in-out;

  text-align: center;
  color: #000;
  position: relative;
`;

export const PopUp = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  flex-direction: column;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  &::before {
    content: "";
    background: #fff;
    opacity: 0.8;
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;

export const PopInner = styled.div `
  position: relative;
  width: 100%;
  max-width: 731px;
  background-color: #000;
  background-image: url("/arquivos/banner-popup-news.png");
  height: 399px;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 640px) {
    max-width: none;
    width: 90%;
  }

  .sy-pop-inner-img {
    overflow: hidden;
    width: 100%;
    max-width: 350px;
    max-height: 399px;

    img {
      height: 100%;
      width: auto;
      max-width: none;
      filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.16));
    }
  }

  .sy-pop-inner-form{
    display: flex;
    flex-direction: column;
    max-width: 380px;
    width: 100%;
    margin: 0 auto;
    padding: 30px 0;

    @media (max-width: 640px) {
      padding: 30px 20px;
    }
  }
  
`;

export const CloseBtn = styled.button `
  position: absolute;
  top: 10px;
  right: 16px;
  border: 0;
  color: #fff;
  font-size: 25px;
  cursor: pointer;
  background: transparent;
`;

export const TextContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 251px;
  margin: 0 auto 32px;
`;

export const SubText = styled.text `
  color: #FFFFFF;
  font-family: Akrobat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: uppercase;

  .sy-pop-success {
    font-family: Akrobat;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    text-transform: uppercase;
    display: block;
  }
`;

export const InputContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 271px;
  align-items: flex-start;
  margin: 0 auto 32px;

  label {
    color: #fff;
    font-family: Akrobat;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 17px;
    text-align: left;
    display: flex;
    align: center;

    a {
      color: #fff;
      text-decoration: underline;
    }

    input {
      appearance: none;
      width: 26px;
      height: 18px;
      border: none;
      cursor: pointer;
      margin-right: 6px;
      background: #FFFFFF;
      @media (max-width: 640px) {
        border: 0.5px solid #B3B3B3;
      }

      &:focus {
        border: 1px solid #E53939;
        &::placeholder {
          color: #E53939;
        }
      }

      &.is--active {
        background: transparent;
        @media (max-width: 640px) {
          border: none;
        }

        &::before{
          content: '';
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='mask0' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='18' height='18'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 0H16C17.11 0 18 0.9 18 2V16C18 17.1 17.11 18 16 18H2C0.89 18 0 17.1 0 16V2C0 0.9 0.89 0 2 0ZM2 9L7 14L16 5L14.59 3.58L7 11.17L3.41 7.59L2 9Z' fill='white'/%3e%3c/mask%3e%3cg mask='url(%23mask0)'%3e%3crect x='-3' y='-3' width='24' height='24' fill='white'/%3e%3c/g%3e%3c/svg%3e ");
          width: 18px;
          height: 18px;
          display: inline-block;
        }
      }
    }
  }
`;
export const TextInput = styled.input `
  color: #989898;
  font-family: Akrobat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  padding: 6px 14px;
  outline: none;
  width: 100%;
  max-width: 271px;
  height: 32px;
  background: #FFFFFF;
  border: 0.5px solid #B2B2B2;
  margin-bottom: 16px;

  &::placeholder {
    color: #989898;
    font-size: 16px;
  }

  &[placeholder="Preencha o campo corretamente"], &[placeholder="Email inválido"] {
    &:focus {
      border: 1px solid #E53939;
      &::placeholder {
        color: #E53939;
      }
    }
  }
`;

export const ButtonEnviar = styled.button `
  background: #ff03ec;
  color: #fff;
  font-family: Akrobat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  width: 177px;
  height: 48px;
  border: none;
  border-radius: 0;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;