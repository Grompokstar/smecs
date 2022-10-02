import styles                        from './how-section.module.scss';

const HowSection = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className="page-content">
        <div className={styles.quote_row}>
          <img className={styles.quote_right} src="/images/landing/quote.svg"/>
          <div className={styles.text}>
            The health of a country’s economy is closely linked to the competitiveness of its small and medium-sized enterprises (SMEs). Collecting data at the firm level should be the first step to support their growth, as we must know the strengths to be leveraged and weaknesses to be addressed.
          </div>
          <img className={styles.quote_left} src="/images/landing/quote.svg"/>
        </div>

        <h2 className={styles.title}>
          How does ITC obtain data on small businesses competitiveness?
        </h2>

        <div className={styles.content_row}>
          <div className={styles.image_container}>
            <img src='/images/landing/how_section_image.png'/>
          </div>
          <div className={styles.text_container}>
            <div className={styles.main_text}>
              To collect the data accurately, ITC developed the SME Competitiveness Survey.
            </div>
            <div className={styles.second_text}>
              <span className="weight-700">SME Competitiveness Survey</span> is more than a questionnaire – it assesses the strengths and weaknesses of enterprises in a country in a clear, accessible way, shedding light on opportunities to increase sales at home and abroad.
            </div>
            <div className={styles.button_row}>
              <button className="ui-btn primary">Assess my Firm</button>
              <div className={styles.button_info_icon}>
                <img src="/images/landing/common_icons/info_icon.svg" width="20" height="20"/>
              </div>
              <div className={styles.button_description}>
                The data collection and analysis process is anonymised to protect the privacy of participating firms.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HowSection;