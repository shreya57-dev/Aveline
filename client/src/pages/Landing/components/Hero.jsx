import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/hero/hero_image.png";
           
function Hero(){
    return(
           <main>
            <section  className="min-h-screen relative bg-neutral-950 px-12 py-8 ">
                {/* background image */}
                <div className="hero-background absolute inset-0 z-0">
                        <img 
                            src={heroImage}
                            alt="Woman performing a handstand"
                            className="w-full h-full object-cover"
                        />
                </div>
                {/* overlay */}
                <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10">

                </div>
                {/* hero section */}
                <div className="hero-content relative z-20">
                    <div className="max-w-7xl mx-auto">
                        {/* header */}
                        <header className="flex justify-between items-center mt-12">
                        <Link to= {"/"}><span className="font-display text-5xl tracking-[0.35em] font-extralight tracking-[0.35em] font-light ml-4 text-white">AVELINE</span></Link>
                        <Link to={"/login"}>
                        <span className="text-white hover:text-[#aea584] transition-colors duration-200">Sign in</span>
                        </Link>
                        </header>
                        {/* hero content */}
                        <div className="hero-body mt-32 max-w-lg ml-12 flex flex-col gap-8">
                            <h1 className="font-display text-5xl leading-tight font-medium text-white ">Move<br/> with Intention</h1>
                            <p className="text-xl leading-relaxed text-gray-300">Strength.<br/> Balance.<br/> Confidence.</p>
                            <Link to={"/practice-paths"}>
                            <button className="bg-[#aea584]
                                                px-12
                                                py-4
                                                shadow-lg
                                                rounded-2xl
                                                font-medium
                                                hover:opacity-90
                                                hover:scale-105 transition-all duration-300
                                                transition">Ready to dive in?</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
           </main>
       
    );
}

export default Hero;