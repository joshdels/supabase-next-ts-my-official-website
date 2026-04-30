import { ButtonContact } from '@/shared/components/buttons/Buttons';
import styles from './Contact.module.css';

export default function ContactSection() {
  return (
    <>
      <div id="contact" className="container">
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
            </div>
            <p>joshdels@topmapsolutions.com</p>
            <ButtonContact />
          </div>
        </div>
      </div>
    </>
  );
}
