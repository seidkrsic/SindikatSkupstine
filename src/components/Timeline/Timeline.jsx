import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import AuthContext from "../../Context/AuthContext";
import { ReactComponent as MneIcon } from "../../images/mneLogo.svg";
import "../Timeline/Timeline.css";



const Timeline = () => {

  const {lang} = useContext(AuthContext);

  let workIconStyles = { background: "#d4ae37" };

  let schoolIconStyles = { background: "#AB0707" };

  let TextContainerStyle = { borderRadius: "none" };

  let timelineElements = [
    {
      id: 1,
      title: "Potpisan Kolektivni ugovor",
      title_cyrillic: "Потписан Колективни уговор",
      location: "Podgorica, Crna Gora",
      location_cyrillic: "Подгорица, Црна Гора",
      description: "U saradnji sa Poslodavcem potpisan je Kolektivni ugovor, kao krovni dokument kojim se uređuju prava i obaveze zaposlenih u Službi Skupštine.",
      description_cyrillic: "У сарадњи са Послодавцем потписан је Колективни уговор, као кровни документ којим се уређују права и обавезе запослених у Служби Скупштине.",
      date: "",
      icon: "work",
    },
    {
      id: 2,
      title: "Sastavni dio društvenih tokova",
      title_cyrillic: "Саставни дио друштвених токова",
      location: "Podgorica, Crna Gora",
      location_cyrillic: "Подгорица, Црна Гора",
      description: "Kao ozbiljan član društvene zajednice Sindikalna organizacija Skupštine Crne Gore učesnica je mnogih humanitarnih i sportskih akcija.",
      description_cyrillic: "Као озбиљан члан друштвене заједнице Синдикална организација Скупштине Црне Горе учесница је многих хуманитарних и спортских акција.",
      date: "",
      icon: "not",
    },
    {
      id: 3,
      title: "Zdravlje na prvom mjestu",
      title_cyrillic: "Здравље на првом мјесту",
      location: "Podgorica, Crna Gora",
      location_cyrillic: "Подгорица, Црна Гора",
      description: "Zahvaljujući požrtvovanosti i incijativnosti rukovodstva Sindikata obezbijeđene su redovne zimnice za sve zaposlene Službi, kao i redovni sistematski pregledi, kako bi se podigla svijest zaposlenih o značaju preventivnih pregleda.",
      description_cyrillic: "Захваљујуuћи пожртвованости и инцијативности руководства Синдиката обезбијеђене су редовне зимнице за све запослене Служби, као и редовни систематски прегледи, како би се подигла свијест запослених о значају превентивних pregleda.",
      date: "",
      icon: "work",
    },
    {
      id: 4,
      title: "Borba za bolja prava zaposlenih",
      title_cyrillic: "Борба за боља права запослених",
      location: "Podgorica, Crna Gora",
      location_cyrillic: "Подгорица, Црна Гора",
      description: "Karatkeristično za rad Sindikata jeste da je 2011. godine zalagajući se za bolja prava zaposlenih, organizovao štrajk u Parlamentu, koji je na kraju rezultirao uvećanjem zarada zaposlenih u Službi Skupštine.",
      description_cyrillic: "Караткеристично за рад Синдиката јесте да је 2011. године залагајући се за боља права запослених, организовао штрајк у Парламенту, који је на крају резултирао увећањем запослених у Служби Скупштине.",
      buttonText: "Course Certificate",
      date: "",
      icon: "not",
    },
    {
      id: 5,
      title: "Osnovan 1992. godine",
      title_cyrillic: "Основан 1992. године",
      location: "Podgorica, Crna Gora",
      location_cyrillic: "Подгорица, Црна Гора",
      description: "Sindikalna organizacija Skupštine Crne Gore, sa preko 30
  
  

  return (
    <div className="Timeline__container">
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              contentStyle={TextContainerStyle}
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={<MneIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                { lang === "latin" ? element.title : element.title_cyrillic}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                { lang === "latin" ? element.location : element.location_cyrillic}
              </h5>
              <p id="description">{ lang === "latin" ? element.description : element.description_cyrillic}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
