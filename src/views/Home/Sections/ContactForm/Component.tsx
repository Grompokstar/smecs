import styles   from './contact-form-section.module.scss';
import {Input} from 'rsuite';

const ContactFormSection = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className="page-content">
        <h3>
          Contact Us
        </h3>

        <div className={styles.form_container}>
          <div className={styles.inputs_row}>
            <Input
              placeholder="Your Email Adress"
            />
            <Input
              placeholder="Your Email Adress"
            />
          </div>

          <Input as="textarea" rows={8} placeholder="Message" />

          <div className={styles.btn_row}>
            <button className="ui-btn primary outline">Send</button>
          </div>

        </div>


      </div>
    </div>
  )
};

export default ContactFormSection;