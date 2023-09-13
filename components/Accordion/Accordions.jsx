"use client";

import React, { useState } from "react";
import Accordion from "./Accordion";

const Accordions = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title:
        "What are the benefits of reaching out to a law firm like Claim Rocket if I've sustained an injury?",
      data: `Engaging a law firm like Claim Rocket after an injury is critical for several reasons. Firstly, understanding the intricacies of the law and dealing with insurance companies can be daunting. With our professional help, these processes become far less stressful and more efficient. Our team of experienced attorneys, doctors, and industry experts meticulously examine every aspect of your case, ensuring you receive the best advice and support. Secondly, our main goal is to secure the maximum compensation you deserve while you focus on your recovery. Lastly, our 'no win, no fee' approach guarantees that you won't incur any costs unless we win your case. So, reaching out to Claim Rocket not only elevates your chances of a successful claim but also allows you to prioritize healing without the additional burden of legal complexities.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "What is the ideal time to contact a law firm like Claim Rocket?",
      data: `The optimal time to get in touch with a firm like Claim Rocket is as soon as possible after you've sustained an injury. Early involvement allows us to gather essential evidence, understand the circumstances surrounding your injury, and begin the process of asserting your rights immediately. The sooner we can start working on your case, the more effectively we can navigate the complexities of the legal system and start fighting for your just compensation. Remember, your well-being is our first priority, and we are ready to support you from the onset, helping to minimize stress and maximize your claim.`,
      isOpen: false,
    },
    {
      key: 3,
      title:
        "Will hiring a law firm like Claim Rocket prolong the process of obtaining my compensation?",
      data: `9 out 10 cases settle without going to court. In fact, engaging with Claim Rocket can often expedite the process. Our extensive experience and professional network enable us to handle the intricate legal proceedings swiftly and efficiently. We know the legal landscape and the strategies insurance companies might use, so we're well-equipped to counteract any potential delays. With our goal of minimizing your stress and maximizing your claim, we're dedicated to securing your rightful compensation as quickly as possible, all while maintaining the highest standards of legal representation.`,
      isOpen: false,
    },
    {
      key: 4,
      title: ` Do I have to pay for the initial consultation?`,
      data: `Absolutely not. At Claim Rocket, we are committed to serving you and part of that commitment involves providing a free initial consultation. We understand that each case is unique and it's essential for us to understand your situation comprehensively. This initial meeting allows us to evaluate your case without any financial obligation on your part. Our mission is to fight for your rights and secure justice, and we believe in starting that journey with open, no-cost communication.`,
      isOpen: false,
    },
    {
      key: 5,
      title:
        "What sets Claim Rocket apart from other personal injury law firms?",
      data: `What distinguishes Claim Rocket from other personal injury law firms is our comprehensive, client-first approach. We understand that an injury isn't just a legal matter, but a personal one that can significantly affect your life. Therefore, our focus goes beyond simply pursuing your claim; we prioritize your well-being and recovery.

We have a robust network of professionals, including experienced attorneys, medical experts, and industry insiders, ensuring that every facet of your case is meticulously examined. This multidisciplinary approach allows us to provide you with the best possible support.

Additionally, we operate on a 'no win, no fee' basis, demonstrating our confidence in our ability to serve you and our commitment to ensuring justice is served. We also offer free initial consultations, ensuring you don't face any financial burden when you're looking for advice.

Lastly, our team embodies the speed and precision of a rocket in every step we take. We work tirelessly to expedite your claim process, making sure you reach your destination as quickly and smoothly as possible. Our dedication, coupled with our resources and network, truly sets Claim Rocket apart in the field of personal injury law.`,
      isOpen: false,
    },
    {
      key: 6,
      title: "What kinds of cases does Claim Rocket typically handle?",
      data: `Claim Rocket is a specialized personal injury law firm, and we handle a wide range of cases associated with personal injury. These cases often arise from situations like car accidents, slip and fall incidents, workplace injuries, medical malpractice, and more. Our robust network of professionals and experienced attorneys are adept at meticulously examining every detail of your case. So, whether your injury was due to a road mishap, a work-related incident, or an instance of medical negligence, Claim Rocket is equipped to provide the legal representation you need. Regardless of the type or complexity of your injury, our mission remains the same - to expedite your journey to justice and secure the compensation you deserve.`,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };
  return (
    <div className="px-[45px] md:px-[130px] bg-gray-100 py-16 mt-16">
      <div>
        <div className="">
          <h2 className="text-2xl mb-10 mx-auto text-gray-800 font-bold ">
            Frequently Asked Questions
          </h2>
          {accordions.map((accordion) => (
            <Accordion
              key={accordion.key}
              title={accordion.title}
              data={accordion.data}
              isOpen={accordion.isOpen}
              toggleAccordion={() => toggleAccordion(accordion.key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordions;
