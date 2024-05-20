'use client'
import { Element, scroller } from 'react-scroll';

import Image from "next/image";
import styles from "./page.module.scss";
import planet from "../../public/Planet.svg"
import lowCloud from "../../public/lowCloud.svg"
import upCloud from "../../public/Vector 6.svg"
import solana from "../../public/solana.svg"
import bittensor from "../../public/bittensor.svg"
import arweave from "../../public/arweave.svg"
import red_icon from "../../public/red_icon.svg"
import telegram from "../../public/telegram.svg"



import {useState} from "react";
import {animated, useInView, useSpring} from "@react-spring/web";
import {useWindowSize} from "@/app/hooks/useWindowSize";

export default function Home() {
    const { width, height } = useWindowSize();
    const [scrollLocked, setScrollLocked] = useState(false);
    const [scrolled, setScrolled] = useState(false)
    const [ref, inView] = useInView({ once: true });
    const media1920 = !!width && width > 1440
    const media1440 = !!width && width <= 1440 && width >1024
    const media1024 = !!width && width <= 1024 && width > 768
    const media480 = !!width && width <= 480
    const titleSize = () => {
        if (media1920) {
            return scrolled? '120px': '128px'
        }
        if (media1440) {
            return scrolled? '90px': '100px'
        }
        if (media1024) {
            return scrolled? '50px': '60px'
        }
        if (media480) {
            return scrolled? '40px': '50px'
        }
    }

    const titleAnimation = useSpring({
        backgroundImage: scrolled
            ? 'linear-gradient(106.2deg, #FFD6F9 -12.33%, #FFCBB4 50.28%, #FFBEC3 114.17%)'
            : 'linear-gradient(106.2deg, #963488 -12.33%, #FC6F32 50.28%, #FF4A59 114.17%)',
        fontSize: titleSize(),
        config: { duration: 500 },
    });
    const marginAnimation = useSpring({
        marginBottom: scrolled ? "60px" : '160px',
        config: { duration: 500 },
    });
    const titleWrapperAnimation = useSpring({
        maxWidth: scrolled? '1500px': '1600px',
        config: { duration: 500 },
    });

    const firstBlockAnimation = useSpring({
        from: { transform: 'translateY(400%)' },
        to: { transform: scrolled? 'translateY(0%)': 'translateY(400%)' },
        config: { tension: 50, friction: 10, mass: 1 },
    });

    const secondBlockAnimation = useSpring({
        from: { transform: 'translateY(400%)' },
        to: { transform: scrolled? 'translateY(0%)': 'translateY(400%)' },
        config: { tension: 50, friction: 12, mass: 2 },
    });

    const thirdBlockAnimation = useSpring({
        from: { transform: 'translateY(400%)' },
        to: { transform: scrolled? 'translateY(0%)': 'translateY(400%)' },
        config: { tension: 50, friction: 14, mass: 3 },
    });
    const planerAnimation = useSpring({
        top: inView? '-100px' : scrolled? '0': '100px',
        config: { duration: 300 },
        reset: true,
    });
    const lowCloudAnimation = useSpring({
        transform: inView? 'rotateY(0)': 'rotateY(180deg)',
        bottom: inView? '0' : scrolled? '-200px': '-100px',
        config: { duration: 300 },
    });
    const upCloudAnimation = useSpring({
        top: inView? '-200px': scrolled? '-100px': '0',
        config: { duration: 300 },
    });

    const section2Animation = useSpring({
        from: { transform: 'translateY(50%)' },
        to: { transform: inView ? 'translateY(0%)' : 'translateY(50%)' },
        config: { tension: 50, friction: 10, mass: 1 },
    });
    const section2IconsAnimation = useSpring({
        from: { transform: 'translateX(50%)' },
        to: { transform: inView ? 'translateX(0%)' : 'translateX(50%)' },
        config: { tension: 50, friction: 10, mass: 1 },
    });

    const handleScroll = (event: any) => {
        if (!scrollLocked) {
            setScrollLocked(true)
        if (!scrolled) {
            setScrolled(true);
        } else {
            const deltaY = event.deltaY;
                if (deltaY > 0) {
                    scroller.scrollTo('section2', {
                        duration: 500,
                        delay: 100,
                        smooth: true,
                        containerId: 'container',
                        // offset: 50,
                    });
                } else {
                    scroller.scrollTo('section1', {
                        duration: 500,
                        delay: 100,
                        smooth: true,
                        containerId: 'container',
                        // offset: 50,
                    });
                }
            }
            setTimeout(() => {
                setScrollLocked(false);
            }, 1000);
        }
        }


  return (
      <main
          id="container"
          className={styles.main}
          onWheel={handleScroll}>
          <Element name="section1" style={{minHeight: '100vh', zIndex: 1}}>
              <animated.div
                  style={planerAnimation}
                  className={styles.planetContainer}>
                  <Image src={planet} alt="planet" width={800}/>
              </animated.div>
              <animated.div
                  style={lowCloudAnimation}
                  className={styles.lowCloud}>
                  <Image src={lowCloud} alt="planet" width={800}/>
              </animated.div>
              <animated.div
                  style={upCloudAnimation}
                  className={styles.upCloud}>
                  <Image src={upCloud} alt="planet" width={800}/>
              </animated.div>
              <animated.header
                  style={marginAnimation}
                  className={styles.header}>
                  <button className={styles.btnNoBorder}>
                      How It Works
                  </button>
                  <div className={styles.bordered}>
                      <button className={styles.btn}>
                          Buy Salt AI
                      </button>
                  </div>
              </animated.header>
              <animated.div
                  style={titleWrapperAnimation}
                  className={styles.titleWrapper}>
                  <animated.h1
                      style={titleAnimation}
                      className={`${styles.title} ${scrolled ? styles.scrolled : ''}`}
                  >
                      A new economic primitive for funding decentralized AI
                  </animated.h1>
                  <p className={styles.subtitle}>
                      We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
                  </p>
                  <div className={styles.buttonBlock}>
                      <div className={styles.bordered}>
                          <button className={styles.btnLg}>
                              Buy Salt AI
                          </button>
                      </div>
                      <button className={styles.btnNoBorderLg}>
                          Try Now
                      </button>
                  </div>
              </animated.div>
              <div className={styles.badgeWrapper}>
                  <animated.div
                      style={firstBlockAnimation}
                      className={styles.badgeBody}>
                      <div className={styles.badgeTitle}>
                          1,873
                      </div>
                      <div className={styles.badgeSubtitle}>
                          LLM models
                      </div>
                  </animated.div>
                  <animated.div
                      style={secondBlockAnimation}
                      className={styles.badgeBody}>
                      <div className={styles.badgeTitle}>
                          $326,734
                      </div>
                      <div className={styles.badgeSubtitle}>
                          Paid to data scientists
                      </div>
                  </animated.div>
                  <animated.div
                      style={thirdBlockAnimation}
                      className={styles.badgeBody}>
                      <div className={styles.badgeTitle}>
                          6,557
                      </div>
                      <div className={styles.badgeSubtitle}>
                          Developers
                      </div>
                  </animated.div>
              </div>
          </Element>
          <Element name="section2"
                   style={{minHeight: '100vh', zIndex: 1}}>
              <animated.div
                  ref={ref}
                  style={section2Animation}
                  className={styles.section2}>
                  <div className={styles.section2Title}>
                      Projects integrated into the Arrakis AI Ecosystem
                  </div>
                  <animated.div
                      style={section2IconsAnimation}
                      className={styles.section2images}>
                          <Image src={solana} alt="solana" />
                          <Image src={arweave} alt="arweave" />
                          <Image src={bittensor} alt="bittensor"/>
                          <Image src={red_icon} alt="red_icon"/>
                          <Image src={telegram} alt="telegram"/>
                  </animated.div>
              </animated.div>
          </Element>
      </main>
  );
}

