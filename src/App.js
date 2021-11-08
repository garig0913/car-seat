import { useEffect } from 'react';
import './App.css';
import WebFont from 'webfontloader';
import Grid from './components/Grid';
import headerImg from './images/main.jpg'
import adImg from './images/ad.jpg'
import { CgAdidas } from 'react-icons/cg'

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Nunito', 'Chilanka', 'Oxygen', 'JetBrains Mono', 'Manrope', 'Raleway', 'Lato', 'Oswald']
      }
    });
  }, []);

  const data = [
    {
      desc: 'BABY CAR-SEAT',
      img: adImg,
      logo: <CgAdidas />,
      discount: '-30%',
      code: '0913'
    },
    {
      desc: 'BABY CAR-SEAT',
      img: adImg,
      logo: <CgAdidas />,
      discount: '-10%',
      code: '0913'
    },
    {
      desc: 'BABY CAR-SEAT',
      img: adImg,
      logo: <CgAdidas />,
      discount: '-30%',
      code: '0913'
    },
    {
      desc: 'BABY CAR-SEAT',
      img: adImg,
      logo: <CgAdidas />,
      discount: '-10%',
      code: '0913'
    },
    {
      desc: 'BABY CAR-SEAT',
      img: adImg,
      logo: <CgAdidas />,
      discount: '-30%',
      code: '0913'
    },
    {
      desc: 'BABY CAR-SEAT',
      img: adImg,
      logo: <CgAdidas />,
      discount: '-20%',
      code: '0913'
    },
    {
      desc: 'BABY CAR-SEAT',
      img: adImg,
      logo: <CgAdidas />,
      discount: '-10%',
      code: '0913'
    },
    {
      desc: 'BABY CAR-SEAT',
      img: adImg,
      logo: <CgAdidas />,
      discount: '-20%',
      code: '0913'
    },
    {
      desc: 'BABY CAR-SEAT',
      img: adImg,
      logo: <CgAdidas />,
      discount: '-50%',
      code: '0913'
    },

  ]

  return (
    <div className="App">
      <div className='header'>
        <img src={headerImg} className='headerImg' />
        <h1>EASYSHOP.MN COUPON</h1>
      </div>
      <div className='discount'>
        <h1 className='h1'>-10,20,30,40,50%</h1>
      </div>
      <Grid datas={data} />
    </div>
  );
}

export default App;
