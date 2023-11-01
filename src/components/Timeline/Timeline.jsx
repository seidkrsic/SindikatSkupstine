import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import { ReactComponent as MneIcon } from "../../images/mneLogo.svg";
import "../Timeline/Timeline.css";



const Timeline = () => {
  let workIconStyles = { background: "#d4ae37" };

  let schoolIconStyles = { background: "#AB0707" };

  let TextContainerStyle = { borderRadius: "none" };

  let timelineElements = [
    {
      id: 1,
      title: "Potpisan Kolektivni ugovor ",
      location: "Podgorica, Crna Gora",
      description: "U saradnji sa Poslodavcem potpisan je Kolektivni ugovor , kao krovni dokument kojim se uređuju prava i obaveze zaposlenih u Službi Skupštine.", 
      // buttonText: "View Frontend Projects",
      date: "",
      icon: "work",
    },
    {
      id: 2,
      title: "Sastavni dio društvenih tokova ",
      location: "Podgorica, Crna Gora",
      description: "Kao ozbiljan član društvene zajednice Sindikalna organizacija Skupštine Crne Gore učesnica je mnogih humanitarnih i sportskih akcija.",
      // buttonText: "View Backend Projects",
      date: "",
      icon: "not",
    },
    {
      id: 3,
      title: "Zdravlje na prvom mjestu",
      location: "Podgorica, Crna Gora",
      description: "Zahvaljujući požrtvovanosti i incijativnosti rukovodstva Sindikata obezbijeđene su redovne zimnice za sve zaposlene Službi, kao i redovni sistematski pregledi, kako bi se podigla svijest zaposlenih o značaju preventivnih pregleda. ",
      // buttonText: "Company Website",
      date: "",
      icon: "work",
    },
    {
      id: 4,
      title: "Borba za bolja prava zaposlenih ",
      location: "Podgorica, Crna Gora",
      description: "Karatkeristično za rad Sindikata jeste da je 2011. godine zalagajući se za bolja prava zaposlenih, organizovao štrajk u Parlamentu, koji je na kraju rezultirao uvećanjem zarada zaposlenih u Službi Skupštine.",
      buttonText: "Course Certificate",
      date: "",
      icon: "not",
    },
    {
      id: 5,
      title: "Osnovan 1992. godine",
      location: "Podgorica, Crna Gora",
      description: "Sindikalna organizacija Skupštine Crne Gore, sa preko 30 godina svog kontinuiranog, predstavlja jedan od najstarijih sindikalnih organizacija u Crnoj Gori. ",
      // buttonText: "College Projects",
      date: "",
      icon: "work",
    },
    // {
    //   id: 6,
    //   title: "Marble Hills Grammar School",
    //   location: "Podgorica, Crna Gora",
    //   description:
    //     "Highschool - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
    //   date: "",
    //   icon: "not",
    // },
  ];

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
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
