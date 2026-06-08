// import { motion } from "framer-motion";

// export default function Home() {
//     return (
//         <div style={styles.wrapper}>

//             {/* HERO SECTION */}
//             <motion.section
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//                 style={styles.heroSection}
//             >
//                 <h1 style={styles.heroTitle}>
//                     Precision Vehicle Manufacturing for Industrial & Commercial Needs
//                 </h1>
//                 <p style={styles.heroSubtitle}>
//                     Custom-built vehicle bodies engineered for durability, performance,
//                     and exact specifications. Trusted by government agencies, corporations,
//                     and municipal leaders across India.
//                 </p>
//                 <div style={styles.buttonGroup}>
//                     <button style={styles.primaryBtn}>Explore Manufacturing</button>
//                     <button style={styles.secondaryBtn}>View Gallery</button>
//                 </div>

//                 {/* IMAGE BANNER */}
//                 <motion.div
//                     style={styles.heroImage}
//                     initial={{ scale: 0.9 }}
//                     animate={{ scale: 1 }}
//                     transition={{ duration: 1 }}
//                 />
//             </motion.section>

//             {/* TRUST & META */}
//             <motion.section
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 style={styles.trustSection}
//             >
//                 <p style={styles.trustText}>
//                     Delivering over <strong>1000+ Solid Waste Vehicles</strong> and
//                     <strong> 900+ Commercial Vans</strong> with engineering excellence
//                     and on-time delivery.
//                 </p>
//             </motion.section>

//             {/* FEATURES GRID */}
//             <motion.section style={styles.featureGrid}>
//                 {[
//                     {
//                         title: "Precision Welding & Fabrication",
//                         desc: "MIG & spot welding, automated paint booth, rust-proof finishes."
//                     },
//                     {
//                         title: "Load-Tested Frame Design",
//                         desc: "Tested load-bearing chassis, high-tensile steel structure."
//                     },
//                     {
//                         title: "Custom Vehicle Bodies",
//                         desc: "Tailor-made solutions for delivery vans, garbage tippers & more."
//                     },
//                     {
//                         title: "After-Sales Support",
//                         desc: "Post-delivery inspections, spare part replacement & service."
//                     },
//                 ].map((f, i) => (
//                     <motion.div
//                         key={i}
//                         whileHover={{ scale: 1.05 }}
//                         style={styles.featureCard}
//                         transition={{ delay: i * 0.1 }}
//                     >
//                         <h3 style={styles.featureTitle}>{f.title}</h3>
//                         <p style={styles.featureDesc}>{f.desc}</p>
//                     </motion.div>
//                 ))}
//             </motion.section>

//             {/* QUICK CTA */}
//             <motion.section
//                 style={styles.ctaSection}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//             >
//                 <h2 style={styles.ctaText}>Ready to Build Your Custom Vehicle?</h2>
//                 <button style={styles.primaryBtn}>Request a Quote</button>
//             </motion.section>

//         </div>
//     );
// }

// const styles = {
//     wrapper: { width: "100%", fontFamily: "Arial, sans-serif" },

//     heroSection: {
//         padding: 60,
//         background: "linear-gradient(135deg, #0c1a2b, #1d3557)",
//         color: "#fff",
//         textAlign: "center",
//         position: "relative",
//     },
//     heroTitle: { fontSize: 42, fontWeight: 700 },
//     heroSubtitle: { fontSize: 18, margin: "20px 0" },
//     buttonGroup: { display: "flex", justifyContent: "center", gap: 20 },
//     primaryBtn: {
//         background: "#00c6ff",
//         color: "#000",
//         padding: "12px 30px",
//         border: "none",
//         borderRadius: 6,
//         cursor: "pointer",
//         boxShadow: "0px 6px 12px rgba(0,0,0,0.2)"
//     },
//     secondaryBtn: {
//         background: "#fff",
//         color: "#000",
//         padding: "12px 30px",
//         border: "none",
//         borderRadius: 6,
//         cursor: "pointer"
//     },

//     heroImage: {
//         marginTop: 40,
//         width: "100%",
//         height: 300,
//         background: "url('https://autovira.com/wp-content/uploads/2025/06/vehicle-factory.jpg') center/cover no-repeat",
//         borderRadius: 10,
//     },

//     trustSection: {
//         padding: 40,
//         background: "#e8f4fb",
//         textAlign: "center"
//     },
//     trustText: { fontSize: 22, fontWeight: 600 },

//     featureGrid: {
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//         gap: 20,
//         padding: 60
//     },
//     featureCard: {
//         background: "#fff",
//         padding: 24,
//         borderRadius: 8,
//         boxShadow: "0px 4px 8px rgba(0,0,0,0.1)"
//     },
//     featureTitle: { fontSize: 18, fontWeight: 700 },
//     featureDesc: { fontSize: 14, marginTop: 8 },

//     ctaSection: {
//         background: "#002d5f",
//         color: "#fff",
//         padding: 60,
//         textAlign: "center"
//     },
//     ctaText: { fontSize: 24, marginBottom: 20 }
// };


import { motion } from "framer-motion";
import img1 from "../images/slider1.jpeg";
import img2 from "../images/slider2.jpeg";
import img3 from "../images/slider3.jpeg";
import img4 from "../images/slider4.jpeg";
import img5 from "../images/slider5.jpeg";
import manufacturingimg from "../images/img1.jpeg";

import logo from "../images/logobg.png";

const images = [img1, img2, img3, img4, img5];

export default function Home() {
    return (
        <div style={styles.wrapper}>



            {/* IMAGE SCROLLER */}
            <div style={styles.scrollerWrapper}>
                <motion.div
                    style={styles.scroller}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear"
                    }}
                >
                    {[...images, ...images].map((img, index) => (
                        <div key={index} style={styles.imageBox}>
                            <img src={img} alt="manufacturing" style={styles.image} />
                        </div>
                    ))}
                </motion.div>

                {/* OVERLAY CONTENT */}
                <div style={styles.overlay}>
                    <img src={logo} alt="Autovira Logo" style={styles.logo} />
                    <h2 style={styles.overlayTitle}>Vehicle Manufacturing Excellence</h2>
                    <p style={styles.overlayText}>
                        Trusted solutions for municipal, industrial, and commercial fleets
                    </p>
                </div>
            </div>
            {/* HERO SECTION */}
            {/* <section style={styles.heroSection}>
                <div style={styles.heroContent}>

               
                    <div style={styles.textBlock}>
                        <h1 style={styles.heroTitle}>
                            Precision Vehicle Manufacturing
                        </h1>

                        <p style={styles.heroSubtitle}>
                            For more than a decade, AutoVira has been a trusted name in vehicle manufacturing,
                            delivering over 1,000 Solid Waste Management Vehicles and 900+ Commercial Vans
                            across India.
                        </p>

                        <p style={styles.heroSubtitle}>
                            Driven by precision engineering, on-time execution, and a client-first approach,
                            we have earned the confidence of government authorities, municipal corporations,
                            and private enterprises nationwide.
                        </p>

                        <p style={styles.heroSubtitle}>
                            Every project we deliver reflects our core values — quality, innovation,
                            and unwavering service commitment.
                        </p>

                        <p style={styles.heroSubtitle}>
                            We are proud to be a key supplier under the Swachh Bharat Mission, supporting
                            cleaner cities and sustainable infrastructure across Pune, Solapur, Amravati,
                            and 300+ Gram Panchayats.
                        </p>
                    </div>

                   
                    <div style={styles.imageBlock}>
                        <img
                            src={manufacturingimg}
                            alt="Vehicle Manufacturing"
                            style={styles.heroImage}
                        />
                    </div>

                </div>
            </section> */}

            <section style={styles.heroSection}>
                <div style={styles.heroOverlay}>

                </div>
                {/* <div style={styles.goldLines}></div> */}
                <div style={styles.heroContent}>

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        style={styles.leftSide}
                    >
                        <div style={styles.badge}>
                            India's Trusted Vehicle Manufacturing Partner
                        </div>

                        <h1 style={styles.heroTitle}>
                            Engineering
                            <span style={{ color: "#D4AF37" }}>
                                {" "}Mobility Solutions{" "}
                            </span>
                            For Tomorrow
                        </h1>

                        <p style={styles.heroDesc}>
                            AutoVira designs and manufactures durable,
                            application-specific vehicle bodies for municipal,
                            industrial and commercial sectors across India.
                        </p>

                        <div style={styles.btnGroup}>
                            <button style={styles.primaryBtn}>
                                Explore Products
                            </button>

                            <button style={styles.secondaryBtn}>
                                Get Brochure
                            </button>
                        </div>

                        <div style={styles.statsRow}>
                            <div style={styles.statCard}>
                                <h2 style={{ color: "#D4AF37" }}>1000+</h2>
                                <span>SWM Vehicles</span>
                            </div>

                            <div style={styles.statCard}>
                                <h2 style={{ color: "#D4AF37" }}>900+</h2>
                                <span>Commercial Vans</span>
                            </div>

                            <div style={styles.statCard}>
                                <h2 style={{ color: "#D4AF37" }}>10+</h2>
                                <span>Years Experience</span>
                            </div>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        style={styles.rightSide}
                    >
                        <div style={styles.imageContainer}>
                            {/* <div style={styles.rotatingRing}></div> */}
                            <img
                                src={manufacturingimg}
                                alt=""
                                style={styles.heroImage}
                            />

                            <div style={styles.floatingCard}>
                                <h4>Precision Engineering</h4>
                                <p>Manufacturing Excellence</p>
                            </div>

                            <div style={styles.floatingCard2}>
                                <h4>300+</h4>
                                <p>Gram Panchayats Served</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

        </div>
    );
}
const styles = {
    wrapper: {
        width: "100%",
        fontFamily: "Arial, sans-serif"
    },


    heroSubtitle: {
        fontSize: 18,
        marginTop: 10,
        opacity: 0.9
    },

    scrollerWrapper: {
        position: "relative",
        overflow: "hidden",
        height: 320,
        // background: "#000"
        background:
            "linear-gradient(180deg,#0D0D0D,#161616)",
    },

    scroller: {
        display: "flex",
        width: "200%"
    },

    imageBox: {
        minWidth: "20%",
        height: 320
    },

    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },

    overlay: {
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.55)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        padding: 20
    },

    logo: {
        width: 120,
        marginBottom: 20
    },

    overlayTitle: {
        fontSize: 28,
        fontWeight: 700
    },

    overlayText: {
        maxWidth: 500,
        marginTop: 10,
        fontSize: 16,
        opacity: 0.9
    },




    textBlock: {
        flex: 1,
        textAlign: "left"
    },

    heroTitle: {
        fontSize: 42,
        fontWeight: 700,
        marginBottom: 20
    },

    heroSubtitle: {
        fontSize: 16,
        lineHeight: 1.7,
        marginBottom: 12,
        opacity: 0.95
    },

    imageBlock: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end"
    },

    heroSection: {
        position: "relative",
        minHeight: "100vh",
        background:
            "linear-gradient(135deg,#0D0D0D,#161616,#1F1F1F)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        padding: "100px 5%"
    },

    heroOverlay: {
        position: "absolute",
        width: "700px",
        height: "700px",
        borderRadius: "50%",
        background:
            "radial-gradient(circle,#D4AF3730,transparent)",
        top: "-250px",
        right: "-150px",
        filter: "blur(50px)"
    },

    heroContent: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "50px",
        zIndex: 2
    },

    leftSide: {
        flex: 1,
        minWidth: "320px"
    },

    badge: {
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "12px 25px",
        border: "1px solid rgba(212,175,55,.3)",
        background: "rgba(212,175,55,.08)",
        backdropFilter: "blur(15px)",
        borderRadius: "50px",
        color: "#D4AF37",
        fontWeight: "600",
        letterSpacing: "1px"
    },

    heroTitle: {
        fontSize: "clamp(42px,6vw,85px)",
        color: "#fff",
        fontWeight: "800",
        lineHeight: "1.05",
        marginBottom: "25px"
    },

    heroDesc: {
        color: "#c7d2df",
        fontSize: "18px",
        lineHeight: "1.8",
        maxWidth: "650px"
    },

    btnGroup: {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "35px"
    },

    primaryBtn: {
        background: "#D4AF37",
        color: "#111",
        border: "none",
        padding: "16px 40px",
        borderRadius: "60px",
        fontWeight: "700",
        cursor: "pointer",
        transition: "all .4s"
    },

    secondaryBtn: {
        background: "transparent",
        color: "#fff",
        border: "2px solid #D4AF37",
        padding: "16px 40px",
        borderRadius: "60px",
        cursor: "pointer"
    },

    statsRow: {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "50px"
    },

    statCard: {
        background: "rgba(255,255,255,.05)",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(212,175,55,.15)",
        borderRadius: "20px",
        padding: "25px",
        color: "#fff",
        minWidth: "160px"
    },

    rightSide: {
        flex: 1,
        minWidth: "320px",
        display: "flex",
        justifyContent: "center"
    },

    imageContainer: {
        position: "relative"
    },

    heroImage: {
        width: "100%",
        maxWidth: "650px",
        height: "500px",
        objectFit: "cover",
        borderRadius: "25px",
        border: "2px solid rgba(212,175,55,.3)",
        boxShadow:
            "0 30px 80px rgba(0,0,0,.5)"
    },

    floatingCard: {
        position: "absolute",
        top: "25px",
        left: "-40px",
        background: "#111",
        color: "#fff",
        border: "1px solid #D4AF37",
        padding: "20px",
        borderRadius: "18px",
        boxShadow: "0 15px 40px rgba(0,0,0,.4)"
    },

    floatingCard2: {
        position: "absolute",
        bottom: "25px",
        right: "-30px",
        background: "#D4AF37",
        color: "#111",
        padding: "20px",
        borderRadius: "18px",
        fontWeight: "700"
    },


    goldLines: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:
            "linear-gradient(90deg, transparent 49%, rgba(212,175,55,0.04) 50%, transparent 51%)",
        backgroundSize: "120px 120px",
        pointerEvents: "none",
        zIndex: 1
    },
    rotatingRing: {
        position: "absolute",
        width: "550px",
        height: "550px",
        border: "2px dashed rgba(212,175,55,.3)",
        borderRadius: "50%",
        top: "-25px",
        left: "-25px",
        animation: "spin 30s linear infinite",
        zIndex: 0
    },


};
<style>
    {`
@keyframes spin{
    from{
        transform:rotate(0deg);
    }
    to{
        transform:rotate(360deg);
    }
}
`}
</style>