import { animated, useInView, useSpring } from '@react-spring/web';
import firstPhoto from '../assets/images/Жадыра.jpg';
import secondPhoto from '../assets/images/Нури.jpeg';
import Button from '../components/Button/Button';
import PortfolioComponent from '../components/Portfolio/PortfolioComp';

const Main = () => {

  // animations
  const firstAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 1000,
    },
  });

  const [fBlockRef, fBlockInView] = useInView(
    () => ({
      from: { scale: 0 },
      to: { scale: 1 },
      config: {
        precision: 0.0001,
      },
    }),
    {
      rootMargin: '-10% 0%',
      once: true,
    },
  );

  const [sBlockRef, sBlockInView] = useInView(
    () => ({
      from: { scale: 0 },
      to: { scale: 1 },
      config: {
        precision: 0.0001,
      },
    }),
    {
      rootMargin: '-10% 0%',
      once: true,
    },
  );
  return (
    <div className="main">
      <animated.div style={firstAnimation} className="main__bg" />
      <animated.p style={firstAnimation} className="main__quote">
        «Любовь к красоте — это вкус. Создание красоты — это искусство». <br />
        Ральф Уолдо Эмерсон
      </animated.p>
      <h2 className="main__title">О нас</h2>
      <div className="main__content">
        <animated.div ref={fBlockRef} style={fBlockInView} className="main__block">
          <img className="main__img" src={firstPhoto} alt="Жадыра" />
          <h4 className="main__name">Жадыра</h4>
          <p className="main__speciality">(Дизайнер Интерьера, 3Д Визуализатор)</p>
        </animated.div>
        <animated.div ref={sBlockRef} style={sBlockInView} className="main__block">
          <img className="main__img" src={secondPhoto} alt="Нургуль" />
          <h4 className="main__name">Нургуль</h4>
          <p className="main__speciality">(Графический Дизайнер, SMM специалист)</p>
        </animated.div>
      </div>
      <div className="main__description">
        <p className="main__txt">
          Вам необходимо искать для покупки и аренды дома, квартиры, помещения под бизнес, вам нужно
          запланировать ремонт, принять правильное планировочное решение, разработать чертеж и
          дизайн интерьера помещения, разработать новый логотип для своего бренда, а также вести
          социальную сеть для бизнеса в инстаграмме, то без сомнения обращайтесь к нам. 
        </p>
        <p className="main__txt">
          Мы специалисты, практикующие в этих сферах, всегда будем рады вам помочь. Это доставляет
          вам хлопоты, а нам радость и удовольствие в исполнениях. Мы работаем как в команде так и
          по отдельности в зависимости от объёма заказа клиента.
        </p>
        <p className="main__txt">
          <b>Графический Дизайнер</b> поможет разработать логотип для вашего бренда и фирменный
          стиль компании под ваше желание, а также вести социальную сеть в качестве СММ Специалиста.
        </p>
        <p className="main__txt">
          <b>Дизайнер Интерьера/3Д Визуализатор</b> поможет проектировать интерьер вашего помещения
          создавая уют, визуализировать ваши желания по интерьеру и увидеть перед тем как начать
          ремонт. Разработает полный комплект чертежей.
        </p>
      </div>
      <Button text={'ПОДРОБНЕЕ'} path="/contacts" />
      <div style={{ marginBottom: 60 }}></div>
      <PortfolioComponent />
    </div>
  );
};

export default Main;
