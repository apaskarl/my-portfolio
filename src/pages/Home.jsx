import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import ActionButton from "../components/ActionButton";
import HeaderLink from "../components/HeaderLink";
import MenuButton from "../components/MenuButton";
import SkillContainer from "../components/SkillContainer";
import FooterIcon from "../components/FooterIcon";
import karlLogo from "../assets/images/logos/k-logo-fill.png";
import karl from "../assets/images/karl.jpg";
import karl2 from "../assets/images/karl2.jpg";
import mobileHub from "../assets/images/projects/mobile-hub.png";
import ServiceBox from "../components/ServiceBox";
import SectionTitle from "../components/section/SectionTitle";
import ProjectContainer from "../components/projects/ProjectContainer";

export const Home = () => {
  const theme = localStorage.getItem("theme");

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const roles = [
    "Web Developer",
    "Web Designer",
    "Full-Stack Developer",
    "Coffee Lover",
  ];
  useEffect(() => {
    const typingSpeed = deleting ? 30 : 75;
    const timeout = setTimeout(() => {
      if (!deleting && charIndex < roles[index].length) {
        setText(roles[index].slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (deleting && charIndex > 0) {
        setText(roles[index].slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!deleting && charIndex === roles[index].length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] duration-200">
      <header
        className={`fixed z-50 flex w-full items-center justify-between bg-[var(--secondary)] px-8 py-4 shadow-md transition-transform duration-200 md:px-20 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex cursor-pointer items-center gap-x-4 font-spaceMono text-2xl font-bold tracking-tight text-[var(--white)]">
          <img src={karlLogo} alt="karl-logo" className="size-10" />
          karl.dev
        </div>

        <div className="hidden items-center gap-x-10 md:flex">
          <HeaderLink section="home" label="Home" />
          <HeaderLink section="about" label="About" />
          <HeaderLink section="projects" label="Projects" />
          <HeaderLink section="contact" label="Contact" />
        </div>

        <MenuButton onClick={toggleMenu} />
        <div
          className={`${showMenu ? "translate-x-0" : "translate-x-full"} fixed right-0 top-0 flex h-16 min-h-screen w-full flex-col items-center justify-center gap-y-10 bg-[var(--secondary)] duration-200`}
        >
          <HeaderLink route="/" label="Home" />
          <HeaderLink route="/" label="About" />
          <HeaderLink route="/" label="Work" />
          <HeaderLink route="/" label="Contact" />
        </div>
      </header>

      <main>
        <section
          id="home"
          className="flex min-h-screen items-center justify-between gap-x-16 px-8 md:px-32"
        >
          <div className="flex-1 space-y-10">
            <div>
              <p className="mb-3 flex items-center gap-x-4 font-spaceMono text-xl font-medium text-[var(--white)]">
                Hi, my name is Karl.{" "}
                <Icon icon="twemoji:waving-hand" className="text-xl" />
              </p>
              <h3 className="text-5xl font-bold text-[var(--white)]">
                I'm a <span className="text-[var(--primary)]">{text}</span>.
              </h3>
            </div>

            <p className="leading-relaxed text-[var(--light)]">
              Code first, coffee later... Just kidding, coffee always comes
              first. Full Stack Developer who's equally at home building
              databases as I am Googling error messages I don't understand.
              Let's make the web a better place, one bug at a time!
            </p>

            <div className="flex flex-col gap-5 md:flex-row">
              <ActionButton
                type="primary"
                label="Download CV"
                icon="material-symbols:download-rounded"
              />
              <ActionButton label="Contact Me" icon="iconoir:message-text" />
            </div>
          </div>

          <div className="relative hidden w-max items-center justify-center md:flex">
            <img src={karl} className="z-20 size-[25rem]" />
            <span className="absolute left-7 top-7 size-[25rem] bg-[var(--primary)]" />
          </div>
        </section>

        <section
          id="about"
          className="flex gap-x-10 px-8 py-16 md:px-32 md:py-16"
        >
          <div className="hidden md:flex">
            <img src={karl2} className="z-20 h-full w-80 object-cover" />
          </div>

          <div className="flex-1 space-y-8">
            <div>
              <SectionTitle
                title="About Me"
                icon="twemoji:smiling-face-with-sunglasses"
                subtext="Who is Karl?"
              />
            </div>

            <div className="md:hidden">
              <img src={karl2} className="z-20 w-full object-cover" />
            </div>

            <div className="line-clamp-6 space-y-4 leading-relaxed text-[var(--light)] md:line-clamp-none">
              <p>
                Hi, I'm James Karl Apas, a 21-year-old web developer with a
                passion for creating intuitive and visually appealing websites.
                I specialize in{" "}
                <span className="text-[var(--white)]">
                  Front-end Development{" "}
                </span>{" "}
                but also have experience in{" "}
                <span className="text-[var(--white)]">
                  Back-end Development
                </span>
                , giving me a well-rounded skill set to tackle diverse projects.
                People often praise my minimalist designs and my attention to
                detail in website functionalities.
              </p>
              <p>
                I am a fresh graduate, continually honing my skills and seeking
                opportunities to gain valuable experience in the tech industry.
                I proudly earned my{" "}
                <span className="text-[var(--white)]">
                  Bachelor of Science in Information Technology
                </span>{" "}
                in 2025 as a Cum Laude graduate from{" "}
                <span className="text-[var(--white)]">
                  Cebu Technological University - Danao Campus
                </span>
                .
              </p>
              <p>
                When I'm not coding, you can find me sipping coffee, immersing
                myself in Marvel movies and anime, or enjoying some quality time
                gaming.
              </p>
              <p>Let's connect and create something amazing together!</p>
            </div>

            <ActionButton
              type="primary"
              label="Get In Touch"
              icon="lucide:mail"
            />
          </div>
        </section>

        <section
          id="services"
          className="space-y-14 px-8 py-16 md:px-32 md:py-16"
        >
          <div className="flex flex-col items-center justify-center">
            <SectionTitle
              title="My Services"
              icon="twemoji:glowing-star"
              subtext="Crafting stories through design and innovation"
              className="text-center"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <ServiceBox
              icon="fluent:code-24-regular"
              title="Web Development"
              descrtiption="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit laborum facilis repellat consequuntur perferendis
              sed debitis ab iure maxime ducimus!"
            />
            <ServiceBox
              icon="material-symbols-light:design-services-outline"
              title="UI/UX Design"
              descrtiption="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit laborum facilis repellat consequuntur"
            />
            <ServiceBox
              icon="material-symbols-light:security-rounded"
              title="Security"
              descrtiption="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit laborum facilis repellat consequuntur perferendis
              sed debitis"
            />
          </div>
        </section>

        <section
          id="skills"
          className="space-y-14 px-8 py-16 md:px-32 md:py-16"
        >
          <div className="flex flex-col items-center">
            <SectionTitle
              title="Skills & Tools"
              icon="twemoji:laptop"
              subtext="My Toolbox & Things I Can Do"
              className="text-center"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-8">
            <SkillContainer icon="skill-icons:html" label="HTML5" />
            <SkillContainer icon="skill-icons:css" label="CSS3" />
            <SkillContainer icon="skill-icons:javascript" label="JavaScript" />
            <SkillContainer icon={`skill-icons:react-${theme}`} label="React" />
            <SkillContainer icon={`skill-icons:vuejs-${theme}`} label="Vue" />
            <SkillContainer
              icon={`skill-icons:nodejs-${theme}`}
              label="Node.js"
            />
            <SkillContainer
              icon={`skill-icons:expressjs-${theme}`}
              label="Express"
            />
            <SkillContainer icon={`skill-icons:php-${theme}`} label="PHP" />
            <SkillContainer
              icon={`skill-icons:laravel-${theme}`}
              label="Laravel"
            />
            <SkillContainer
              icon={`skill-icons:tailwindcss-${theme}`}
              label="Tailwind"
            />
            <SkillContainer icon="skill-icons:bootstrap" label="Bootstrap" />
            <SkillContainer icon="skill-icons:wordpress" label="Wordpress" />
            <SkillContainer icon={`skill-icons:mysql-${theme}`} label="MySQL" />
            <SkillContainer
              icon={`skill-icons:github-${theme}`}
              label="GitHub"
            />
            <SkillContainer icon={`skill-icons:vite-${theme}`} label="Vite" />
            <SkillContainer
              icon={`skill-icons:vscode-${theme}`}
              label="VS Code"
            />
          </div>
        </section>

        <section
          id="projects"
          className="space-y-10 px-8 py-16 md:px-32 md:py-16"
        >
          <div>
            <SectionTitle
              title="Projects"
              icon="twemoji:laptop"
              subtext="Some Things I've Built"
            />
          </div>

          <ProjectContainer
            image={mobileHub}
            title="Inventory Management System"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  eum minus pariatur eaque id unde inventore tempora consectetur
                  nobis beatae?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  eum minus pariatur eaque id unde inventore tempora consectetur
                  nobis beatae?"
            tech="React, Node.js, Express, Taiwlind, MySQL"
            position="right"
          />

          <ProjectContainer
            image={mobileHub}
            title="Inventory Management System"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  eum minus pariatur eaque id unde inventore tempora consectetur
                  nobis beatae?"
            tech="React, Node.js, Express, Taiwlind, MySQL"
          />

          <ProjectContainer
            image={mobileHub}
            title="Inventory Management System"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  eum minus pariatur eaque id unde inventore tempora consectetur
                  nobis beatae?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  eum minus pariatur eaque id unde inventore tempora consectetur
                  nobis beatae?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  eum minus pariatur eaque id unde inventore tempora consectetur
                  nobis beatae?"
            tech="React, Node.js, Express, Taiwlind, MySQL"
            position="right"
          />
        </section>
      </main>

      <footer className="px-8 md:px-32">
        <div className="flex flex-col justify-between gap-y-4 border-t border-[var(--secondary)] py-10 md:flex-row">
          <p className="flex items-center gap-x-2 tracking-wide text-[var(--gray)]">
            <Icon icon="ri:copyright-line" className="size-5" />
            Karl Apas 2024 | All rights reserved
          </p>

          <div className="flex gap-x-4">
            <FooterIcon icon="lucide:github" />
            <FooterIcon icon="lucide:facebook" />
            <FooterIcon icon="lucide:instagram" />
            <FooterIcon icon="lucide:twitter" />
            <FooterIcon icon="lucide:linkedin" />
          </div>
        </div>
      </footer>
    </div>
  );
};
