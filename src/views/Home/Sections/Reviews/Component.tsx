import styles from './reviews-section.module.scss';

const data = [
  {
    id: 1,
    name: 'Seth Twum-Akwaboah',
    position: 'CEO, Association of Ghana Industries',
    photo: '/images/landing/reviews/photo_2.png',
    review: 'Work carried out through the SME Competitiveness Survey and the Alliances for Action approach aims to provide data so that multi-stakeholder groups can decide how best to target support and activities'
  },
  {
    id: 2,
    name: 'Mary Ncube',
    position: 'Board Chairperson, Zambia Development Agency',
    photo: '/images/landing/reviews/photo_1.png',
    review: 'The SME Competitiveness Survey is extremely important as it provides ZDA with an opportunity to interface with the private sector, understand their production and marketing dynamics as well as their challenges, and make recommendations to government.'
  },
  {
    id: 3,
    name: 'Seth Twum-Akwaboah',
    position: 'CEO, Association of Ghana Industries',
    photo: '/images/landing/reviews/photo_2.png',
    review: 'Work carried out through the SME Competitiveness Survey and the Alliances for Action approach aims to provide data so that multi-stakeholder groups can decide how best to target support and activities'
  },
  {
    id: 4,
    name: 'Mary Ncube',
    position: 'Board Chairperson, Zambia Development Agency',
    photo: '/images/landing/reviews/photo_1.png',
    review: 'The SME Competitiveness Survey is extremely important as it provides ZDA with an opportunity to interface with the private sector, understand their production and marketing dynamics as well as their challenges, and make recommendations to government.'
  },
]

const ReviewsSection = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className="page-content">
        <h3 className="title-3">
          What are partners saying about ITC’s work?
        </h3>

        <div className={styles.reviews}>
          {
            data.map((item) => (
              <div className={styles.review_card} key={item.id}>
                <div className={styles.quote}>
                  “
                </div>
                <div className={styles.review_text}>
                  {item.review}
                </div>

                <div className={styles.person_row}>
                  <img src={item.photo}/>
                  <div className={styles.person}>
                    <div className={styles.name}>
                      {item.name}
                    </div>
                    <div className={styles.position}>
                      {item.position}
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default ReviewsSection;