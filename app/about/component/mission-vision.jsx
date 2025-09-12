"use client"

export default function MissionVision() {
  return (
    <>
      <style jsx>{`
        .container {
          width: 100%;
        }

        .section {
          padding: 4rem 0;
        }

                 .missionSection {
           background-color: #f9fafb;
         }

         .visionSection {
           background-color: #f9fafb;
         }

        .sectionContainer {
          max-width: 1024px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        .gridReverse {
          grid-template-columns: 1fr;
        }

                 .imageContainer {
           aspect-ratio: 4 / 3;
           border-radius: 1rem;
           overflow: hidden;
           background-color: #f3f4f6;
           width: 50%;
           margin: 0 auto;
         }

         .image {
           width: 100%;
           height: 100%;
           object-fit: cover;
         }

        .content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

                 .heading {
           font-size: 2rem;
           font-weight: bold;
           color: #00223A;
           margin: 0;
         }

         .text {
           font-size: 1rem;
           line-height: 1.6;
           color: #00223A;
           margin: 0;
         }

                 /* Tablet and Desktop */
         @media (min-width: 1024px) {
           .section {
             padding: 6rem 0;
           }

           .grid {
             grid-template-columns: 1fr 1fr;
             gap: 4rem;
           }

           .gridReverse {
             grid-template-columns: 1fr 1fr;
           }

           .heading {
             font-size: 3rem;
           }

           .text {
             font-size: 1.125rem;
           }

           .imageContainer {
             width: 100%;
           }
         }

        /* Medium screens */
        @media (min-width: 768px) {
          .heading {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <div className="container">
                 {/* Mission Section */}
         <section className="section missionSection">
           <div className="sectionContainer">
            <div className="grid">
              <div className="imageContainer">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/media-d99pxFXAR05rKtRttcCKSD30IpI3uk.png"
                  alt="Legal gavel representing our mission"
                  className="image"
                />
              </div>

              <div className="content">
                <h2 className="heading">Our Mission</h2>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem magna, posuere a ligula vulputate,
                  malesuada gravida sapien. Nulla sed sagittis turpis. Nunc dapibus ullamcorper mollis. Sed tincidunt
                  purus ac purus aliquet convallis. Integer consectetur quam imperdiet metus blandit commodo.
                  Pellentesque convallis fermentum tortor, nec accumsan turpis. Fusce auctor justo augue, ut convallis
                  ante bibendum convallis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="section visionSection">
          <div className="sectionContainer">
            <div className="grid gridReverse">
              <div className="content">
                <h2 className="heading">Our Vision</h2>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem magna, posuere a ligula vulputate,
                  malesuada gravida sapien. Nulla sed sagittis turpis. Nunc dapibus ullamcorper mollis. Sed tincidunt
                  purus ac purus aliquet convallis. Integer consectetur quam imperdiet metus blandit commodo.
                  Pellentesque convallis fermentum tortor, nec accumsan turpis. Fusce auctor justo augue, ut convallis
                  ante bibendum convallis.
                </p>
              </div>

              <div className="imageContainer">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/media-d99pxFXAR05rKtRttcCKSD30IpI3uk.png"
                  alt="Legal gavel representing our vision"
                  className="image"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
