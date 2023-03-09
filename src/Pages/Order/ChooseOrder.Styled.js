import styled from "styled-components";

export const ChooseOrderStyled = styled.section`
  // boxed div
  > div:nth-child(1) {
    border: 1px solid ${(props) => props.theme.colors.secondary};

    //flexing div
    > div:nth-child(1) {
      max-height: 700px;
      display: flex;
      column-gap: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px dashed ${(props) => props.theme.colors.secondary};
      // imagewrapper
      > div:nth-child(1) {
        aspect-ratio: 1 / 2;
        overflow: hidden;
        border: 10px solid ${(props) => props.theme.colors.secondary};
        flex: 3;
        img {
          transform: scale(4);
          margin-top: 10rem;
        }
      }
      // event and contact info
      > div:nth-child(2) {
        flex: 5;
        padding: 1rem;
        h2 {
          font-size: 2.5rem;
          margin: 0;
          padding-bottom: 1rem;
          text-align: right;
          border-bottom: 1px solid ${(props) => props.theme.colors.theLightGrey};
          color: ${(props) => props.theme.colors.primary};
        }
        > div:nth-child(2) {
          > h3 {
            font-size: 1.5rem;
            font-weight: bold;
            text-align: right;
            margin: 0;
            padding: 1rem 0;
          }
          > p {
            text-align: right;
          }
        }
        > form > div {
          > div {
            display: grid;
            grid-template-columns: 1.5fr 5fr;
            margin-top: 0.5rem;
            input {
              color: ${(props) => props.theme.colors.primary};
              line-height: 2;
              border: 1px solid #707070;
            }
          }
          > div:nth-child(4) {
            grid-template-columns: 1.5fr 2.5fr 2.5fr;
          }
        }
        > p {
          text-align: right;
          font-size: 0.8rem;
        }
        // Prices and number of tickets
        > div:nth-child(5) {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-top: 3rem;
          > p:first-of-type {
            span {
              cursor: pointer;
            }
            span:nth-child(1),
            span:nth-child(3) {
              background-color: #dedede;
              padding: 1rem;
            }
            span:nth-child(1) {
              border-bottom-left-radius: 5px;
              border-top-left-radius: 5px;
            }
            span:nth-child(3) {
              border-bottom-right-radius: 5px;
              border-top-right-radius: 5px;
            }
            span:nth-child(2) {
              background-color: #eeeeee;
              padding: 1rem 1.3rem;
            }
          }
          > div:nth-child(2) {
            margin-left: 1rem;
            p {
              padding: 0;
              margin: 0;
            }
            p:first-of-type {
              font-size: 1.3rem;
              font-weight: bold;
              margin-bottom: 0;
            }
            p:last-of-type {
              margin-top: 0;
              font-size: 0.8rem;
            }
          }
        }
      }
    }
    > div:nth-child(2) {
      // event info
      > div:nth-child(2) {
      }
    }
    // ticket selection
    > div:nth-child(2) {
      margin: 2rem;
      p.stage {
        background-color: ${(props) => props.theme.colors.secondary};
        text-align: center;
        line-height: 2;
        color: white;
        margin-bottom: 2rem;
        font-weight: bold;
      }
      div.venue {
        display: grid;
        grid-template-rows: repeat(auto, 1fr);
        justify-content: space-between;
        gap: 0.5rem;

      }
      p.choose-text {
        text-align: center;
      }
      span {
        border-radius: 50%;
        border: 1px solid ${(props) => props.theme.colors.secondary};
        display: inline-block;
        width: 4rem;
        height: 4rem;
        cursor: pointer;
      }
      span.bookedNow {
        background-color: ${(props) => props.theme.colors.tertiary};
      }
      span.booked {
        background-color: ${(props) => props.theme.colors.secondary};
      }
      span.row-three {
        grid-row: 3;
      }

      span.row-four {
        grid-row: 4;
      }

      span.row-five {
        grid-row: 5;
      }

      span.row-six {
        grid-row: 6;
      }

      span.row-seven {
        grid-row: 7;
      }

      span.row-eight {
        grid-row: 8;
      }

      span.row-nine {
        grid-row: 9;
      }

      span.row-ten {
        grid-row: 10;
      }
    }
  }
`;
