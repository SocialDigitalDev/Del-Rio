export const syAtendimento = `
  .sy-atendimento{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1290px;
    margin: 30px auto;
    padding: 0 15px;
    min-height: 550px;
  }

  #guide-zendesk{
    width: 100%;
  }

  #guide-zendesk-iframe{
    min-width: 100%;
    border: none;
    overflow: auto;
    height: 115vh;
  }

  @media (max-width: 768px) {
    #guide-zendesk-iframe{
      min-height: 650px;
    }
  }
`;