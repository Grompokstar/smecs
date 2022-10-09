import styles from './survey-way-section.module.scss';

const SurveyWaySection = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className="page-content">
        <h3 className="title-3 mb-40">
          How is the survey conducted?
        </h3>
        <div className="subtitle">
          Conducting a small business intelligence survey involves the following steps:
        </div>
        <div className={styles.way_bg_container}></div>
        <div className={styles.way_container}>
          <div className={styles.align_left_row}>
            <div className={styles.step}>
              <div className={styles.title}>Partner identification</div>
              <div className={styles.image_container}>
                <img src="/images/landing/survey_way_images/step_1.svg"/>
              </div>
              <div className={`${styles.description} ${styles.row_1}`}>
                A national institution – usually the business support organization –<br/>is selected as the survey focal point, and a core team of partner institutions is established.
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.title}>Training</div>
              <div className={styles.image_container}>
                <img src="/images/landing/survey_way_images/step_2.svg"/>
              </div>
              <div className={`${styles.description} ${styles.row_1}`}>
                ITC works with the focal point institution to select and train survey interviewers on data gathering, prepare a comprehensive list of small firms in the country and draw a representative sample of firms<br/>
                to be interviewed.
              </div>
            </div>
          </div>

          <div className={styles.align_right_row}>
            <div className={styles.step}>
              <div className={styles.title}>Data analysis</div>
              <div className={styles.image_container}>
                <img src="/images/landing/survey_way_images/step_3.svg"/>
              </div>
              <div className={`${styles.description} ${styles.row_2}`}>
                ITC analyses the collected data and interprets them in collaboration with partners. The focal point institution maps its services offering and account for gaps identified through the survey. The analysis is then presented in a country report.
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.title}>Data collection</div>
              <div className={styles.image_container}>
                <img src="/images/landing/survey_way_images/step_4.svg"/>
              </div>
              <div className={`${styles.description} ${styles.row_2}`}>
                Select small businesses receive an information pack, then a phone call to determine their willingness to participate in the survey. Finally, face-to-face interviews are conducted.
              </div>
            </div>
          </div>

          <div className={styles.align_left_row}>
            <div className={styles.step}>
              <div className={styles.title}>Results validation</div>
              <div className={styles.image_container}>
                <img src="/images/landing/survey_way_images/step_5.svg"/>
              </div>
              <div className={`${styles.description} ${styles.row_3}`}>
                Report findings are discussed and validated among partners.
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.title}>Report launch</div>
              <div className={styles.image_container}>
                <img src="/images/landing/survey_way_images/step_6.svg"/>
              </div>
              <div className={`${styles.description} ${styles.row_3}`}>
                The focal point institution convenes a stakeholder meeting where survey results are presented. Solutions are discussed and complementary areas of ITC work and technical assistance can be proposed to support them.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SurveyWaySection;