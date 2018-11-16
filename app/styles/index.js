import normalize from './normalize';
import resume from '../containers/Home/styles';

export default `
  ${normalize}

  * {
    font-family: Arial, sans-serif;
    box-sizing: border-box;
    line-height: 1.4;
  }

  body {
    margin: 0;
    font-size: 12pt;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: #33659c;
    text-decoration: none;
  }

  ${resume}
`;
