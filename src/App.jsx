import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Accordion, Data} from "./components";
// import {Accordion} from './components'

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        {/* <Billing /> */}
        <CardDeal />
        <Business />
        <Data/>
        
        {/* <Testimonials />
        <Clients /> */}
        <CTA />
        <Accordion/>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
