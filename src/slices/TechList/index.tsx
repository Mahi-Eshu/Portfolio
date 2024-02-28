"use client"


import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { useEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

gsap.registerPlugin(ScrollTrigger);



/**
 * Props for `TechList`.
 */
export type TechListProps = SliceComponentProps<Content.TechListSlice>;

/**
 * Component for "TechList" Slices.
 */
const TechList = ({ slice }: TechListProps): JSX.Element => {
  const component = useRef(null)

  useEffect(() => {

    let ctx = gsap.context(() => {
      
      const t1 = gsap.timeline({ 
        scrollTrigger: {
          trigger: component.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 4 ,

        },
      });

      t1.fromTo(".tech-row",
        {
          x: (index) => {
            return index % 2 === 0? gsap.utils.random(600, 200) : gsap.utils.random(-600, -200)
          }
        },
        {
          x: (index) => {
            return index % 2 === 1? gsap.utils.random(-600, -200) : gsap.utils.random(600, 200)
          },
          ease: "power1.inOut",
        }
      )

  

    }, component)

    return ()=> ctx.revert()  //cleanup
  })

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden"
      ref={component}
    >
      <Bounded
      as="div"
      className="className"
      data-slice-type={slice.slice_type} data-slice-variation={slice.variation} 
      >
        <Heading size="lg" as="h2" className="text-center">{slice.primary.heading}</Heading>
      </Bounded>
      {slice.items.map(({tech_color, tech_name}, index)=>(
        <div key={index} className="tech-row mb-8 flex items-center justify-center gap-2 text-slate-700" aria-label={tech_name || undefined}>
            {Array.from({length: 20}, (_, index)=>(
              <React.Fragment key={index}> 
                <span 
                  className="tech_item text-5xl font-extrabold uppercase tracking-tighter" 
                  style={{color: index === 8 && tech_color ? tech_color : "inherit"}}>
                  {tech_name}
                </span>
                <span className="text-3xl ">
                  <MdCircle />
                </span>
              </React.Fragment>
            ))}
        </div>
      ))}
    </section>
  );
};

export default TechList;
