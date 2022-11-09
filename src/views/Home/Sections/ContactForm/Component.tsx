import {useState, forwardRef} from 'react';
import styles   from './contact-form-section.module.scss';
import { Input, Button, Form, Schema } from 'rsuite';

const emptyModel = {
  name: '',
  email: '',
  message: ''
}

const modelEmail = Schema.Model({
  name: Schema.Types.StringType(),
  email: Schema.Types.StringType().isRequired('required field').isEmail('incorrect email'),
  message: Schema.Types.StringType().isRequired('required field'),
});

const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const ContactFormSection = (): JSX.Element => {
  const [formValue, setFormValue] = useState({...emptyModel});
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState<boolean>(false);

  const sendMessage = () => {
    const response = fetch('/api/services/app/FeedbackRecord/Create', {
      method: 'POST',
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json-patch+json',
      },
      body: JSON.stringify(formValue),
    })

    response
      .then((res) => {
        setFormValue({...emptyModel})
        alert('Your message has been sent, we will contact you soon.')
      })
      .catch((error) => {
        console.log(error)
      })
  }


  return (
    <div className={styles.root}>
      <div className="page-content">
        <h3>
          Contact Us
        </h3>

        <div className={styles.form_container}>
          <Form
            onChange={setFormValue}
            onCheck={setFormError}
            formValue={formValue}
            model={modelEmail}
            fluid
            onSubmit={(valid, event) => {
              if (valid) {
                sendMessage()
              }
            }}
          >
            <div className={styles.inputs_row}>
              <Form.Group controlId="name">
                <Form.Control
                  name="name"
                  placeholder="Name"
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Control
                  name="email"
                  placeholder="E-mail"
                />
              </Form.Group>
            </div>

            <Form.Group controlId="message">
              <Form.Control rows={8} name="message" accepter={Textarea} placeholder="Message"/>
            </Form.Group>

            <div className={styles.btn_row}>
              <button type="submit" className="ui-btn primary outline" disabled={loading}>Send</button>
            </div>

          </Form>
        </div>


      </div>
    </div>
  )
};

export default ContactFormSection;