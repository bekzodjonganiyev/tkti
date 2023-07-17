import React, { useState, useEffect, useContext } from "react";
import ImageRectorat1 from "../../../files/Rector.jpeg";
import ImageRectorat2 from "../../../files/Oquv-pro-rector.jpg";
import ImageRectorat3 from "../../../files/Ilmiy-pro-rector.jpg";
import ImageRectorat4 from "../../../files/Moliya-pro-rectori.jpg";
import ImageRectorat5 from "../../../files/Manviy-pro-rector.jpg";
import ImageRectorat6 from "../../../files/zebo.jpg";
import ImageRectorat7 from "../../../files/anvar.png";
import ContactLang from "../lang";
import "./rectorat.css";
import { Context } from "../../../context";

function Rectorat() {
  const { lang, refresh } = useContext(Context);
  const rectoratLang = {
    uz: {
      rahbariyat: {
        first: "Rektor",
        second: "O’quv ishlari bo’yicha prorektor",
        third: "Ilmiy ishlar va innovatsiyalar bo‘yicha prorektor",
        fourth: "Iqtisodiy va tashkiliy masalalar bo‘yicha prorektor",
        fifth:
          "Yoshlar masalalari va ma'naviy-ma'rifiy ishlari bo'yicha birinchi prorektor",
          zebo:"Xalqaro hamkorlik bo'yicha prorektor",
          anvar:"Korxonalar va ta’lim muassasalari bilan ishlash bo'yicha prorektor",
        sixth: "Usmonov Botir Shukurillayevich",
        seventh: "Safarov Toyir Tursunovich",
        eighth: "Pulatov Xayrulla Lutpullayevich",
        nineth: "Qodirov Bobiromon Bekmurodovich",
        tenth: "Boborajabov Bahodir Nasriddinovich",
        zeboName:"Zebo Abdullayevna Babaxanova",
        anvarName:"Anvar Normamatovich Shernayev",
      },
    },
    ru: {
      rahbariyat: {
        first: "Ректор",
        second: "Проректор по учебной работе",
        third: "Проректор по научной работе и инновациям",
        fourth: "Проректор по экономическим и организационным вопросам",
        fifth:
          "Первый проректор по работе с молодежью и духовно-просветительской работе",
          zebo:" Проректор по международному сотрудничеству",
          anvar:"Проректор по работе с предприятиями и учебными заведениями",
        sixth: "Усмонов Ботир Шукуриллаевич",
        seventh: "Сафаров Тойир Турсунович",
        eighth: "Пулатов Хайрулла Лутпуллаевич",
        nineth: "Кадыров Бобиромон Бекмуродович",
        tenth: "Боборажабов Баходир Насриддинович",
        zeboName:"Зебо Aбдуллайевна Бабаханова",
        anvarName:"Aнвар Нормаматович Шернайев",
      },
    },
    en: {
      rahbariyat: {
        first: "Rector",
        second: "Vice - Rector for Academic Affairs",
        third: "Vice - Rector for Research and Innovation",
        fourth: "Vice - rector for economic and organizational issues",
        fifth: "First vice-rector for youth issues and spiritual and educational affairs",
        zebo:" Vice-rector for international cooperation",
       
        anvar:"Vice-rector for work with enterprises and educational institutions",
        sixth: "Usmonov Botir Shukurillaevich",
        seventh: "Safarov Toyir Tursunovich",
        eighth: "Pulatov Khayrulla Lutpullaevich",
        nineth: "Kadirov Bobiromon Bekmurodovich",
        tenth: "Boborajabov Bahodir Nasriddinovich",
        zeboName:"Zebo Abdullayevna Babakhanova",
        anvarName:"Anvar Normamatovich Shernayev",
      },
    },
  };
  const [rectors, setRectors] = useState([
    {
      id: 1,
      status: true,
      title: rectoratLang[lang].rahbariyat.first,
      content: {
        img: ImageRectorat1,
        name: rectoratLang[lang].rahbariyat.sixth,
        job: rectoratLang[lang].rahbariyat.first,
      },
      body: [
        {
          class: "fa-solid fa-phone",
          text: "+998 71 244-79-17",
          href: "tel:712447917",
        },
        {
          class: "fa-solid fa-envelope",
          text: ContactLang[lang].rektor.p34,
          href: "http://rector.tcti.uz/",
        },
        {
          class: "fa-solid fa-location-dot",
          text: ContactLang[lang].rektor.p35,
        },
      ],
    },
    {
      id: 2,
      status: false,
      title: rectoratLang[lang].rahbariyat.second,
      content: {
        name: rectoratLang[lang].rahbariyat.seventh,
        img: ImageRectorat2,
        job: rectoratLang[lang].rahbariyat.second,
      },
      body: [
        {
          class: "fa-solid fa-phone",
          text: "+998 71 244-79-18",
          href: "tel:712447918",
        },
        {
          class: "fa-solid fa-envelope",
          text: ContactLang[lang].safarov.p38,
          href: "mailto:t.safarov@tkti.uz",
        },
        {
          class: "fa-solid fa-location-dot",
          text: ContactLang[lang].safarov.p39,
        },
      ],
    },
    {
      id: 3,
      status: false,
      title: rectoratLang[lang].rahbariyat.third,
      content: {
        name: rectoratLang[lang].rahbariyat.eighth,
        img: ImageRectorat3,
        job: rectoratLang[lang].rahbariyat.third,
      },
      body: [
        {
          class: "fa-solid fa-phone",
          text: "+998 71 244-79-21",
          href: "+998 71 244-79-21",
        },
        {
          class: "fa-solid fa-envelope",
          text: ContactLang[lang].polatov.p18,
          href: "mailto:x.pulatov@tkti.uz",
        },
        {
          class: "fa-solid fa-location-dot",
          text: ContactLang[lang].polatov.p19,
        },
      ],
    },
    {
      id: 4,
      status: false,
      title: rectoratLang[lang].rahbariyat.fourth,
      content: {
        name: rectoratLang[lang].rahbariyat.nineth,
        img: ImageRectorat4,
        job: rectoratLang[lang].rahbariyat.fourth,
      },
      body: [
        {
          class: "fa-solid fa-phone",
          text: "+998 71 244-79-15",
          href: "tel:712447915",
        },
        {
          class: "fa-solid fa-envelope",
          text: ContactLang[lang].bobiramon.p22,
          href: "mailto:b.kodirov@tkti.uz",
        },
        {
          class: "fa-solid fa-location-dot",
          text: ContactLang[lang].bobiramon.p23,
        },
      ],
    },
    {
      id: 5,
      status: false,
      title: rectoratLang[lang].rahbariyat.fifth,
      content: {
        name: rectoratLang[lang].rahbariyat.tenth,
        img: ImageRectorat5,
        job: rectoratLang[lang].rahbariyat.fifth,
      },
      body: [
        {
          class: "fa-solid fa-phone",
          text: "+998 71 244-79-24",
          href: "tel:712447924",
        },
        {
          class: "fa-solid fa-envelope",
          text: ContactLang[lang].prormanav.f16,
          href: "mailto:b.boborajabov@tkti.uz",
        },
        {
          class: "fa-solid fa-location-dot",
          text: ContactLang[lang].prormanav.f17,
        },
      ],
    },
    {
      id: 6,
      status: false,
      title: rectoratLang[lang].rahbariyat.zebo,
      content: {
        name: rectoratLang[lang].rahbariyat.zeboName,
        img: ImageRectorat6,
        job: rectoratLang[lang].rahbariyat.zebo,
      },
      body: [
        {
          class: "fa-solid fa-phone",
          text: "+998 71 244-77-26",
          href: "+998 71 244-77-26",
        },
        {
          class: "fa-solid fa-envelope",
          text:"zebo.babakhanova@tkti.uz",
          href: "zebo.babakhanova@tkti.uz",
        },
        {
          class: "fa-solid fa-location-dot",
          text: ContactLang[lang].prormanav.f17,
        },
      ],
    },
    {
      id: 7,
      status: false,
      title: rectoratLang[lang].rahbariyat.anvar,
      content: {
        name: rectoratLang[lang].rahbariyat.anvarName,
        img: ImageRectorat7,
        job: rectoratLang[lang].rahbariyat.anvar,
      },
      
      body: [
        {
          class: "fa-solid fa-phone",
          text: "+998 71 244-79-24",
          href: "tel:712447924",
        },
        {
          class: "fa-solid fa-envelope",
          text: "a.normatov@tkti.uz",
          href: "a.normatov@tkti.uz",
        },
        {
          class: "fa-solid fa-location-dot",
          text: ContactLang[lang].prormanav.f17,
        },
      ],
    },
  ]);

  const test = (id) => {
    rectors.map((a) => (a.status = false));
    const find = rectors.find((e) => e.id === id);
    find.status = !find.status;
    return setRectors([...rectors]);
  };

  useEffect(() => {
    if (refresh) {
      window.location.reload(true);
    }
  }, [lang]);

  return (
    <div className="wrapped mb-5">
              <h3 style={{ display: "flex", justifyContent: "left" }}>
                {ContactLang[lang].hero.title}
              </h3>
              <span className="my-5 d-block">
                {ContactLang[lang].hero.info}
              </span>
              <div className="rectorat__list">
                <div className="rectorat__menu">
                  {rectors.map((a) => (
                    <>
                      <li
                        onClick={() => test(a.id)}
                        className={`accordion__item ${
                          a.status ? "active__accordion" : ""
                        }`}
                      >
                        {" "}
                        <h4>{a.title}</h4>{" "}
                        <span
                          className={
                            a.status
                              ? "fa-solid fa-angle-down"
                              : "fa-solid fa-angle-right"
                          }
                        ></span>
                      </li>

                      <div
                        className={
                          a.status
                            ? "accordion__secret__item rectorat__secret__key"
                            : "d-none"
                        }
                      >
                        <a
                          className="rectorat__item"
                          href={`/page/rectorat/${a.id}`}
                        >
                          <img src={a.content.img} alt="img" />
                          <div className="rectorat__item__body">
                            <h2>{a.content.name}</h2>
                            <span>{a.content.job}</span>
                            {a.body.map((a, index) =>
                              a.href ? (
                                <a key={index} href={a.href}>
                                  {" "}
                                  <i className={a.class}></i> {a.text}
                                </a>
                              ) : (
                                <p key={index}>
                                  <i className={a.class}></i> {a.text}
                                </p>
                              )
                            )}
                          </div>
                        </a>
                      </div>
                    </>
                  ))}
                </div>

                <div className="rectorat__right">
                  {rectors.map((a, index) => (
                    <>
                      <div
                        key={index}
                        className={
                          a.status
                            ? "accordion__secret__key__desk rectorat__secret__key__desk"
                            : "d-none"
                        }
                      >
                        <a
                          className="rectorat__item__desk"
                          href={`/rektorat/${a.id}`}
                        >
                          <img src={a.content.img} alt="img" />
                          <div className="rectorat__desk__body">
                            <h2>{a.content.name}</h2>
                            <span>{a.content.job}</span>
                            {a.body.map((a, index) =>
                              a.href ? (
                                <a key={index} href={a.href}>
                                  {" "}
                                  <i className={a.class}></i> {a.text}
                                </a>
                              ) : (
                                <p key={index}>
                                  <i className={a.class}></i> {a.text}
                                </p>
                              )
                            )}
                          </div>
                        </a>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
  );
}

export default Rectorat;
