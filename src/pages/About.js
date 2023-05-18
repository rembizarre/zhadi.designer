import { animated, useInView } from "@react-spring/web";
import firstPhoto from "../assets/images/Жадыра.jpg";
import secondPhoto from "../assets/images/Нури.jpeg";
import firstBg from "../assets/images/Фон для Жади 1.jpeg";
import secondBg from "../assets/images/фон для Нури 1.jpeg";

const About = ({ useSetIsContact }) => {
  // to show Footer or not 
  useSetIsContact(false);

  // animations
  const [fRef, fInView] = useInView(
    () => ({
      from: { x: "-99%" },
      to: { x: "0" },
    }),
    {
      rootMargin: "-20% 0%",
      once: true,
    }
  );
  const [ref, inView] = useInView(
    () => ({
      from: { x: "99%" },
      to: { x: "0" },
    }),
    {
      rootMargin: "-20% 0%",
      once: true,
    }
  );

  return (
    <div className="about">
      <animated.div ref={fRef} style={fInView} className="about__block">
        <div className="about__background">
          <img src={firstBg} alt="" className="about__bg" />
        </div>
        <h2 className="about__title">ОБО МНЕ</h2>
        <p className="about__subtitle">
          Мне нравится знакомиться со своими клиентами, эффективно управлять их
          проектами и создавать хорошо продуманные пространства, которые скорее
          личные, чем идеальные. Я с нетерпением жду совместной работы с вами
          для реализации продуманных, оригинальных идей в тандеме с вашими
          потребностями и бюджетом.
        </p>
        <img src={firstPhoto} alt="Жадыра" className="about__photo" />
        <h4 className="about__name">Жадыра Слеумуханова</h4>
        <span className="about__speciality">
          (Дизайнер Интерьера, 3Д Визуализатор)
        </span>
        <p className="about__description">
          В своей предыдущей жизни Жадыра работала профессиональным специалистом
          в сфере управления персоналом нефтегазовой компании. Однако с детства
          интересовалась дизайном интерьера, рисованием, часто меняла интерьер
          своего дома. После многих лет тщательного создания удобного, уютного,
          функционального дома для своей семьи, дизайн дома и украшение
          интерьера стали ее любимым занятием. Поэтому, вовремя декретного
          отпуска, она с головой погрузилась в школу дизайна и начала свою новую
          карьеру в дизайне интерьера. Сегодня она активно проектирует
          пространства мечты для клиентов и любит каждую минуту!
        </p>
      </animated.div>
      <animated.div ref={ref} style={inView} className="about__block">
        <div className="about__background">
          <img src={secondBg} alt="" className="about__bg" />
        </div>
        <h2 className="about__title white">ОБО МНЕ</h2>
        <p className="about__subtitle white">
          Люблю создавать логотипы и брендирование. Люблю свою работу и отношусь
          очень ответственно и с творчеством! Буду очень рада создать с Вами
          узнаваемый бренд компании!
        </p>
        <img src={secondPhoto} alt="Нургуль" className="about__photo" />
        <h4 className="about__name">Нургуль Даулетиярова</h4>
        <span className="about__speciality">
          (Графический Дизайнер, SMM специалист)
        </span>
        <p className="about__description">
          Нургуль дипломированный графический дизайнер. Также она прошла полный
          курс обучения на СММ специалиста и Визуализатора, что дает ей
          возможность предложить полный пакет услуг от «А» до «Я» своим
          заказчикам. В списке клиентов у Нургуль в основном люди, которые ведут
          свой бизнес на протяжении многих лет, а также те, кто только начинают
          свой путь в бизнесе. Полный пакет услуг начинается с создания логотипа
          и до оформления бизнеса и ведения страницы в Инстаграм.
        </p>
      </animated.div>
    </div>
  );
};

export default About;
