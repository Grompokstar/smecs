import styles                        from './coverage-section.module.scss';

const CoverageSection = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className="page-content">
        <h2 className={styles.title}>Geographical Coverage</h2>
        <div className={styles.subtitle}>
          More than 35,000 companies in over 55 countries have been surveyed to date using the SME Competitiveness Survey.
        </div>
        <div className={styles.world_image_container}>
          <img src="/images/landing/world_map.png" alt="world map coverage"/>
        </div>
        <div className={styles.scale_container}>
          <img src="/images/landing/scale.svg" alt="world scale"/>
        </div>
      </div>
    </div>
  )
};

export default CoverageSection;