import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

function WorkSection() {
  const [selectedWork, setSelectedWork] = useState<any>(null);

  useEffect(() => {
    if (selectedWork) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedWork]);

  const works = [
    {
      title: "Informatics UII",
      image: "/work_dmc.png",
      modalImage: "/dmc_modal.png",
      location: "Sleman, Yogyakarta",
      desc: "As a Student Staff for the Informatics Program, I create engaging Instagram feeds and video reels to support the program’s content needs. I focus on delivering visually appealing and relevant content that helps communicate information clearly while keeping up with current trends.",
      tools: ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop", "Figma", "Notion"],
      link: "https://drive.google.com/drive/folders/1v1mFt8EZsUvXt7mBBp-Qq5nKmYEUYS9W?usp=sharing" 
    },
    {
      title: "Try Rewind",
      image: "/work_rewind.png",
      modalImage: "/rewind_modal.png",
      location: "New Jersey, USA",
      desc: "As a freelance creative, I worked on a video reel project for Try Rewind, focusing on online volleyball coaching. I created engaging and dynamic content that highlights the training experience in a way that feels energetic, modern, and easy to follow.",
      tools: ["Adobe Premiere Pro", "Notion"],
      link: "https://drive.google.com/drive/folders/1H9uSSH0FvZUdGTdXsUBzVilYetQrs-lr?usp=sharing" 
    },
    {
      title: "GN Motion",
      image: "/work_gn.png",
      modalImage: "/gn motion_modal.png",
      location: "Thailand",
      desc: "I also worked as a freelance creative for GN Motion, a CGI-based agency, where I produced video reels for promotional purposes. My role focused on turning high-quality visuals into engaging short-form content that captures attention and strengthens the brand’s presence.",
      tools: ["Adobe Premier Pro", "Adobe After Effects", "Notion"],
      link: "https://drive.google.com/drive/folders/1anroCbZiiMu93OrXwf9dQT_gp0blRy8S?usp=sharing" 
    },
    {
      title: "PakaiJasa.id",
      image: "/work_pakaijasa.png",
      modalImage: "/PakaiJasa_modal.png",
      location: "Brebes, Central Java",
      desc: "I worked as a freelance Graphic Designer at PakaiJasa.id, a legal services company, where I created visual content to support branding and promotional needs. I focused on delivering clean and professional designs that align with the company’s identity.",
      tools: ["Adobe Photoshop"],
      link: "https://drive.google.com/drive/folders/1JRc44gUTEs_QtQdTuZDEg_E4CU7rhXzR?usp=sharing"
    },
    {
      title: "CJVA",
      image: "/work_cjva.png",
      modalImage: "/cjva_modal.png",
      location: "New Jersey, USA",
      desc: "At CJVA (Central Jersey Volleyball Academy), I worked as a Video Editor, creating engaging content that captures the intensity and energy of volleyball. I focused on delivering dynamic edits that highlight gameplay, training moments, and the overall experience in a visually compelling way.",
      tools: ["Adobe Premiere Pro", "Adobe After Effects", "Notion"],
      link: "https://drive.google.com/drive/folders/1XvoltnDHhk8sQVekBxTe6PfoY9lfoiRv?usp=sharing" 
    },
    {
      title: "College Projects",
      image: "/work_tubes.png",
      modalImage: "/tubes_modal.png",
      location: "Sleman, Yogyakarta",
      desc: "In my campus projects, I take part in a semesterly expo where my final projects are showcased. These exhibitions give me the opportunity to present my work, share ideas, and demonstrate the creative and technical skills I’ve developed.",
      tools: ["Figma", "Adobe Photoshop", "VS Code", "Notion"],
      link: "https://github.com/NafisMaulanaaa" 
    }
  ];

  return (
    <div className="work">
      <h2 className="work-title reveal">My Experience</h2>

      <div className="work-card reveal">

        {/*Grid*/}
        <div className="work-grid">
          {works.map((work, i) => (
            <div
              key={i}
              className="work-item reveal"
              onClick={() => setSelectedWork(work)}
            >
              <img src={work.image} />
              <p>{work.title}</p>
            </div>
          ))}
        </div>

        {/*Modal*/}
        {selectedWork &&
        createPortal(
          <div
            className="modal-overlay"
            onClick={() => setSelectedWork(null)}
          >
            <div
              className="modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setSelectedWork(null)}
              >
                ✕
              </button>

              <div className="modal-image-wrapper">
                <img
                  src={selectedWork.modalImage || selectedWork.image}
                  className="modal-image"
                />

                <a
                  href={selectedWork.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="see-detail"
                >
                  See Detail

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="arrow-icon"
                  >
                    <path d="M13 5l7 7-7 7M5 12h14"/>
                  </svg>
                </a>
              </div>

              <div className="modal-content">
                <h2 className="modal-title">{selectedWork.title}</h2>
                <p className="location">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="location-icon"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>

                {selectedWork.location}
              </p>
                <p>{selectedWork.desc}</p>

                <div className="tools-list">
                  {selectedWork.tools.map((tool: string, i: number) => (
                    <span key={i}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

        {/*Tools*/}
        <div className="tools">
          <h3>My Tools</h3>

          <div className="tools-wrapper">
            <div className="tools-track">
              <div className="tools-group">
                <div className="tool"><img src="/tools_vs code.png" /></div>
                <div className="tool"><img src="/tools_notion.png" /></div>
                <div className="tool"><img src="/tools_figma.png" /></div>
                <div className="tool"><img src="/tools_premier.png" /></div>
                <div className="tool"><img src="/tools_ae.png" /></div>
                <div className="tool"><img src="/tools_photoshop.png" /></div>
              </div>

              <div className="tools-group">
                <div className="tool"><img src="/tools_vs code.png" /></div>
                <div className="tool"><img src="/tools_notion.png" /></div>
                <div className="tool"><img src="/tools_figma.png" /></div>
                <div className="tool"><img src="/tools_premier.png" /></div>
                <div className="tool"><img src="/tools_ae.png" /></div>
                <div className="tool"><img src="/tools_photoshop.png" /></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WorkSection;