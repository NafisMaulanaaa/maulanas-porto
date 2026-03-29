import { useState, useEffect, useRef } from "react";
import "./index.css";
import WorkSection from "./WorkSection";

function App() {
  const roles = [
    "Graphic Designer",
    "Video Editor",
    "UI/UX Designer",
    "Frontend Developer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const scrollToAbout = () => {
    window.scrollTo({
      top: aboutRef.current!.offsetTop - 80,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const current = roles[index];
    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
      } else {
        setText(current.substring(0, text.length - 1));
      }

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  useEffect(() => {
    const card = document.querySelector(".about-card");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card?.classList.add("show");
        } else {
          card?.classList.remove("show");
        }
      },
      { threshold: 0.3 }
    );

    if (card) observer.observe(card);

    return () => {
      if (card) observer.unobserve(card);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/*Hero*/}
      <div className="hero">
        <div className="content">
          <img src="/memoji.png" className="avatar" />

          <p className="intro">
            Hi, I'm <span className="name">Nafis</span>
          </p>

          <h1 className="title">
            I'm a <span className="typing">{text}</span>
          </h1>

          <p className="subtitle">Let’s make something big!</p>

          <button className="btn" onClick={scrollToAbout}>
             <span>Get Closer</span>
          </button>
        </div>
      </div>

      {/*About Me*/}
      <div className="about" ref={aboutRef}>
        <div className="about-card">
          <div className="about-header">
            <div className="about-left">
              <img src="/pp.png" className="about-avatar"/>
              <h2>Nafis Ilyas Maulana</h2>
            </div>

            <div className="socials">
              <a href="https://www.linkedin.com/in/nafis-maulana/" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin_about.png" />
              </a>
              <a href="https://github.com/NafisMaulanaaa" target="_blank" rel="noopener noreferrer">
                <img src="/github_about.png" />
              </a>
              <a href="https://www.instagram.com/nafismaulanaa/" target="_blank" rel="noopener noreferrer">
                <img src="/instagram_about.png" />
              </a>
            </div>
          </div>

          <p>
            My journey in the creative field started when I was <b>nine</b>, when I first got interested in design and video editing. What began as simple curiosity gradually turned into something more serious, especially as I started working on real projects. Over time, I’ve had the chance to work with a variety of clients, both local and international, which helped me grow not just in terms of skills, but also in understanding different styles, audiences, and creative needs.
          </p>

          {showMore && (
            <p>
              Through these experiences, I’ve learned how to turn ideas into visual content that feels clear and meaningful, while keeping communication smooth and the process well-organized. I’m always looking to improve and take on new challenges, whether it’s in design, editing, or content creation, with the goal of creating work that looks good but also delivers real impact.
            </p>
          )}

          <button 
            className="show-more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>

      {/* Work Section */}
      <WorkSection />

      {/* Footer */}
      <div className="footer reveal">
        <div className="fade-top"></div>

        <h2 className="footer-title reveal">Let’s Connect With Me</h2>

        <div className="footer-socials">
          <a 
            href="https://www.linkedin.com/in/nafis-maulana/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="reveal"
          >
            <img src="/connect_linkedin.png" />
          </a>

          <a 
            href="https://github.com/NafisMaulanaaa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="reveal"
          >
            <img src="/connect_github.png" />
          </a>

          <a 
            href="https://www.instagram.com/nafismaulanaa/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="reveal"
          >
            <img src="/connect_instagram.png" />
          </a>

          <a 
            href="mailto:nafisilyasmaulana@email.com"
            className="reveal"
          >
            <img src="/connect_email.png" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;