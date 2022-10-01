import styles                        from './home.module.scss';
import MainSection from "./Sections/Main";

const HomeView = (): JSX.Element => {
    return (
    <div className={styles.root}>
        <MainSection/>
    </div>
  )
};

export default HomeView;