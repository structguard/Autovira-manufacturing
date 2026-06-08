// import { motion } from "framer-motion";
// import {
//   FaIndustry,
//   FaTruck,
//   FaCheckCircle,
//   FaClock,
//   FaCogs,
//   FaLeaf
// } from "react-icons/fa";

// import aboutHero from "../images/logo.jpg";
// import aboutFactory from "../images/img1.jpeg";

// export default function AboutUs() {
//   return (
//     <section style={styles.container}>

//       <div style={styles.goldGlow}></div>
//       <div style={styles.goldGlow2}></div>

//       {/* HERO SECTION */}
//       <motion.div
//         style={styles.hero}
//       >

//         <div style={styles.leftHero}>

//           <span style={styles.badge}>
//             AUTO VIRA
//           </span>

//           <h1 style={styles.heroTitle}>
//             Engineering Mobility
//             For The Future
//           </h1>

//           <p style={styles.heroText}>
//             AutoVira manufactures durable,
//             application-specific vehicle bodies
//             for municipal, industrial and
//             commercial applications across India.
//           </p>

//           <div style={styles.heroStats}>

//             <div style={styles.heroStat}>
//               <h2>1900+</h2>
//               <span>Vehicles</span>
//             </div>

//             <div style={styles.heroStat}>
//               <h2>10+</h2>
//               <span>Years</span>
//             </div>

//             <div style={styles.heroStat}>
//               <h2>300+</h2>
//               <span>Panchayats</span>
//             </div>

//           </div>

//         </div>

//         <div style={styles.rightHero}>
//           <motion.img
//             src={aboutHero}
//             alt="AutoVira"
//             style={styles.heroImage}
//             animate={{
//               y: [0, -15, 0]
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity
//             }}
//           />
//         </div>

//       </motion.div>

//       {/* MISSION & VISION */}
//       <motion.div
//         style={styles.sectionAlt}
//         initial={{ opacity: 0, x: -40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <h2 style={styles.sectionTitle}>Our Mission & Vision</h2>
//         <p style={styles.sectionText}>
//           Our mission is to design and manufacture high-quality vehicle bodies
//           that deliver safety, performance, and long-term value. We aim to be a
//           trusted manufacturing partner for government bodies, municipal
//           corporations, and private enterprises.
//         </p>
//         <p style={styles.sectionText}>
//           Our vision is to support smarter mobility and cleaner cities by
//           building vehicles that contribute to sustainable infrastructure and
//           efficient operations.
//         </p>
//       </motion.div>

//       {/* STATS */}
//       <motion.div
//         style={styles.statCard}
//         whileHover={{
//           y: -10,
//           scale: 1.03
//         }}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div style={styles.heroStats}>
//           <div style={styles.heroStat}>
//             <h2>1900+</h2>
//             <span>Vehicles</span>
//           </div>

//           <div style={styles.heroStat}>
//             <h2>10+</h2>
//             <span>Years</span>
//           </div>

//           <div style={styles.heroStat}>
//             <h2>300+</h2>
//             <span>Panchayats</span>
//           </div>
//         </div>
//       </motion.div>

//       {/* WHAT SETS US APART */}
//       <motion.div
//         style={styles.featureCard}
//         whileHover={{
//           y: -10,
//           borderColor: "#D4AF37"
//         }}
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <h2 style={styles.sectionTitle}>What Sets Us Apart</h2>

//         <div style={styles.features}>
//           <div style={styles.featureCard}>
//             <FaCheckCircle style={styles.featureIcon} />
//             <h4>Quality-Driven Manufacturing</h4>
//             <p>
//               Every vehicle body undergoes strict quality checks, structural
//               inspection, and performance testing before delivery.
//             </p>
//           </div>

//           <div style={styles.featureCard}>
//             <FaClock style={styles.featureIcon} />
//             <h4>On-Time Delivery</h4>
//             <p>
//               Streamlined planning, in-house fabrication, and skilled teams
//               ensure consistent and timely project execution.
//             </p>
//           </div>

//           <div style={styles.featureCard}>
//             <FaCogs style={styles.featureIcon} />
//             <h4>Custom Engineering</h4>
//             <p>
//               We design and build vehicle bodies based on specific operational
//               needs, load requirements, and usage environments.
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       {/* ENGINEERING PROCESS */}
//       <motion.div
//         style={styles.sectionAlt}
//         initial={{ opacity: 0, x: 40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <h2 style={styles.sectionTitle}>Engineering Excellence</h2>

//         <div style={styles.process}>
//           <img
//             src={aboutFactory}
//             alt="AutoVira Engineering Process"
//             style={styles.processImage}
//           />

//           <ul style={styles.processList}>
//             <li>MIG & spot welding for structural strength</li>
//             <li>Automated paint booths with corrosion protection</li>
//             <li>Hydraulic system testing and load validation</li>
//             <li>In-house fabrication and final quality inspection</li>
//           </ul>
//         </div>
//       </motion.div>

//       {/* CLOSING */}
//       <motion.div
//         style={styles.ctaBanner}
//         whileHover={{ scale: 1.02 }}
//       >
//         <h2>Built To Perform. Built To Last.</h2>

//         <p>
//           Delivering engineering excellence and durable
//           vehicle solutions across India.
//         </p>
//       </motion.div>

//       {/* timeline */}
//       <motion.div
//         style={styles.timeline}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//       >
//         <div style={styles.timelineLine}></div>

//         {[
//           { year: "2015", text: "Company Established" },
//           { year: "2020", text: "1000+ Vehicles Delivered" },
//           { year: "2025", text: "Expanded Across India" }
//         ].map((item) => (
//           <motion.div
//             key={item.year}
//             style={styles.timelineItem}
//             whileHover={{ scale: 1.05 }}
//           >
//             <div style={styles.timelineDot}></div>
//             <h3>{item.year}</h3>
//             <p>{item.text}</p>
//           </motion.div>
//         ))}
//       </motion.div>

//     </section>
//   );
// }
// const styles = {
//   container: {
//     background: "linear-gradient(180deg,#0A0A0A,#151515,#0A0A0A)",
//     padding: "120px 5%",
//     position: "relative",
//     overflow: "hidden"
//   },

//   goldGlow: {
//     position: "absolute",
//     width: 800,
//     height: 800,
//     borderRadius: "50%",
//     background: "radial-gradient(circle,#D4AF3720,transparent)",
//     top: -250,
//     right: -250,
//     filter: "blur(80px)"
//   },

//   goldGlow2: {
//     position: "absolute",
//     width: 600,
//     height: 600,
//     borderRadius: "50%",
//     background: "radial-gradient(circle,#D4AF3710,transparent)",
//     bottom: -200,
//     left: -200,
//     filter: "blur(80px)"
//   },
//   ctaBanner: {
//     marginTop: 120,
//     textAlign: "center",
//     padding: "80px 40px",
//     borderRadius: 30,
//     background: "linear-gradient(135deg,#D4AF37,#b89220)",
//     color: "#111",
//     fontWeight: "600"
//   },
//   hero: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: 60
//   },
//   leftHero: {
//     flex: 1,
//     minWidth: "320px"
//   },
//   rightHero: {
//     flex: 1,
//     display: "flex",
//     justifyContent: "center"
//   },
//   heroStats: {
//     display: "flex",
//     gap: 20,
//     flexWrap: "wrap",
//     marginTop: 40
//   },

//   heroStat: {
//     background: "rgba(255,255,255,.04)",
//     border: "1px solid rgba(212,175,55,.15)",
//     backdropFilter: "blur(15px)",
//     borderRadius: 20,
//     padding: 20,
//     minWidth: 140,
//     textAlign: "center"
//   },
//   badge: {
//     color: "#D4AF37",
//     letterSpacing: "4px"
//   },

//   heroTitle: {
//     color: "#fff",
//     fontSize: "clamp(40px,6vw,80px)",
//     lineHeight: "1.1",
//     margin: "20px 0"
//   },

//   heroText: {
//     color: "#BDBDBD",
//     lineHeight: "1.9",
//     fontSize: "18px"
//   },

//   heroImage: {
//     width: "100%",
//     maxWidth: 550
//   },
//   heroTextBlock: {
//     flex: 1
//   },







//   section: {
//     // marginBottom: 80,
//     textAlign: "center",
//     background: '#f7faff',
//   },

//   sectionAlt: {
//     background: "rgba(255,255,255,.03)",
//     border: "1px solid rgba(212,175,55,.15)",
//     backdropFilter: "blur(15px)",
//     borderRadius: 30,
//     padding: "60px 40px",
//     marginBottom: 100
//   },

//   sectionTitle: {
//     color: "#D4AF37",
//     fontSize: "clamp(30px,5vw,50px)",
//     marginBottom: "25px"
//   },
//   sectionText: {
//     maxWidth: 900,
//     margin: "0 auto",
//     fontSize: 16,
//     lineHeight: 1.7,
//     color: "#444"
//   },

//   stats: {
//     display: "grid",
//     gridTemplateColumns:
//       "repeat(auto-fit,minmax(280px,1fr))",
//     gap: "30px",
//     marginBottom: "120px",
//     flexWrap: "wrap"
//   },

//   statCard: {
//     background: "rgba(255,255,255,.04)",
//     border: "1px solid rgba(212,175,55,.15)",
//     backdropFilter: "blur(15px)",
//     borderRadius: 25,
//     padding: 35,
//     textAlign: "center",
//     transition: ".4s"
//   },

//   statIcon: {
//     color: "#D4AF37",
//     fontSize: "45px"
//   },

//   features: {
//     display: "grid",
//     gridTemplateColumns:
//       "repeat(auto-fit,minmax(280px,1fr))",
//     gap: 30
//   },

//   featureCard: {
//     background: "rgba(255,255,255,.04)",
//     border: "1px solid rgba(212,175,55,.15)",
//     backdropFilter: "blur(15px)",
//     borderRadius: 24,
//     padding: 35,
//     color: "#fff",
//     transition: ".4s"
//   },
//   featureIcon: {
//     color: "#D4AF37",
//     fontSize: "40px"
//   },

//   process: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
//     gap: 50,
//     alignItems: "center"
//   },

//   processImage: {
//     width: "100%",
//     borderRadius: 30,
//     border: "2px solid rgba(212,175,55,.2)",
//     boxShadow: "0 30px 80px rgba(0,0,0,.5)"
//   },

//   processList: {
//     fontSize: 16,
//     lineHeight: 1.7,
//     color: "#444"
//   },
//   timeline: {
//     display: "flex",
//     justifyContent: "space-between",
//     flexWrap: "wrap",
//     marginBottom: "120px",
//     position: "relative"
//   },

//   timelineLine: {
//     position: "absolute",
//     top: "20px",
//     left: 0,
//     right: 0,
//     height: "2px",
//     background: "#D4AF37"
//   },

//   timelineItem: {
//     textAlign: "center",
//     color: "#fff",
//     position: "relative",
//     zIndex: 2
//   },

//   timelineDot: {
//     width: "20px",
//     height: "20px",
//     background: "#D4AF37",
//     borderRadius: "50%",
//     margin: "0 auto 20px"
//   },
// };


import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaClock,
  FaCogs
} from "react-icons/fa";

import aboutHero from "../images/logo.jpg";
import aboutFactory from "../images/img1.jpeg";

export default function AboutUs() {
  return (
    <section style={styles.container}>
      {/* Decorative Theme Elements */}
      <div style={styles.goldGlow}></div>
      <div style={styles.goldGlow2}></div>

      {/* 1. HERO BLOCK */}
      <motion.div
        style={styles.hero}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div style={styles.leftHero}>
          <span style={styles.badge}>AUTO VIRA</span>
          <h1 style={styles.heroTitle}>
            Engineering Mobility <br />
            For The Future
          </h1>
          <p style={styles.heroText}>
            AutoVira manufactures durable, application-specific vehicle bodies
            for municipal, industrial, and commercial applications across India.
          </p>

          {/* Consolidated Single Instance of Stats Grid */}
          <div style={styles.heroStats}>
            <div style={styles.heroStat}>
              <h2 style={styles.statNumber}>1900+</h2>
              <span style={styles.statLabel}>Vehicles</span>
            </div>
            <div style={styles.heroStat}>
              <h2 style={styles.statNumber}>10+</h2>
              <span style={styles.statLabel}>Years</span>
            </div>
            <div style={styles.heroStat}>
              <h2 style={styles.statNumber}>300+</h2>
              <span style={styles.statLabel}>Panchayats</span>
            </div>
          </div>
        </div>

        <div style={styles.rightHero}>
          <motion.img
            src={aboutHero}
            alt="AutoVira Corporate Branding"
            style={styles.heroImage}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* 2. MISSION & VISION BLOCK */}
      <motion.div
        style={styles.sectionAlt}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 style={styles.sectionTitle}>Our Mission & Vision</h2>
        <p style={styles.sectionText}>
          Our mission is to design and manufacture high-quality vehicle bodies
          that deliver safety, performance, and long-term value. We aim to be a
          trusted manufacturing partner for government bodies, municipal
          corporations, and private enterprises.
        </p>
        <p style={styles.sectionText}>
          Our vision is to support smarter mobility and cleaner cities by
          building vehicles that contribute to sustainable infrastructure and
          efficient operations.
        </p>
      </motion.div>

      {/* 3. CORE BENEFITS BLOCK */}
      <div style={styles.featuresSectionContainer}>
        <h2 style={{ ...styles.sectionTitle, textAlign: "center", marginBottom: "50px" }}>
          What Sets Us Apart
        </h2>
        <div style={styles.featuresGrid}>
          <motion.div
            style={styles.featureCard}
            whileHover={{ y: -8, borderColor: "#D4AF37" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaCheckCircle style={styles.featureIcon} />
            <h4 style={styles.featureHeading}>Quality-Driven</h4>
            <p style={styles.featureText}>
              Every vehicle body undergoes strict quality checks, structural
              inspection, and performance testing before delivery.
            </p>
          </motion.div>

          <motion.div
            style={styles.featureCard}
            whileHover={{ y: -8, borderColor: "#D4AF37" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaClock style={styles.featureIcon} />
            <h4 style={styles.featureHeading}>On-Time Delivery</h4>
            <p style={styles.featureText}>
              Streamlined planning, in-house fabrication, and skilled teams
              ensure consistent and timely project execution.
            </p>
          </motion.div>

          <motion.div
            style={styles.featureCard}
            whileHover={{ y: -8, borderColor: "#D4AF37" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaCogs style={styles.featureIcon} />
            <h4 style={styles.featureHeading}>Custom Engineering</h4>
            <p style={styles.featureText}>
              We design and build vehicle bodies based on specific operational
              needs, load requirements, and usage environments.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 4. INDUSTRIAL PROCESS BLOCK */}
      <motion.div
        style={styles.sectionAlt}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 style={styles.sectionTitle}>Engineering Excellence</h2>
        <div style={styles.processGrid}>
          <img
            src={aboutFactory}
            alt="AutoVira Engineering Process"
            style={styles.processImage}
          />
          <ul style={styles.processList}>
            <li style={styles.processItem}>MIG & spot welding for structural strength</li>
            <li style={styles.processItem}>Automated paint booths with corrosion protection</li>
            <li style={styles.processItem}>Hydraulic system testing and load validation</li>
            <li style={styles.processItem}>In-house fabrication and final quality inspection</li>
          </ul>
        </div>
      </motion.div>

      {/* 5. DEVELOPMENT TIMELINE BLOCK */}
      <motion.div
        style={styles.timelineSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 style={{ ...styles.sectionTitle, textAlign: "center", marginBottom: "60px" }}>
          Our Journey
        </h2>
        <div style={styles.timelineContainer}>
          <div style={styles.timelineLine}></div>
          {[
            { year: "2015", text: "Company Established" },
            { year: "2020", text: "1000+ Vehicles Delivered" },
            { year: "2025", text: "Expanded Across India" }
          ].map((item) => (
            <motion.div
              key={item.year}
              style={styles.timelineItem}
              whileHover={{ scale: 1.05 }}
            >
              <div style={styles.timelineDot}></div>
              <h3 style={styles.timelineYear}>{item.year}</h3>
              <p style={styles.timelineText}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 6. CALL TO ACTION BLOCK */}
      <motion.div
        style={styles.ctaBanner}
        whileHover={{ scale: 1.01 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 style={styles.ctaHeading}>Built To Perform. Built To Last.</h2>
        <p style={styles.ctaText}>
          Delivering engineering excellence and durable vehicle solutions across India.
        </p>
      </motion.div>
    </section>
  );
}

const styles = {
  container: {
    background: "linear-gradient(180deg, #0A0A0A, #151515, #0A0A0A)",
    padding: "120px 8%",
    position: "relative",
    overflow: "hidden",
    boxSizing: "border-box"
  },
  goldGlow: {
    position: "absolute",
    width: "800px",
    height: "800px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(212,175,55,0.08), transparent)",
    top: "-250px",
    right: "-250px",
    filter: "blur(80px)",
    pointerEvents: "none"
  },
  goldGlow2: {
    position: "absolute",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(212,175,55,0.05), transparent)",
    bottom: "-200px",
    left: "-200px",
    filter: "blur(80px)",
    pointerEvents: "none"
  },
  hero: {
    display: "flex",
    flexWrap: "wrap",
    gap: "60px",
    alignItems: "center",
    marginBottom: "100px"
  },
  leftHero: {
    flex: 1,
    minWidth: "300px"
  },
  rightHero: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "300px"
  },
  badge: {
    background: "rgba(212, 175, 55, 0.1)",
    border: "1px solid rgba(212, 175, 55, 0.3)",
    color: "#D4AF37",
    padding: "6px 16px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "2px",
    display: "inline-block",
    marginBottom: "20px"
  },
  heroTitle: {
    fontSize: "clamp(32px, 4vw, 52px)",
    color: "#FFFFFF",
    fontWeight: "800",
    lineHeight: "1.2",
    margin: "0 0 24px 0"
  },
  heroText: {
    fontSize: "16px",
    color: "#A0AEC0",
    lineHeight: "1.7",
    margin: "0 0 40px 0",
    maxWidth: "540px"
  },
  heroImage: {
    width: "100%",
    maxWidth: "450px",
    height: "auto",
    borderRadius: "20px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(212,175,55,0.05)"
  },
  heroStats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
    gap: "20px",
    width: "100%"
  },
  heroStat: {
    background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(212, 175, 55, 0.15)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    padding: "24px 20px",
    textAlign: "center"
  },
  statNumber: {
    fontSize: "28px",
    fontWeight: "800",
    color: "#D4AF37",
    margin: "0 0 6px 0"
  },
  statLabel: {
    fontSize: "13px",
    color: "#A0AEC0",
    fontWeight: "500"
  },
  sectionAlt: {
    marginBottom: "100px",
    background: "rgba(255, 255, 255, 0.01)", border: "1px solid rgba(255, 255, 255, 0.04)", padding: "50px 40px", borderRadius: "24px", backdropFilter: "blur(5px)"
  },
  sectionTitle: { fontSize: "32px", color: "#FFFFFF", fontWeight: "700", margin: "0 0 24px 0" },
  sectionText: { fontSize: "16px", color: "#CBD5E0", lineHeight: "1.7", margin: "0 0 16px 0" },
  featuresSectionContainer: { marginBottom: "100px" },
  featuresGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" },
  featureCard: { background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)", borderRadius: "20px", padding: "40px 30px", transition: "box-shadow 0.3s ease" },
  featureIcon: { fontSize: "36px", color: "#D4AF37", marginBottom: "20px", display: "block" },
  featureHeading: { fontSize: "20px", color: "#FFFFFF", fontWeight: "600", margin: "0 0 12px 0" },
  featureText: { fontSize: "14px", color: "#A0AEC0", lineHeight: "1.6", margin: 0 },
  processGrid: { display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center", marginTop: "30px" },
  processImage: { flex: 1, minWidth: "280px", maxWidth: "500px", height: "280px", objectFit: "cover", borderRadius: "16px", boxShadow: "0 12px 24px rgba(0,0,0,0.4)" },
  processList: { flex: 1.2, minWidth: "280px", listStyleType: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" },
  processItem: {
    fontSize: "16px",
    color: "#CBD5E0",
    position: "relative",
    paddingLeft: "28px",
    lineHeight: "1.5",
    display: "flex",
    alignItems: "center",
    backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://w3.org viewBox=%220 0 24 24%22 fill=%22%23D4AF37%22%3E%3Cpath d=%22M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z%22/%3E%3C/svg%3E')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center",
    backgroundSize: "18px 18px",
    minHeight: "24px"
  },
  timelineSection: {
    marginBottom: "120px"
  },
  timelineContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "40px",
    padding: "20px 0"
  },
  timelineLine: {
    position: "absolute",
    top: "30px",
    left: "0",
    right: "0",
    height: "2px",
    background: "linear-gradient(90deg, rgba(212,175,55,0.1), rgba(212,175,55,0.6), rgba(212,175,55,0.1))",
    zIndex: 1,
    display: "block"
  },
  timelineItem: {
    flex: 1,
    minWidth: "200px",
    background: "rgba(10, 10, 10, 0.8)",
    border: "1px solid rgba(255, 255, 255, 0.04)",
    borderRadius: "16px",
    padding: "24px",
    textAlign: "center",
    zIndex: 2,
    position: "relative"
  },
  timelineDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: "#D4AF37",
    boxShadow: "0 0 10px #D4AF37",
    margin: "0 auto 20px auto"
  },
  timelineYear: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#D4AF37",
    margin: "0 0 8px 0"
  },
  timelineText: {
    fontSize: "14px",
    color: "#A0AEC0",
    margin: 0
  },
  ctaBanner: {
    textAlign: "center",
    padding: "80px 40px",
    borderRadius: "30px",
    background: "linear-gradient(135deg, #D4AF37, #B89220)",
    color: "#0A0A0A",
    boxShadow: "0 15px 35px rgba(212,175,55,0.15)"
  },
  ctaHeading: {
    fontSize: "32px",
    fontWeight: "800",
    margin: "0 0 12px 0",
    letterSpacing: "-0.5px"
  },
  ctaText: {
    fontSize: "16px",
    fontWeight: "500",
    margin: 0,
    opacity: 0.9
  }
}; // Clean object closing bracket
