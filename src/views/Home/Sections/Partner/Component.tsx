import styles                        from './partner-section.module.scss';

const PartnerSection = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.with_image_bg_block}>
        <div className="page-content">
          <h2 className="title-2">Become<br/> our Partner</h2>
          <div className={styles.subtitle}>
            Why work with ITC?
          </div>
          <div className={styles.description}>
            By partnering with ITC, countries can learn the full, data-based story of the state of its small businesses, then use that information to better support them. ITC provides each partner country the following support in collecting and assessing information on SME competitiveness:
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className={styles.features}>
          <div className={styles.feature}>
            <img src="/images/landing/partner_icons/capacity.svg"/>
            <div className={styles.label}>
              Capacity building
            </div>
          </div>
          <div className={styles.feature}>
            <img src="/images/landing/partner_icons/data-scientist.svg"/>
            <div className={styles.label}>
              Expert advice
            </div>
          </div>
          <div className={styles.feature}>
            <img src="/images/landing/partner_icons/monitor.svg"/>
            <div className={styles.label}>
              Software
            </div>
          </div>
          <div className={styles.feature}>
            <img src="/images/landing/partner_icons/feedback.svg"/>
            <div className={styles.label}>
              Feedback reports
            </div>
          </div>

          <div className={styles.feature}>
            <img src="/images/landing/partner_icons/administrator.svg"/>
            <div className={styles.label}>
              Support
            </div>
          </div>
          <div className={styles.feature}>
            <img src="/images/landing/partner_icons/quality-control.svg"/>
            <div className={styles.label}>
              Quality control
            </div>
          </div>
          <div className={styles.feature}>
            <img src="/images/landing/partner_icons/global-marketing.svg"/>
            <div className={styles.label}>
              Outreach reports
            </div>
          </div>
          <div className={styles.feature}>
            <img src="/images/landing/partner_icons/competition.svg"/>
            <div className={styles.label}>
              An accurate dataset
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className={styles.partner_logos_section}>
          <div className={styles.logos_row}>
            <img
              className={styles.logo}
              src="/images/landing/partner_logos/logo_1.png"
            />
            <img
              className={styles.logo}
              src="/images/landing/partner_logos/logo_2.png"
            />
            <img
              className={styles.logo}
              src="/images/landing/partner_logos/logo_3.png"
            />
            <img
              className={styles.logo}
              src="/images/landing/partner_logos/logo_4.png"
            />
            <img
              className={styles.logo}
              src="/images/landing/partner_logos/logo_5.png"
            />
          </div>

          <div className={styles.logos_description}>
            With more than 50 years of trade and development experience, ITC has supported partners to survey more than 18,000 companies in over 46 countries, spotlighting opportunities<br/>to improve small business competitiveness.
          </div>
        </div>
        <button className={`${styles.become_partner_button} ui-btn primary`}>Become our Partner</button>
      </div>
    </div>
  )
};

export default PartnerSection;