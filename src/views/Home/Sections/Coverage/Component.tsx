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

        <h3 className="title-3 mb-30">Publications</h3>
        <div className={`${styles.subtitle} mb-60`}>
          SME competitiveness survey results are published as part of the ITC promoting competitiveness series of reports.
        </div>

        <div className={styles.promo_images_row}>
          <div className={styles.item}>
            <img className={styles.image} src='/images/landing/publication_1.png'/>
            <div className={styles.description}>
              Promoting SME competitiveness in Africa
            </div>
          </div>

          <div className={styles.item}>
            <img className={styles.image} src='/images/landing/publication_2.png'/>
            <div className={styles.description}>
              Promoting SME competitiveness in the Gambia
            </div>
          </div>

          <div className={styles.item}>
            <img className={styles.image} src='/images/landing/publication_3.png'/>
            <div className={styles.description}>
              Promoting SME competitiveness in Hungary
            </div>
          </div>

          <div className={styles.item}>
            <img className={styles.image} src='/images/landing/publication_4.png'/>
            <div className={styles.description}>
              SME competitiveness in Ghana
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CoverageSection;