import styles                        from './header.module.scss';
import Link from 'next/link';

const PageHeader = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className="page-content">
        <Link href="/">
          <a>
            <div className={styles.logo}>
              <img src="/images/logo.svg" alt="brand logo"/>
            </div>
          </a>
        </Link>

      </div>

    </div>
  )
};

export default PageHeader;