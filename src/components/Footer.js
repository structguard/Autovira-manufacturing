// import { motion } from "framer-motion";
// import {
//     FaFacebookF,
//     FaLinkedinIn,
//     FaInstagram,
//     FaYoutube,

// } from "react-icons/fa";
// import { MdAddIcCall } from "react-icons/md";
// import { MdEmail } from "react-icons/md";
// import logo from "../images/logobg.png"; // your AutoVira logo

// export default function Footer() {
//     const currentYear = new Date().getFullYear();

//     return (
//         <footer style={styles.footer}>

//             {/* TOP SECTION */}
//             <motion.div
//                 style={styles.top}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//             >

//                 {/* BRAND */}
//                 <div style={styles.brand}>
//                     <img src={logo} alt="AutoVira Logo" style={styles.logo} />
//                     <h2 style={styles.name}>AutoVira</h2>
//                     <p style={styles.subtitle}>
//                         Precision Vehicle Manufacturing for a Sustainable Future
//                     </p>

//                     {/* SOCIAL ICONS */}
//                     <div style={styles.socials}>
//                         <motion.a href="#" style={styles.socialIcon} whileHover={{ backgroundColor: "#00c6ff", color: "#000", scale: 1.1 }} >  <FaFacebookF /> </motion.a>
//                         <motion.a href="#" style={styles.socialIcon} whileHover={{ backgroundColor: "#00c6ff", color: "#000", scale: 1.1 }}><FaLinkedinIn /></motion.a>
//                         <motion.a href="#" style={styles.socialIcon} whileHover={{ backgroundColor: "#00c6ff", color: "#000", scale: 1.1 }}><FaInstagram /></motion.a>
//                         <motion.a href="#" style={styles.socialIcon} whileHover={{ backgroundColor: "#00c6ff", color: "#000", scale: 1.1 }}><FaYoutube /></motion.a>
//                     </div>
//                 </div>





//                 {/* QUICK LINKS */}
//                 <div style={styles.links}>
//                     <h4 style={styles.linkTitle}>Quick Links</h4>
//                     <motion.a   href="#home"  style={styles.link} whileHover={{ color: "#00c6ff", x: 6 ,textDecoration: "underline",}}>Home </motion.a>
//                     <motion.a href="#whatwedo" style={styles.link} whileHover={{ color: "#00c6ff", x: 6 ,textDecoration: "underline",}}>What We Do</motion.a>
//                     <motion.a href="#products" style={styles.link} whileHover={{ color: "#00c6ff", x: 6 ,textDecoration: "underline",}}>Our Products</motion.a>
//                     <motion.a href="#about" style={styles.link} whileHover={{ color: "#00c6ff", x: 6 ,textDecoration: "underline",}}>About Us </motion.a>
//                     <motion.a href="#contact" style={styles.link} whileHover={{ color: "#00c6ff", x: 6 ,textDecoration: "underline",}}>Contact</motion.a>
//                 </div>

//                 <div style={styles.links}>
//                     <h4 style={styles.linkTitle}>Contact Us</h4>
//                     <motion.a
//                         href="tel:+919225232463"
//                         style={{ ...styles.link, display: "flex", gap: 8, alignItems: "center" }}
//                         whileHover={{ color: "#00c6ff", x: 6 }}
//                     >
//                         <MdAddIcCall />
//                         +91 92252 32463
//                     </motion.a>

//                     <motion.a href="mailto:shrenikgandhi@autovira.com" style={{...styles.link, display: "flex", gap: 8, alignItems: "center"}}  whileHover={{ color: "#00c6ff", x: 6 }}> <MdEmail style={{}} /> shrenikgandhi@autovira.com </motion.a>
//                 </div>
//             </motion.div>

//             {/* BOTTOM BAR */}
//             <motion.div
//                 style={styles.bottom}
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//             >
//                 <div style={styles.bottomContent}>
//                     <span>
//                         © {currentYear} <strong>AutoVira</strong>. All rights reserved.
//                     </span>


//                 </div>
//             </motion.div>

//         </footer>
//     );
// }
// const styles = {
//     footer: {
//         background: "linear-gradient(135deg, #0c1a2b, #09121f)",
//         color: "#f7faff",
//         paddingTop: 60,
//         fontFamily: "Arial, sans-serif"
//     },

//     top: {
//         display: "flex",
//         justifyContent: "space-between",
//         gap: 60,
//         padding: "0 80px 40px",
//         flexWrap: "wrap"
//     },

//     brand: {
//         maxWidth: 400
//     },

//     logo: {
//         width: 80,
//         marginBottom: 12
//     },

//     name: {
//         fontSize: 28,
//         fontWeight: 700,
//         marginBottom: 6
//     },

//     subtitle: {
//         fontSize: 14,
//         lineHeight: 1.6,
//         color: "#cbd5e1",
//         marginBottom: 18
//     },

//     socials: {
//         display: "flex",
//         gap: 12
//     },

//     socialIcon: {
//         width: 38,
//         height: 38,
//         borderRadius: "50%",
//         background: "#132238",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "#fff",
//         textDecoration: "none",
//         transition: "all 0.3s ease",
//         fontSize: 16,
//         cursor: "pointer",
//     },

//     links: {
//         minWidth: 180
//     },

//     linkTitle: {
//         fontSize: 18,
//         fontWeight: 600,
//         marginBottom: 16
//     },

//     link: {
//         display: "block",
//         color: "#cbd5e1",
//         textDecoration: "none",
//         marginBottom: 10,
//         fontSize: 14,
//         transition: "color 0.3s ease"
//     },

//     bottom: {
//         borderTop: "1px solid rgba(255,255,255,0.1)",
//         padding: "16px 40px",
//         fontSize: 13,
//         color: "#94a3b8",
//         textAlign: "center"
//     },

//     bottomContent: {
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: 10
//     },

//     separator: {
//         opacity: 0.4
//     },

//     bottomLink: {
//         color: "#cbd5e1",
//         textDecoration: "none",
//         fontWeight: 500
//     },

// };


import React from "react";
import { motion } from "framer-motion";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import { MdAddIcCall, MdEmail } from "react-icons/md";
import logo from "../images/logobg.png"; // AutoVira logo

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={styles.footer}>
            {/* Dynamic Ambient Theme Underlays */}
            <div style={styles.goldGlowUnderlay}></div>

            {/* TOP SECTION */}
            <motion.div
                style={styles.top}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* BRAND */}
                <div style={styles.brand}>
                    <div style={styles.logoGroup}>
                        <img src={logo} alt="AutoVira Logo" style={styles.logo} />
                        <h2 style={styles.name}>AutoVira</h2>
                    </div>
                    <p style={styles.subtitle}>
                        Durable, application-specific vehicle bodies for municipal, industrial, and commercial operations across India.
                    </p>

                    {/* SOCIAL ICONS */}
                    <div style={styles.socials}>
                        {[
                            { icon: <FaFacebookF />, url: "#" },
                            { icon: <FaLinkedinIn />, url: "#" },
                            { icon: <FaInstagram />, url: "#" },
                            { icon: <FaYoutube />, url: "#" }
                        ].map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.url}
                                style={styles.socialIcon}
                                whileHover={{ backgroundColor: "#D4AF37", color: "#0A0A0A", scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div style={styles.links}>
                    <h4 style={styles.linkTitle}>Quick Links</h4>
                    {[
                        { label: "Home", target: "#home" },
                        { label: "What We Do", target: "#whatwedo" },
                        { label: "Our Products", target: "#products" },
                        { label: "About Us", target: "#about" },
                        { label: "Contact", target: "#contact" }
                    ].map((item, idx) => (
                        <motion.a
                            key={idx}
                            href={item.target}
                            style={styles.link}
                            whileHover={{ color: "#D4AF37", x: 6 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {item.label}
                        </motion.a>
                    ))}
                </div>

                {/* CONTACT MATRICES */}
                <div style={styles.links}>
                    <h4 style={styles.linkTitle}>Plant Desk</h4>

                    <motion.a
                        href="tel:+919225232463"
                        style={{ ...styles.link, display: "flex", gap: 10, alignItems: "center" }}
                        whileHover={{ color: "#D4AF37", x: 6 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <MdAddIcCall style={styles.contactIcon} />
                        +91 92252 32463
                    </motion.a>

                    <motion.a
                        href="mailto:shrenikgandhi@autovira.com"
                        style={{ ...styles.link, display: "flex", gap: 10, alignItems: "center", whiteSpace: "normal", wordBreak: "break-all" }}
                        whileHover={{ color: "#D4AF37", x: 6 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <MdEmail style={styles.contactIcon} />
                        shrenikgandhi@autovira.com
                    </motion.a>
                </div>
            </motion.div>

            {/* BOTTOM BAR */}
            <motion.div
                style={styles.bottom}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <div style={styles.bottomContent}>
                    <span>
                        © {currentYear} <strong style={{ color: "#D4AF37" }}>AutoVira India Ltd.</strong> Heavy Fabrication Systems Division. All rights reserved.
                    </span>
                </div>
            </motion.div>
        </footer>
    );
}

const styles = {
    footer: {
        background: "linear-gradient(180deg, #0A0A0A, #121212)",
        color: "#FFFFFF",
        paddingTop: "80px",
        fontFamily: "'Segoe UI', Roboto, sans-serif",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.04)"
    },
    goldGlowUnderlay: {
        position: "absolute",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,175,55,0.04), transparent)",
        bottom: "-250px",
        left: "5%",
        filter: "blur(60px)",
        pointerEvents: "none",
        zIndex: 1
    },
    top: {
        display: "flex",
        justifyContent: "space-between",
        gap: "50px",
        padding: "0 8% 50px",
        flexWrap: "wrap",
        position: "relative",
        zIndex: 2
    },
    brand: {
        flex: "1 1 320px",
        maxWidth: "450px"
    },
    logoGroup: {
        display: "flex",
        alignItems: "center",
        gap: "14px",
        marginBottom: "16px"
    },
    logo: {
        height: "45px",
        width: "auto",
        objectFit: "contain"
    },
    name: {
        fontSize: "26px",
        fontWeight: "800",
        color: "#FFFFFF",
        margin: 0,
        letterSpacing: "-0.5px"
    },
    subtitle: {
        fontSize: "14px",
        lineHeight: "1.6",
        color: "#A0AEC0",
        margin: "0 0 24px 0"
    },
    socials: {
        display: "flex",
        gap: "12px"
    },
    socialIcon: {
        width: "40px",
        height: "40px",
        borderRadius: "12px",
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#CBD5E0",
        textDecoration: "none",
        fontSize: "16px",
        cursor: "pointer",
        transition: "border-color 0.3s ease"
    },
    links: {
        flex: "1 1 180px",
        display: "flex",
        flexDirection: "column"
    },
    linkTitle: {
        fontSize: "16px",
        fontWeight: "700",
        color: "#FFFFFF",
        textTransform: "uppercase",
        letterSpacing: "1px",
        marginBottom: "20px",
        position: "relative"
    },
    link: {
        display: "inline-block",
        color: "#A0AEC0",
        textDecoration: "none",
        marginBottom: "12px",
        fontSize: "14px",
        width: "fit-content"
    },
    contactIcon: {
        fontSize: "16px",
        color: "#D4AF37",
        flexShrink: 0
    },
    bottom: {
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        padding: "24px 40px",
        fontSize: "13px",
        color: "#718096",
        textAlign: "center",
        position: "relative",
        zIndex: 2,
        background: "rgba(0, 0, 0, 0.1)"
    },
    bottomContent: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px"
    }
};
