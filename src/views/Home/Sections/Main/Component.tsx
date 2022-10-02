import styles                        from './main-section.module.scss';

const MainSection = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className="page-content">
        <div className={styles.text_content}>
          <h1 className={styles.title}>
            Small & medium enterprise <span className="weight-600">Competitiveness Atlas</span>
          </h1>
          <div className={styles.description}>
            <span className="weight-700">Deepen understanding of small and medium-sized enterprises competitiveness</span> worldwide by assessing their strengths and weaknesses in a clear, accessible way, shedding light on opportunities to increase sales at home and abroad.
          </div>

          <div className="mb-28">
            <button className="ui-btn primary">Assess my Firm</button>
          </div>
          <div>
            <button className="ui-btn">Assess my Country</button>
          </div>
        </div>
        <div className={styles.planets}/>
      </div>
    </div>
  )
};

export default MainSection;