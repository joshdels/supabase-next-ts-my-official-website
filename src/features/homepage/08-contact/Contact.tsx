import styles from './Contact.module.css';

export default function ContactSection() {
  return (
    <>
      <div className="container">
        <div className="container-content-center">
          <div className="container-context">
            <span className="font-orange">// get in touch</span>
            <div>
              <h2>Let's build something useful</h2>
              <strong>for your land.</strong>
            </div>
            <p>
              Whether you have a full project brief or just a problem you can't
              visualize yet — reach out. I respond within 24 hours.
            </p>
            <div>
              <button className="btn-primary">send me a message</button>
              <p>joshdels@topmapsolutions.com</p>
            </div>
            <div className={styles['button-lower']}>
              <button className="btn-secondary">github</button>
              <button className="btn-secondary">linkedin</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
