import styles from './home.module.scss';
import MainSection from "./Sections/Main";
import CompetitivenessSection from "./Sections/Competititveness";
import HowSection from "./Sections/How";
import CoverageSection from "./Sections/Coverage";

const HomeView = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <MainSection/>
      <CompetitivenessSection/>
      <HowSection/>
      <CoverageSection/>
    </div>
  )
};

export default HomeView;