import { data } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Data = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Get access to institutional and  data with just a command 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Over 40 built in commands to pull all sort of real-time data for market analysis 
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={layout.sectionImg}>
      <img src={data} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Data;
