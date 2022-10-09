import styles                        from './footer.module.scss';
import Link from 'next/link';

const PageFooter = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className="page-content">

        <div className={styles.nav_row}>
          <div className={styles.navigation}>
            <Link href={"/"}>
              <a className={styles.footer_link}>
                Site map
              </a>
            </Link>
            <Link href={"/"}>
              <a className={styles.footer_link}>
                Contact Us
              </a>
            </Link>
            <Link href={"/"}>
              <a className={styles.footer_link}>
                Terms & Conditions
              </a>
            </Link>
          </div>
          <div className={styles.footer_text}>
            Copyright © 2021
          </div>
        </div>

        <div className={styles.socials_row}>
          <div className={styles.socials}>
            <Link href={"/"}>
              <a className={styles.social_link}>
                <img src="/images/landing/footer/Facebook.svg"/>
              </a>
            </Link>
            <Link href={"/"}>
              <a className={styles.social_link}>
                <img src="/images/landing/footer/Twitter.svg"/>
              </a>
            </Link>
            <Link href={"/"}>
              <a className={styles.social_link}>
                <img src="/images/landing/footer/Instagram.svg"/>
              </a>
            </Link>
            <Link href={"/"}>
              <a className={styles.social_link}>
                <img src="/images/landing/footer/LinkedIn.svg"/>
              </a>
            </Link>
            <Link href={"/"}>
              <a className={styles.social_link}>
                <img src="/images/landing/footer/YouTube.svg"/>
              </a>
            </Link>
          </div>

          <div className={styles.logos}>
            <img src="/images/landing/footer/WTO.svg"/>
            <img src="/images/landing/footer/UN.svg"/>
          </div>
        </div>

      </div>
    </div>
  )
};

export default PageFooter;