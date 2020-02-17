import styled from 'styled-components';

import background from '~/assets/background.png';
import background02 from '~/assets/background02.png';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: url(${props => (props.mode ? background : background02)});
`;

export const Background = styled.img`
  width: 100%;
`;

export const LightMode = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  header {
    width: 100%;
    max-width: 1120px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      height: 100%;
      display: flex;
      align-items: center;

      li {
        margin-right: 16px;
      }
    }

    nav {
      height: 100%;
      display: flex;
      align-items: center;

      button {
        height: 40px;
        width: 40px;
        border: 0;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.4);
      }
    }
  }

  div {
    width: 100%;
    max-width: 1120px;
    height: 100%;
    padding-left: 100px;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;

    div.text-box {
      margin-top: 50px;
      height: 200px;
      width: 600px;
      background: #a69472;
      padding: 20px 40px 20px 150px;
      border-radius: 4px;
      font-size: 16px;

      p {
        color: #fff;
      }

      strong {
        color: #f2b66d;
      }
    }

    nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      button {
        height: 30px;
        width: 30px;
        border: 1px solid #f2b66d;
        background: #fff;
        border-radius: 15px;

        color: #f2b66d;
        font-weight: bold;
      }

      hr {
        height: 30px;
        width: 8px;
        background: #f2b66d;
        border: 0;
      }
    }

    img {
      position: absolute;
      left: 40px;
      height: 600px;
    }
  }
`;

export const DarkMode = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  header {
    width: 100%;
    max-width: 1120px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      height: 100%;
      display: flex;
      align-items: center;

      li {
        margin-right: 16px;
      }
    }

    nav {
      height: 100%;
      display: flex;
      align-items: center;

      button {
        height: 40px;
        width: 40px;
        border: 0;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.4);
      }
    }
  }

  div {
    width: 100%;
    max-width: 1120px;
    height: 100%;
    padding-left: 100px;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;

    div.text-box {
      margin-top: 50px;
      height: 200px;
      width: 600px;
      background: #1c2126;
      padding: 20px 40px 20px 150px;
      border-radius: 4px;
      font-size: 16px;

      p {
        color: #fff;
      }

      strong {
        color: #d94343;
      }
    }

    nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      button {
        height: 30px;
        width: 30px;
        border: 2px solid #d94343;
        background: #fff;
        border-radius: 15px;

        color: #d94343;
        font-weight: bold;
      }

      hr {
        height: 30px;
        width: 8px;
        background: #d94343;
        border: 0;
      }
    }

    img {
      position: absolute;
      left: 40px;
      height: 600px;
    }
  }
`;
