import WhatsApp from '../assets/images/WhatsApp.svg';
import Instagram from '../assets/images/Instagram.svg';

const Contacts = ({ useSetIsContact }) => {
  // to show Footer or not
  useSetIsContact(true);
  return (
    <div className="contacts">
      <h2 className="contacts__title">Свяжитесь c нами</h2>
      <p className="contacts__subtitle">
        Полная информация по Дизайну интерьера и 3D визуализации <br/>по тел:{' '}
        <a href="https://wtsp.cc/77014591754">+7 701 459 1754</a>
      </p>
      <p className="contacts__subtitle">
        Полная информация по Графическому дизайну и SMM сопровождению <br/>по тел:{' '}
        <a href="https://wtsp.cc/77752161984">+7 775 216 1984</a>
      </p>
      <hr className="contacts__line" />
      <div className="contacts__socials">
        <a href="https://wtsp.cc/77014591754">
          <img src={WhatsApp} alt="WhatsApp" className="footer__social" />
        </a>
        <a href="https://instagram.com/zhadi_design_interior?igshid=YmMyMTA2M2Y=">
          <img src={Instagram} alt="Instagram" className="footer__social" />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
