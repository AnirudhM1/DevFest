import React from 'react';
import Styles from './Sponsors.module.scss';
import Logos from '../../components/Logos/Logos';
import IBM from '../../assets/img/sponsors/IBM.png';
import android from '../../assets/img/sponsors/android.png';
import airbnb from '../../assets/img/sponsors/airbnb.png';
import apiary from '../../assets/img/sponsors/apiary.png';
import apple from '../../assets/img/sponsors/apple-app.png';

function Sponsors() {
   return (
      <div className={Styles.brands}>
         <h1>Sponsors</h1>
         <h5>Meet our amazing Sponsors</h5>
         <div className={Styles.sponsors1}>
            <Logos
               array={[
                  {
                     path: IBM,
                     alt: 'IBM',
                  },
                  {
                     path: android,
                     alt: 'android',
                  },
                  {
                     path: airbnb,
                     alt: 'Airbnb',
                  },
                  {
                     path: apple,
                     alt: 'Apple',
                  },
                  {
                     path: apiary,
                     alt: 'Apiary',
                  },
                  {
                     path: IBM,
                     alt: 'IBM',
                  },
                  {
                     path: IBM,
                     alt: 'IBM',
                  },
                  {
                     path: android,
                     alt: 'android',
                  },
                  {
                     path: airbnb,
                     alt: 'Airbnb',
                  },
                  {
                     path: apple,
                     alt: 'Apple',
                  },
                  {
                     path: apiary,
                     alt: 'Apiary',
                  },
                  {
                     path: IBM,
                     alt: 'IBM',
                  },
                  {
                     path: IBM,
                     alt: 'IBM',
                  },
                  {
                     path: android,
                     alt: 'android',
                  },
                  {
                     path: airbnb,
                     alt: 'Airbnb',
                  },
                  {
                     path: apple,
                     alt: 'Apple',
                  },
                  {
                     path: apiary,
                     alt: 'Apiary',
                  },
                  {
                     path: IBM,
                     alt: 'IBM',
                  },
                  {
                     path: IBM,
                     alt: 'IBM',
                  },
                  {
                     path: android,
                     alt: 'android',
                  },
                  {
                     path: airbnb,
                     alt: 'Airbnb',
                  },
                  {
                     path: apple,
                     alt: 'Apple',
                  },
                  {
                     path: apiary,
                     alt: 'Apiary',
                  },
                  {
                     path: IBM,
                     alt: 'IBM',
                  },
               ]}
            />
         </div>
      </div>
   );
}

export default Sponsors;
