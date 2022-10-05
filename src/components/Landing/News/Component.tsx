import styles                        from './news.module.scss';

const data = [
  {
    type: 'news',
    image: '/images/landing/news/photo_1.png',
    title: 'On-site data collection on Eswatini agribusinesses started',
    date: '1 February 2022',
    place: 'Mbabane, Eswatini',
    text: 'A nation-wide survey on the export competitiveness of agribusinesses in Eswatini has started on 1 February...'
  },
  {
    type: 'news',
    image: '/images/landing/news/photo_2.png',
    title: 'Interviewers completed training on SME Competitiveness survey methods',
    date: '15 April 2022',
    place: 'Bogotá, Colombia',
    text: 'Interviewers from FENALCO have successfully completed training on SME competitiveness data collection...'
  },
  {
    type: 'event',
    image: '/images/landing/news/photo_3.png',
    title: 'Trade competitiveness study of Tajik women entrepreneurs launched',
    date: '6 March 2022',
    place: 'Dushanbe, Tajikistan',
    text: 'Tajik women entrepreneurs have seen improved business ecosystem but continue to face access to finance...'
  },
  {
    type: 'event',
    image: '/images/landing/news/photo_4.png',
    title: 'Presentation and validation of SME study in Togo',
    date: '19 January 2022',
    place: 'Lomé, Togo',
    text: 'ITC presented findings of the SME Competitiveness Survey on Togolese businesses for validation to the...'
  }
]

const News = (): JSX.Element => {
  return (
    <div className={styles.news}>
      {
        data.map((item) => (
          <div className={styles.item_card}>
            <div className={styles.card_type}>
              {item.type}
            </div>
            <img src={item.image}/>
            <div className={styles.text_content}>
              <div className={styles.title}>{item.title}</div>

              <div className={styles.prop_row}>
                <img src="/images/icons/time.svg"/>
                <span className={styles.prop_value}>{item.date}</span>
              </div>
              <div className={styles.prop_row}>
                <img src="/images/icons/place.svg"/>
                <span className={styles.prop_value}>{item.place}</span>
              </div>

              <div className={styles.text}>
                {item.text}
              </div>
            </div>

          </div>
        ))
      }

    </div>
  )
};

export default News;