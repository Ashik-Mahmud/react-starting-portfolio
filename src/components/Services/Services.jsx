import React from "react";
import { Card } from "./Card";
const cardsInfo = [
  {
    id: 1,
    subtitle: "Web",
    title: "Web Design & Dev",
    image: "https://www.w3schools.com/w3css/img_lights.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, modi?",
  },
  {
    id: 2,
    subtitle: "REACT",
    title: "React developing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpT6rscUaqC6IK1x48k9GU-Av3fgKo0lPgg&usqp=CAU",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, modi?",
  },
  {
    id: 3,
    subtitle: "API",
    title: "Authentication & redux",
    image:
      "https://www.elegantthemes.com/blog/wp-content/uploads/2021/11/et-2fa-blogpost.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, modi?",
  },
  {
    id: 4,
    subtitle: "Tech",
    title: "MERN Stack Dev",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBdvlbEhPcXttOy_It84lARUkUzxsufeLsw&usqp=CAU",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, modi?",
  },
];
export const Services = () => {
  return (
    <>
      <section id="services" className="my-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-poppins mb-20 font-bold uppercase">
            - We will <span className="text-green-400">Tech</span> You
          </h1>
          <div className="services-content grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {cardsInfo.map((card) => {
              return (
                <>
                  <Card
                    cardImage={card.image}
                    cardDesc={card.desc}
                    cardSubTitle={card.subtitle}
                    cardTitle={card.title}
                    cardKey={card.id}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
