import styles                        from './competitiveness-section.module.scss';

const CompetitivenessSection = (): JSX.Element => {

  const BlockItem = ({bgColor, text, iconSource}) => {
    return (
      <div
        style={{background: `${bgColor} url("/images/landing/bricks.svg") no-repeat` }}
        className={styles.block_item}
      >
        <img
          className={styles.icon}
          src={iconSource}
        />
        <div className={styles.item_text}>{text}</div>
      </div>
    )
  }


  return (
    <>
      <div className={styles.root}>
        <div className="page-content">
          <h1 className={styles.title}>What is competitiveness?</h1>
          <div className={`${styles.description} mb-50`}>
            Competitiveness is the ability of a firm to design, produce and&nbsp;commercialise a good or service that meets market demand, while connecting with the business environment and earning returns in a sustainable way. The&nbsp;more competitive a firm, the more likely it is to export.
          </div>
          <div className={styles.description}>
            At ITC, we assess firm competitiveness along three pillars – <span className="weight-700">Compete, Connect, Change</span> and three levels of competitiveness – <span className="weight-700">Firm Capabilities, Business Ecosystems, National Environment.</span>
          </div>

          <h2 className={styles.title2}>Competitiveness Themes</h2>
          <div className={styles.subtitle}>
            Each pillar of competitiveness has three themes, which allow identifying where the strengths and weaknesses of a firm lie.
          </div>

          <div className={styles.blocks_row}>
            <div className={styles.block}>
              <div className={styles.block_title} style={{color: '#FF1F00'}}>
                Compete
              </div>
              <BlockItem
                bgColor='#E02955'
                text="Production efficiency"
                iconSource='/images/landing/competitiveness_icons/efficiency.svg'
              />
              <BlockItem
                bgColor='#FF9700'
                text="Resource management"
                iconSource='/images/landing/competitiveness_icons/management.svg'
              />
              <BlockItem
                bgColor='#FCC500'
                text="Certification"
                iconSource='/images/landing/competitiveness_icons/certificate.svg'
              />
            </div>

            <div className={styles.block}>
              <div className={styles.block_title} style={{color: '#00A51A'}}>
                Connect
              </div>
              <BlockItem
                bgColor='#9CD300'
                text="Buyers"
                iconSource='/images/landing/competitiveness_icons/customer-behavior.svg'
              />
              <BlockItem
                bgColor='#16DB35'
                text="Suppliers"
                iconSource='/images/landing/competitiveness_icons/supplier.svg'
              />
              <BlockItem
                bgColor='#00E1AE'
                text="Institutions"
                iconSource='/images/landing/competitiveness_icons/bank.svg'
              />
            </div>

            <div className={styles.block}>
              <div className={styles.block_title} style={{color: '#6B68FF'}}>
                Change
              </div>
              <BlockItem
                bgColor='#00B3FF'
                text="Finance"
                iconSource='/images/landing/competitiveness_icons/finance.svg'
              />
              <BlockItem
                bgColor='#436CFF'
                text="Skills"
                iconSource='/images/landing/competitiveness_icons/pencil.svg'
              />
              <BlockItem
                bgColor='#6B68FF'
                text="Innovation"
                iconSource='/images/landing/competitiveness_icons/innovation.svg'
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.empty_block}/>
    </>

  )
};

export default CompetitivenessSection;