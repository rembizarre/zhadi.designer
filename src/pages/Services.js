import { animated, useInView, useSprings } from '@react-spring/web';
import Modal from 'react-modal';
import { useState } from 'react';
import Cross from '../assets/images/close.png';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1D4230',
  },
};

Modal.setAppElement('#root');

const Services = () => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  function openModal(i) {
    setCurrentIndex(i);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [springs, api] = useSprings(
    7,
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: {
        duration: 1000,
      },
    }),
    [],
  );

  const [stagesRef, stagesInView] = useInView(
    () => ({
      from: { x: '-99%' },
      to: { x: '0' },
    }),
    {
      rootMargin: '-20% 0%',
      once: true,
    },
  );

  const servicesStages = [
    {
      header: 'Замеры',
      items: [
        'Консультация дизайнера на обьекте',
        'Подписываем договор',
        'Замер помещения. Аванс в размере 30%',
      ],
    },
    {
      header: 'Анкетирование',
      items: [
        'Разработка технического задания с учетом вашего пожелания и технических особенности объекта.',
      ],
    },
    {
      header: 'Планировка',
      items: ['Разработка наиболее оптимальной планировки и подготовка плана расстановки мебели.'],
    },
    {
      header: '3Д Визуализация',
      items: [
        'Разработка дизайн концепции обьекта и фотореалистичная визуализация интерьера на основании дизайн-концепции, производится вторая часть оплаты 30%',
      ],
    },
    {
      header: 'Рабочий проект',
      items: [
        'Разработка рабочей документации по электрике, сантехнике, напольным и настенным покрытиям на основании визуализации.',
      ],
    },
  ];

  const service = [
    {
      header: 'План расстановки мебели',
      items:
        'Уже имеются чертежи? Тогда я помогу представить Вам идеальную расстановку мебели согласно чертежам и сделать помещение максимально комфортным и эффективным',
      modal: [
        'Консультация2',
        'Анкетирование',
        'Замеры и план БТИ если онлайн',
        'Чертеж с планом расстановки мебели с размерами',
      ],
    },
    {
      header: 'Чертеж',
      items:
        'Если нужен полный план для ремонта помещения, то начиная от обморочного плана до плана потолков включая электрику сделаю чертеж учитывая все нюансы помещения. ',
      modal: [
        'Консультация',
        'Анкетирование',
        'Замеры и план БТИ если онлайн',
        'Чертеж с планом расстановки мебели с размерами',
        'План демонтажа',
        'План с расстановкой мебели',
        'Ведомость межкомнатных дверей',
        'План освещения',
        'План розеток',
        'План потолков',
        'План полов',
      ],
    },
    {
      header: 'Разработка 3Д визуализации',
      items:
        'Данная услуга подойдет тем, кто хочет увидеть конечный результат без разработки чертежей для проекта. Можете заказать данную услугу и получить будущий вид вашего помещения. ',
      modal: [
        'Консультация',
        'Анкетирование',
        'Замеры и план БТИ если онлайн',
        'Планировочное решение',
        '3D визуализация',
      ],
    },
    {
      header: 'Интерьер коммерческих помещений',
      items: 'Делаем дизайн для коммерческих помещений будь это кафетерии, магазины или офисы. ',
      modal: [
        'Консультация',
        'Анкетирование',
        'Замеры и план БТИ если онлайн',
        '3D визуализация + Чертеж или один из них',
      ],
    },

    {
      header: 'Показ квартир / домов/ помещения',
      items:
        'НАШЛИ В ОБЬЯВЛЕНИИ ДОМ ДЛЯ ПОКУПКИ ИЛИ ПОМЕЩЕНИЕ ДЛЯ АРЕНДЫ В г.АСТАНА, НО НЕТ ВОЗМОЖНОСТИ ЕЗДИТЬ САМОМУ ОСМОТРЕТЬ? МЫ ЭТО СДЕЛАЕМ ЗА ВАС И ПРЕДОСТАВИМ ДЕТАЛЬНЫЙ ОТЧЕТ ПО ОБЬЕКТУ.',
      modal: [
        'Анкетирование',
        'Поиск объявлений при продаже',
        'Фото отчет помещения, местности вокруг помещения, подъезда, лифта, вида с окна',
        'Видео отчет по состоянию объекта',
      ],
    },

    {
      header: 'Графический дизайн',
      items:
        'Услуга для тех, кому необходимо сделать рекламные баннеры, печатную продукцию',
      modal: [
        'Разработка логотипа и брендирование',
        'Плейс маркет',
        'Бронирование форма',
        'Айдентика',
        'Упокавка продукта',
      ],
    },

    {
      header: 'Визуализация аккаунта',
      items:
        'ПОСТРОИЛИ БИЗНЕС, ТЕПЕРЬ ДАЛЬШЕ НУЖНО РАЗВИВАТЬ? Поможем создать красивый и продающий визуал.',
      modal: [
        'Визуализация страницы Инстаграм с продающим маркетингом',
        'Консультация',
        'Тест на архетип',
        'Полный анализ бизнес аккаунта и страницы владельца аккаунта',
        'Муд борд',
        'Макет',
        'Согласование',
        'Сдача проекта (в пдф файле и с консультацией)',
      ],
    },
  ];

  return (
    <div className="services">
      <h2 className="services__title">Услуги</h2>
      <div className="services__container">
        {/* creating services */}
        {service.map((service, i) => {
          return (
            <animated.div
              style={springs[i]}
              className={`services__block ${i > 3 ? 'bigger' : ''}`}>
              <img
                className="services__img"
                id={service.header === 'Чертеж' ? 'smaller' : ''}
                src={'./images/services' + (i + 1) + '.png'}
                alt=""
              />
              <h4 className="services__header">{service.header}</h4>
              <p className="services__subheader">{service.items}</p>
              <button onClick={() => openModal(i)} className="services__modalBtn">
                Подробнее
              </button>
            </animated.div>
          );
        })}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel={service[currentIndex].header}>
        <div>
          <div onClick={closeModal} className="modal__close">
            <img src={Cross} alt="Закрыть" />
          </div>
          <ul className="modal__list">
            {service[currentIndex].modal.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </Modal>
      <div className="services__stages">
        <h2 className="services__title">Этапы работы</h2>
        <animated.div className="services__stages_container" ref={stagesRef} style={stagesInView}>
          {/* creating all stages */}
          {servicesStages.map((stage, i) => {
            return (
              <div className="services__stages_block">
                <div className="services__stages_number">
                  {i + 1}
                  {i !== servicesStages.length - 1 ? <hr /> : ''}
                </div>
                <h4 className="services__stages_header">{stage.header}</h4>
                <ul className="services__stages_menu">
                  {stage.items.map((item) => (
                    <li className="services__stages_item">{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </animated.div>
      </div>
    </div>
  );
};

export default Services;