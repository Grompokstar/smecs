import styles                        from './header.module.scss';

const PageHeader = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className="page-content">
        <a href="/">
          <div className={styles.logo}>
            <img src="/images/logo.svg" alt="brand logo"/>
          </div>
        </a>
      </div>

    </div>
  )
};

export default PageHeader;