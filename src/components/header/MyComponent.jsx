import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Institut } from "../../icons/Icons";
import "./MyComponent.css";
import HeaderLang from "./lang";
import { Context } from "../../context";
const MyComponent = () => {
  const location = useLocation();

  const { lang, setLang} = useContext(Context);

  const [hoveredButton, setHoveredButton] = useState(null);
  const buttons = [
    {
      id: 1,
      name: HeaderLang[lang].institut[0],
      fakultetInfo:HeaderLang[lang].fakultetInfo[0],
      label: [
        {
          labelId: HeaderLang[lang].institut[1],
          href: "/faoliyat-hujjatlari",
        },
        {
          labelId: HeaderLang[lang].institut[2],
          href: "/xalqaro-aloqalar",
        },
        {
          labelId: HeaderLang[lang].institut[3],
          href: "/tkti-ish-rejasi",
        },
        {
          labelId: HeaderLang[lang].institut[4],
          href: "/korrupsiya",
        },
        {
          labelId: HeaderLang[lang].institut[5],
          href: "/biz-bilan-aloqa",
        },
        {
          labelId: HeaderLang[lang].institut[6],
          href: "/interaktiv-hizmatlar",
        },
        {
          labelId: HeaderLang[lang].institut[7],
          href: "/rektorat",
        },
        {
          labelId: HeaderLang[lang].institut[8],
          href: "/litsey",
        },
      ],
    },
    {
      id: 2,
      name: HeaderLang[lang].ilmiy[0],
      fakultetInfo:HeaderLang[lang].fakultetInfo[1],
      label: [
        {
          labelId: HeaderLang[lang].ilmiy[1],
          href: "/institut-loyihalari",
        },
        {
          labelId: HeaderLang[lang].ilmiy[2],
          href: "/startup-loyihalar",
        },
      
      ],
    },
    {
      id: 3,
      name: HeaderLang[lang].talim[0],
      fakultetInfo:HeaderLang[lang].fakultetInfo[2],
      label: [
        {
          labelId: HeaderLang[lang].talim[1],
          href: "/dars-jadvali",
        },
        {
          labelId: HeaderLang[lang].talim[2],
          href: "https://www.dropbox.com/s/mhexwrmj4s638if/1.PDF?dl=0",
        },
       
      ],
    },
    {
      id: 4,
      name: HeaderLang[lang].fakultet[0],
      fakultetInfo: HeaderLang[lang].fakultetInfo[3],
      label: [
        {
          labelId: HeaderLang[lang].fakultet[1],
          href: "/fakultetlar/menejment-va-kasb-talimi-fakulteti",
        },
        {
          labelId: HeaderLang[lang].fakultet[2],
          href: "/fakultetlar/oziq-ovqat-mahsulotlari-texnologiyasi-fakulteti",
        },
        {
          labelId: HeaderLang[lang].fakultet[3],
          href: "/fakultetlar/noorganik-moddalar-kimyoviy-texnologiyasi-fakulteti",
        },
        {
          labelId: HeaderLang[lang].fakultet[4],
          href: "/fakultetlar/yoqilgi-va-organik-birikmalar-kimyoviy-texnologiyasi-fakulteti",
        },
        {
          labelId: HeaderLang[lang].fakultet[5],
          href: "/fakultetlar/vinochilik-texnologiyasi-va-sanoat-uzumchiligi-fakulteti",
        },
      ],
    },
    {
      id: 5,
      name: HeaderLang[lang].structure[0],
      fakultetInfo:HeaderLang[lang].fakultetInfo[1],
      label: [
        {
          labelId: HeaderLang[lang].structure[1],
          href: "/rektorat",
        },
        {
          labelId: HeaderLang[lang].structure[2],
          href: "/fakultetlar",
        },
        {
          labelId: HeaderLang[lang].structure[3],
          href: "/kafedralar",
        },
        {
          labelId: HeaderLang[lang].structure[4],
          href: "/bolim-va-markazlar",
        },
        {
          labelId: HeaderLang[lang].structure[5],
          href: "/filiallar",
        },
        {
          labelId: HeaderLang[lang].structure[6],
          href: "/yoshlar-ittifoqi",
        },
      ],
    },
    {
      id: 6,
      name: HeaderLang[lang].mytkti[0],
      fakultetInfo:HeaderLang[lang].fakultetInfo[1],
      label: [
        {
          labelId: HeaderLang[lang].mytkti[1],
          href: "https://akbt.online/",
        },
        {
          labelId: HeaderLang[lang].mytkti[2],
          href: "https://tktiyf.uz/",
        },
        {
          labelId: HeaderLang[lang].mytkti[3],
          href: "https://student.tcti.uz/dashboard/login",
        },
        {
          labelId: HeaderLang[lang].mytkti[4],
          href: "https://rector.tcti.uz/",
        },
        {
          labelId: HeaderLang[lang].mytkti[5],
          href: "https://hemis.tcti.uz/dashboard/login",
        },
        
      ],
    },
  ];

  const handleMouseEnter = (arr) => {
    setHoveredButton({ ...arr });
  };
  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <div className="buttons">
     
      {buttons.map((button) => (
        <button
          key={button.id}
          onMouseEnter={() => setHoveredButton({ ...button })}
          onMouseLeave={() => setHoveredButton(null)}
        >
          {button.name}
        </button>
      ))}
      
      {hoveredButton && (
        < >
       
        <div
          className="hovered-content"
          onMouseEnter={() => setHoveredButton({ ...hoveredButton })}
          onMouseLeave={() => setHoveredButton(null)}
        > 
          <ul className="hovered-list">
            <div className="list-info">
          <span>
          <Institut />
          <h3>{hoveredButton.name}</h3>
          </span>
          <p>{hoveredButton.fakultetInfo}</p>
          </div>
          <div className="asdaaf">
            {hoveredButton?.label?.map((i, index) => (
              <>

              <li className="li" key={index}>
    
                <a href={i.href}>
                  <span>{i.labelId}</span>
               
                </a>
                
              </li>
              </>
            ))}
            </div>
          </ul>

         
        </div>

        </>
      )}
    </div>
  );
};

export default MyComponent;
