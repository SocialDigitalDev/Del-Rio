import styled from "styled-components";

//out-rosa
export const Container = styled.section`
  background: url(/arquivos/bg-news-out-rosa.png) no-repeat center;
  background-size: 100% 100%;
  position: relative;
  display: block;
  margin-top: 70px;
  background-color: rgba(241, 126, 157, 0.4);

  @media (max-width: 640px) {
    background: none;
  }

  .sy-newsletter-center {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    padding: 18px 0;


    @media (max-width: 1080px) {
      max-width: 750px;
      padding: 18px 0;
    }

    @media (max-width: 640px) {
      flex-direction: column;
      padding: 0 0 40px; 
    }

    h2 {
      color: #FFFFFF;
      font-size: 30px;
      line-height: 40px;
      font-weight: 600;
      text-align: left;
      max-width: 290px;
      span{
        font-size: 30px;
        line-height: 40px;
        font-weight: 600;
        text-align: left;
      }

      @media (max-width: 640px) {
        background: url(/arquivos/banner-newsletterv2.png) no-repeat center;
        background-size: cover;
        background-color: rgba(241, 126, 157, 0.4);
        background-position-y: initial;
        max-width: none;
        width: 100%;
        height: auto;
        padding: 42px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    p {
      color: #000;
      font-size: 30px;
      line-height: 40px;
      font-weight: 600;
      text-align: left;
    }
  }

  .sy-form-newsletter {
    display: flex;

    @media (max-width: 1080px) {
      flex-direction: column;
      max-width: 306px;
      align-items: center;
    }
    
    &__container{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-left: 66px;

      @media (max-width: 1080px) {
        margin-left: 0;
        flex-direction: column;
        align-items: center;
      }
    }

    .sy-inputs-newsletter {
      width: 100%;
      display: flex;
      
      @media (max-width: 1080px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      input[type='text'] {
        width: 100%;
        min-width: 290px;
        max-width: 306px;
        border: 0;
        outline: none;
        height: 32px;
        line-height: 20px;
        padding: 6px 14px;
        color: #989898;
        font-size: 16px;
        background: #FFFFFF;


        @media (min-width: 1081px) {
          + input[type='text'] {
            margin-left: 16px;
          }
        }
        @media (max-width: 640px) {
          border: 0.5px solid #B2B2B2;
        }

        @media (max-width: 1080px) {
          + input[type='text'] {
            margin-top: 16px;
          }
        }

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

      }
    }

    .sy-termo-newsletter {
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      display: flex;
      align-items: center;
      width: 100%;
      cursor: pointer;
      margin-top: 12px;

      @media (max-width: 640px) {
        margin-top: 0;
        margin: 6px auto 16px;
      }

      @media (min-width: 641px) and (max-width: 1080px) {
        justify-content: center;
        margin: 8px auto;
      }

      a {
        color: #0199FF;
        @media (min-width: 641px) {
          color: #fff;
        }
      }

      input[type="checkbox"]{
        appearance: none;
        min-width: 18px;
        min-height: 18px;
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

            @media (max-width: 640px) {
              background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='mask0' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='18' height='18'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 0H16C17.11 0 18 0.9 18 2V16C18 17.1 17.11 18 16 18H2C0.89 18 0 17.1 0 16V2C0 0.9 0.89 0 2 0ZM2 9L7 14L16 5L14.59 3.58L7 11.17L3.41 7.59L2 9Z' fill='white'/%3e%3c/mask%3e%3cg mask='url(%23mask0)'%3e%3crect x='-3' y='-3' width='24' height='24' fill='%23323232'/%3e%3c/g%3e%3c/svg%3e ");
            }
          }

        }
      }
    }

    .sy-btn {
      color: #ffffff;
      background: #323232;
      width: 127px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;

      @media (min-width: 1081px) {
        margin-left: 8px;
      }
    }
  }
`;

export const SuccessMessage = styled.h3`
  color: #1B1416;
  font-size: 30px;
  line-height: 40px;
  margin-right: 0% !important;
  white-space: nowrap;

  @media (max-width: 640px) {
    font-size: 28px;
    line-height: 38px;
    max-width: 370px;
    width: 100%;
    margin: 0 auto !important;
    white-space: normal;
    text-align: center
  }
      
`;
