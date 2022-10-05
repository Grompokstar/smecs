import styles from './home.module.scss';
import MainSection from "./Sections/Main";
import CompetitivenessSection from "./Sections/Competititveness";
import HowSection from "./Sections/How";
import CoverageSection from "./Sections/Coverage";
import PartnerSection from "./Sections/Partner";

const HomeView = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <MainSection/>
      <CompetitivenessSection/>
      <HowSection/>
      <CoverageSection/>
      <PartnerSection/>
    </div>
  )
};

export default HomeView;