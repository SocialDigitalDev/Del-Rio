import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  z-index: 1000;
`;

export const Overlay = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(46, 46, 46, 0.8);
  z-index: 1;
`;

export const Content = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  background: #fff;
  padding: 15px 8%;
  display: flex;
  align-items: center;
  z-index: 2;
  border-top: 3px solid #48385C;
  
  @media (min-width: 768px) and (max-width: 1025px) {
    padding: 15px 20px;
  }

  @media (max-width: 767px) {
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px 15px 30px;
    flex-direction: column;
  }

  img{
    max-width: 120px;
  }

  p {
    font-family: Akrobat;
    font-size: 14px;
    line-height: 19px;
    font-weight: 600;
    color: #575757;
    padding: 0 15px;

    @media (max-width: 767px) {
      padding: 0;
    }

    a {
      color: #48385C;
      font-weight: 700;

      &::before {
        margin: 0px 5px 0px 0px;
        content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==');
      }
    }
  }

  .sy-btn-lgpd {
    background: #48385C;
    color: #fff;
    font-family: Akrobat;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    width: 100%;
    max-width: 116px;
    height: 38px;
    border: none;
    border-radius: 0;
    cursor: pointer;

    &:hover {
      filter: brightness(1.2);
    }

    @media (max-width: 1035px) {
      margin: 0;
      width: 85%;
    }
  }
`;
