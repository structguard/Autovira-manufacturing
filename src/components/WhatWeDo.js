// import { motion } from "framer-motion";
// import {
//   FaCogs,
//   FaTools,
//   FaTruckMoving,
//   FaPaintRoller,
//   FaIndustry,
//   FaCheckCircle
// } from "react-icons/fa";
// import wwdmimg from '../images/maingrid.png'

// export default function WhatWeDo() {
//   const features = [
//     {
//       id: "w1",
//       title: "Precision Manufacturing",
//       desc: "Certified processes & professional-grade equipment ensure vehicle bodies built with unmatched quality.",
//       icon: <FaCogs />
//     },
//     {
//       id: "w2",
//       title: "Welding & Fabrication",
//       desc: "MIG & spot welding technology with high-tensile steel ensures strength and durability.",
//       icon: <FaTools />
//     },
//     {
//       id: "w3",
//       title: "Custom Vehicle Bodies",
//       desc: "Tailor-made body designs for garbage tippers, delivery vans, hydraulic vehicles and more.",
//       icon: <FaTruckMoving />
//     },
//     {
//       id: "w4",
//       title: "Paint & Coating Solutions",
//       desc: "Automated paint booth with rust-proof coating for long-lasting protection.",
//       icon: <FaPaintRoller />
//     },
//     {
//       id: "w5",
//       title: "Hydraulic & Mechanical Systems",
//       desc: "High-performance hydraulics with safety locks suited to specific operational needs.",
//       icon: <FaIndustry />
//     },
//     {
//       id: "w6",
//       title: "Quality Checks & Testing",
//       desc: "Rigorous inspection and load-bearing tests before delivery to ensure optimal performance.",
//       icon: <FaCheckCircle />
//     }
//   ];

//   return (
//     <section style={styles.container}>

//       {/* SECTION TITLE */}
//       <motion.h2
//         style={styles.title}
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         What We Do
//       </motion.h2>

//       {/* MAIN CONTENT */}
//       <div style={styles.content}>

//         {/* LEFT IMAGE */}
//         <motion.div
//           style={styles.imageBox}
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <img
//             src={wwdmimg}
//             alt="Manufacturing Facility"
//             style={styles.image}
//           />
//         </motion.div>

//         {/* RIGHT FEATURES */}
//         <div style={styles.grid}>
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.id}
//               style={styles.card}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.15 }}
//               whileHover={{
//                 scale: 1.05
//               }}
//             >
//               {/* ICON */}
//               <motion.div
//                 style={styles.iconBox}
//                 whileHover={{ rotate: 10 }}
//               >
//                 {feature.icon}
//               </motion.div>

//               <h3 style={styles.cardTitle}>{feature.title}</h3>
//               <p style={styles.cardDesc}>{feature.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// const styles = {
//   container: {
//     padding: "80px 60px",
//     background: "#f7faff"
//   },

//   title: {
//     fontSize: 34,
//     fontWeight: 700,
//     textAlign: "center",
//     marginBottom: 60
//   },

//   content: {
//     display: "flex",
//     gap: 50,
//     alignItems: "center"
//   },

//   imageBox: {
//     flex: 1
//   },

//   image: {
//     width: "100%",
//     height: 750,
//     objectFit: "contain",
//     borderRadius: 14,
//     boxShadow: "0 20px 40px rgba(0,0,0,0.25)"
//   },

//   grid: {
//     flex: 1.2,
//     display: "grid",
//     gridTemplateColumns: "repeat(2, 1fr)",
//     gap: 24
//   },

//   card: {
//     background: "#fff",
//     borderRadius: 10,
//     padding: 24,
//     boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
//     cursor: "pointer",
//     transition: "all 0.3s ease"
//   },

//   iconBox: {
//     fontSize: 34,
//     color: "#0c3c78",
//     marginBottom: 14,
//     transition: "color 0.3s ease"
//   },

//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 600,
//     marginBottom: 8
//   },

//   cardDesc: {
//     fontSize: 14,
//     color: "#555",
//     lineHeight: 1.6
//   }
// };

import { motion } from "framer-motion";
import {
  FaCogs,
  FaTools,
  FaTruckMoving,
  FaPaintRoller,
  FaIndustry,
  FaCheckCircle
} from "react-icons/fa";

import wwdmimg from "../images/maingrid.png";

export default function WhatWeDo() {
  const isMobile = window.innerWidth < 768;

  const features = [
    {
      title: "Precision Manufacturing",
      desc: "Certified manufacturing processes and advanced equipment ensure unmatched product quality.",
      icon: <FaCogs />
    },
    {
      title: "Welding & Fabrication",
      desc: "MIG & spot welding technologies deliver superior structural strength and reliability.",
      icon: <FaTools />
    },
    {
      title: "Custom Vehicle Bodies",
      desc: "Tailor-made solutions for municipal, industrial and commercial applications.",
      icon: <FaTruckMoving />
    },
    {
      title: "Paint & Coating",
      desc: "Advanced paint booths with anti-corrosion protection for extended durability.",
      icon: <FaPaintRoller />
    },
    {
      title: "Hydraulic Systems",
      desc: "High-performance hydraulic solutions designed for operational efficiency.",
      icon: <FaIndustry />
    },
    {
      title: "Quality Testing",
      desc: "Rigorous inspections and load testing ensure dependable performance.",
      icon: <FaCheckCircle />
    }
  ];

  return (
    <section style={styles.container}>
      <div style={styles.goldGlow}></div>

      {/* HEADER */}

      <motion.div
        style={styles.titleWrap}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span style={styles.subtitle}>
          AUTO VIRA
        </span>

        <h2 style={styles.title}>
          What We Do
        </h2>

        <div style={styles.line}></div>

        <p style={styles.topDesc}>
          Delivering engineering excellence through advanced manufacturing,
          precision fabrication, and innovative vehicle body solutions.
        </p>
      </motion.div>

      {/* IMAGE */}

      {/* <motion.div
        style={styles.factoryImage}
        animate={{
          y: [0, -12, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity
        }}
      >
        <img
          src={wwdmimg}
          alt="Manufacturing"
          style={styles.image}
        />
      </motion.div> */}

      {/* TIMELINE */}

      <div style={styles.timeline}>
        {!isMobile && (
          <div style={styles.centerLine}></div>
        )}

        {features.map((item, index) => (
          <motion.div
            key={index}
            style={{
              ...styles.row,
              flexDirection: isMobile
                ? "column"
                : index % 2 === 0
                  ? "row"
                  : "row-reverse"
            }}
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}
            viewport={{ once: true }}
          >
            <motion.div
              style={styles.contentCard}
              whileHover={{
                y: -10,
                borderColor: "#D4AF37"
              }}
            >
              <motion.div
                style={styles.iconBox}
                whileHover={{
                  rotate: 15,
                  scale: 1.1
                }}
              >
                {item.icon}
              </motion.div>

              <h3 style={styles.cardTitle}>
                {item.title}
              </h3>

              <p style={styles.cardDesc}>
                {item.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    position: "relative",
    padding: "120px 5%",
    background:
      "linear-gradient(180deg,#0D0D0D,#161616)",
    overflow: "hidden"
  },

  goldGlow: {
    position: "absolute",
    width: "900px",
    height: "900px",
    background:
      "radial-gradient(circle,#D4AF3720,transparent)",
    top: "-300px",
    right: "-300px",
    filter: "blur(80px)"
  },

  titleWrap: {
    textAlign: "center",
    marginBottom: "70px",
    position: "relative",
    zIndex: 2
  },

  subtitle: {
    color: "#D4AF37",
    letterSpacing: "4px",
    fontSize: "14px",
    fontWeight: "600"
  },

  title: {
    fontSize: "clamp(36px,5vw,60px)",
    color: "#fff",
    marginTop: "15px",
    marginBottom: "15px"
  },

  line: {
    width: "120px",
    height: "3px",
    background: "#D4AF37",
    margin: "20px auto"
  },

  topDesc: {
    color: "#BDBDBD",
    maxWidth: "700px",
    margin: "auto",
    lineHeight: "1.8"
  },

  factoryImage: {
    maxWidth: "1100px",
    margin: "0 auto 100px auto",
    position: "relative",
    zIndex: 2
  },

  image: {
    width: "100%",
    borderRadius: "25px",
    border: "2px solid rgba(212,175,55,.3)",
    boxShadow:
      "0 30px 80px rgba(0,0,0,.6)"
  },

  timeline: {
    position: "relative",
    maxWidth: "1400px",
    margin: "0 auto",
    zIndex: 2
  },

  centerLine: {
    position: "absolute",
    left: "50%",
    top: 0,
    width: "3px",
    height: "100%",
    background: "#D4AF37",
    transform: "translateX(-50%)"
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "50px",
    gap: "40px",
    alignItems: "center"
  },

  contentCard: {
    width: "100%",
    maxWidth: "600px",
    background:
      "rgba(255,255,255,.04)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(212,175,55,.15)",
    borderRadius: "24px",
    padding: "35px",
    color: "#fff",
    transition: "0.4s"
  },

  iconBox: {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    background: "#D4AF37",
    color: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    marginBottom: "20px"
  },

  cardTitle: {
    fontSize: "22px",
    marginBottom: "12px",
    fontWeight: "700"
  },

  cardDesc: {
    color: "#C7C7C7",
    lineHeight: "1.8",
    fontSize: "15px"
  }
};