import styled from "styled-components";

export const ConfirmOrderStyled = styled.section`
  > div:nth-child(1) {
    display: flex;
    max-height: 700px;
    border: 1px solid ${(props) => props.theme.colors.secondary};
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
    // booking details
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
      //what, where and when
      > div:nth-child(2) {
        h3 {
          font-weight: bold;
        }
        span.details {
          font-weight: bold;
        }
        > p {
          margin: 0.5rem 0;
        }
      }
      > table {
        width: 100%;
        text-align: left;
        border-collapse: collapse;
        td:last-of-type,
        th:last-of-type {
          text-align: right;
        }

        tr td {
          border-bottom: 1px solid lightgray;
          border-top: 1px solid lightgray;
          padding: 0.3rem;
        }
        tr:first-of-type th {
          border-bottom: 1px solid grey;
        }
        tr:last-of-type td {
          border-bottom: 2px solid black;
          border-top: 2px solid black;
          font-weight: bold;
        }
      }
      > p:last-of-type {
        text-align: right;
        margin: 0.2rem 0 0;
      }
      // customer information
      > div:nth-child(5) {
        h4 {
          font-weight: bold;
          font-size: 1.2rem;
          margin: 0;
        }
        > div {
          p {
            margin: 0;
          }
          p:last-of-type a {
            color: ${(props) => props.theme.colors.secondary};
          }
        }
      }
    }
  }
  >div:nth-child(2) {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }
`;
