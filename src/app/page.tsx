import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen section homepage-main" 
        style={{ backgroundImage: "url('/resume_bg-image.jpg')", backgroundSize: 'cover' }}>
          <div className="base-container main-home w-container">
            <div className="home-main-block">
              <div className="home-tabs">
                <div className="home-tab-nav">
                  
                    
                </div>
                <div className="home-tab-page">
            
                </div>
              </div>
              <div className="main-person-image-block">
              <Image
                  src="/leo-prof.jpg"
                  alt="leoprof"
                  width={700}
                  height={1204}
                  priority
                  className="main-person-image"
                />
              </div>
            </div>
          </div>
      </main>
    </>
  );
}
