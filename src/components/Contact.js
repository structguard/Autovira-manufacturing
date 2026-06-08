// import { motion } from "framer-motion";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// export default function ContactUs() {
//     return (
//         <section style={styles.container}>

//             {/* TITLE */}
//             <motion.h2
//                 style={styles.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 Contact Us
//             </motion.h2>

//             <div style={styles.content}>

//                 {/* CONTACT DETAILS */}
//                 <motion.div
//                     style={styles.details}
//                     initial={{ opacity: 0, x: -30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6 }}
//                 >

//                     {/* PHONE */}
//                     <div style={styles.detailBox}>
//                         <FaPhoneAlt style={styles.icon} />
//                         <div>
//                             <p style={styles.detailLabel}>Phone</p>
//                             <a href="tel:+919225232463" style={styles.link}>
//                                 +91 92252 32463
//                             </a>
//                         </div>
//                     </div>

//                     {/* EMAIL */}
//                     <div style={styles.detailBox}>
//                         <FaEnvelope style={styles.icon} />
//                         <div>
//                             <p style={styles.detailLabel}>Email</p>
//                             <a
//                                 href="mailto:shrenikgandhi@pvcorp.co.in"
//                                 style={styles.link}
//                             >
//                                 shrenikgandhi@pvcorp.co.in
//                             </a>
//                             <br />
//                             <a
//                                 href="mailto:shrenikgandhi@autovira.com"
//                                 style={styles.link}
//                             >
//                                 shrenikgandhi@autovira.com
//                             </a>
//                         </div>
//                     </div>

//                     {/* ADDRESS */}
//                     <div style={styles.detailBox}>
//                         <FaMapMarkerAlt style={styles.icon} />
//                         <div>
//                             <p style={styles.detailLabel}>Factory Address</p>
//                             <a
//                                 href="https://www.google.com/maps/search/?api=1&query=Katraria+Compound+Pisoli+Pune"
//                                 target="_blank"
//                                 rel="noreferrer"
//                                 style={styles.link}
//                             >
//                                 Katraria Compound, Jagdamb Bhavan Road, Pisoli, Pune – 412308
//                             </a>

//                             <p style={{ ...styles.detailLabel, marginTop: 10 }}>
//                                 Corporate Office
//                             </p>
//                             <a
//                                 href="https://www.google.com/maps/search/?api=1&query=Platinum+9+Baner+Pune"
//                                 target="_blank"
//                                 rel="noreferrer"
//                                 style={styles.link}
//                             >
//                                 407, 4th Floor, Platinum 9, Baner, Pune – 411045
//                             </a>
//                         </div>
//                     </div>

//                 </motion.div>

//                 {/* CONTACT FORM */}
//                 <motion.form
//                     style={styles.form}
//                     initial={{ opacity: 0, x: 30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <input placeholder="Your Name" style={styles.input} />
//                     <input placeholder="Your Email" style={styles.input} />
//                     <input placeholder="Your Phone" style={styles.input} />
//                     <textarea placeholder="Message" style={styles.textarea} />
//                     <button style={styles.submitBtn}>Send Message</button>
//                 </motion.form>

//             </div>

//             {/* MAP */}
//             <motion.div
//                 style={styles.mapWrapper}
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <iframe
//                     title="AutoVira Location"
//                     style={styles.map}
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.782542487!2d73.9106197!3d18.44818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea498a22a76f%3A0x70ae45c2b145c1c8!2sKatariya%20%26%20Sons!5e0!3m2!1sen!2sin!4v1770191757192!5m2!1sen!2sin"
//                 />
//             </motion.div>

//         </section>
//     );
// }

// const styles = {
//     container: {
//         padding: "80px 60px",
//         background: "#f7faff",
//         fontFamily: "Arial, sans-serif"
//     },

//     title: {
//         fontSize: 32,
//         fontWeight: 700,
//         textAlign: "center",
//         marginBottom: 40,
//         color: "#0c3c78"
//     },

//     content: {
//         display: "flex",
//         gap: 40,
//         flexWrap: "wrap",
//         justifyContent: "space-between"
//     },

//     details: {
//         flex: 1,
//         maxWidth: "45%",
//         display: "flex",
//         flexDirection: "column",
//         gap: 24
//     },

//     detailBox: {
//         display: "flex",
//         alignItems: "flex-start",
//         gap: 12
//     },

//     icon: {
//         fontSize: 26,
//         color: "#0c3c78",
//         marginTop: 4
//     },

//     detailLabel: {
//         fontSize: 14,
//         fontWeight: 600,
//         color: "#444"
//     },

//     detailText: {
//         fontSize: 14,
//         color: "#333",
//         marginTop: 4
//     },

//     form: {
//         flex: 1,
//         maxWidth: "45%",
//         display: "flex",
//         flexDirection: "column",
//         gap: 18
//     },

//     input: {
//         padding: "12px 14px",
//         fontSize: 14,
//         borderRadius: 6,
//         border: "1px solid #ccc",
//         outline: "none"
//     },

//     textarea: {
//         padding: "12px 14px",
//         fontSize: 14,
//         borderRadius: 6,
//         border: "1px solid #ccc",
//         outline: "none",
//         minHeight: 100
//     },

//     submitBtn: {
//         padding: "12px 18px",
//         background: "#0c3c78",
//         color: "#fff",
//         border: "none",
//         borderRadius: 6,
//         cursor: "pointer",
//         fontWeight: 600,
//         fontSize: 15
//     },

//     mapWrapper: {
//         marginTop: 50,
//         width: "100%",
//         height: 350,
//         borderRadius: 12,
//         overflow: "hidden",
//         boxShadow: "0px 8px 24px rgba(0,0,0,0.15)"
//     },

//     map: {
//         width: "100%",
//         height: "100%",
//         border: "none"
//     },
//     link: {
//         fontSize: 14,
//         color: "#0c3c78",
//         textDecoration: "none",
//         fontWeight: 600,
//         lineHeight: 1.6
//     },

// };
import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
    return (
        <section style={styles.container}>
            {/* Decorative Theme Background Elements */}
            <div style={styles.goldGlow}></div>
            <div style={styles.goldGlow2}></div>

            {/* HEADER SECTION */}
            <div style={styles.titleContainer}>
                <motion.span
                    style={styles.badge}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    GET IN TOUCH
                </motion.span>
                <motion.h2
                    style={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Connect With Our Plant Engineers
                </motion.h2>
                <div style={styles.titleUnderline}></div>
            </div>

            {/* MAIN TWO-COLUMN CONTENT */}
            <div style={styles.content}>

                {/* LEFT COLUMN: CONTACT CHANNELS */}
                <motion.div
                    style={styles.details}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {/* PHONE CHANNELS */}
                    <div style={styles.detailBox}>
                        <div style={styles.iconWrapper}>
                            <FaPhoneAlt style={styles.icon} />
                        </div>
                        <div>
                            <p style={styles.detailLabel}>Direct Hotline</p>
                            <a href="tel:+919225232463" style={styles.link}>
                                +91 92252 32463
                            </a>
                        </div>
                    </div>

                    {/* EMAIL INTERFACES */}
                    <div style={styles.detailBox}>
                        <div style={styles.iconWrapper}>
                            <FaEnvelope style={styles.icon} />
                        </div>
                        <div style={styles.linkGroup}>
                            <p style={styles.detailLabel}>Corporate Desk</p>
                            <a href="mailto:shrenikgandhi@pvcorp.co.in" style={styles.link}>
                                shrenikgandhi@pvcorp.co.in
                            </a>
                            <a href="mailto:shrenikgandhi@autovira.com" style={styles.link}>
                                shrenikgandhi@autovira.com
                            </a>
                        </div>
                    </div>

                    {/* PHYSICAL ADRESS MATRIX */}
                    <div style={styles.detailBox}>
                        <div style={styles.iconWrapper}>
                            <FaMapMarkerAlt style={styles.icon} />
                        </div>
                        <div style={styles.linkGroup}>
                            <p style={styles.detailLabel}>Factory Infrastructure</p>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Katraria+Compound+Pisoli+Pune"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                            >
                                Katraria Compound, Jagdamb Bhavan Road, Pisoli, Pune – 412308
                            </a>

                            <p style={{ ...styles.detailLabel, marginTop: 16 }}>
                                Corporate Office
                            </p>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Platinum+9+Baner+Pune"
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                            >
                                407, 4th Floor, Platinum 9, Baner, Pune – 411045
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT COLUMN: SECURE FORM INTAKE */}
                <motion.form
                    style={styles.form}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div style={styles.formHeader}>
                        <h3 style={styles.formHeading}>Request Technical Estimation</h3>
                        <p style={styles.formSubtext}>Transmit payload and design footprint criteria.</p>
                    </div>

                    <input placeholder="Your Name" style={styles.input} required />
                    <input placeholder="Your Email" type="email" style={styles.input} required />
                    <input placeholder="Your Phone" type="tel" style={styles.input} required />
                    <textarea placeholder="Outline architectural requirements, fleet chassis layouts, or municipal tenders..." style={styles.textarea} required />

                    <motion.button
                        style={styles.submitBtn}
                        whileHover={{ scale: 1.02, backgroundColor: "#EAD065" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Transmit Matrix Parameters
                    </motion.button>
                </motion.form>

            </div>

            {/* MAP VIEWPANEL */}
            <motion.div
                style={styles.mapWrapper}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <iframe
                    title="AutoVira Location"
                    style={styles.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.782542487!2d73.9106197!3d18.44818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea498a22a76f%3A0x70ae45c2b145c1c8!2sKatariya%20%26%20Sons!5e0!3m2!1sen!2sin!4v1770191757192!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                />
            </motion.div>
        </section>
    );
}

const styles = {
    container: {
        background: "linear-gradient(180deg, #0A0A0A, #121212, #0A0A0A)",
        padding: "100px 8%",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        fontFamily: "'Segoe UI', Roboto, sans-serif"
    },
    goldGlow: {
        position: "absolute",
        width: "700px",
        height: "700px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,175,55,0.06), transparent)",
        top: "-200px",
        left: "-200px",
        filter: "blur(80px)",
        pointerEvents: "none"
    },
    goldGlow2: {
        position: "absolute",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,175,55,0.04), transparent)",
        bottom: "-150px",
        right: "-150px",
        filter: "blur(80px)",
        pointerEvents: "none"
    },
    titleContainer: {
        textAlign: "center",
        marginBottom: "60px",
        position: "relative",
        zIndex: 2
    },
    badge: {
        background: "rgba(212, 175, 55, 0.1)",
        border: "1px solid rgba(212, 175, 55, 0.25)",
        color: "#D4AF37",
        padding: "6px 14px",
        borderRadius: "20px",
        fontSize: "11px",
        fontWeight: "700",
        letterSpacing: "2.5px",
        display: "inline-block",
        marginBottom: "16px"
    },
    title: {
        fontSize: "clamp(28px, 3.5vw, 42px)",
        fontWeight: "800",
        color: "#FFFFFF",
        margin: "0 0 16px 0",
        letterSpacing: "-0.5px"
    },
    titleUnderline: {
        width: "60px",
        height: "4px",
        backgroundColor: "#D4AF37",
        margin: "0 auto",
        borderRadius: "2px"
    },
    content: {
        display: "flex",
        gap: "50px",
        flexWrap: "wrap",
        justifyContent: "space-between",
        position: "relative",
        zIndex: 2
    },
    details: {
        flex: "1 1 400px",
        display: "flex",
        flexDirection: "column",
        gap: "32px"
    },
    detailBox: {
        display: "flex",
        alignItems: "flex-start",
        gap: "20px",
        background: "rgba(255, 255, 255, 0.01)",
        border: "1px solid rgba(255, 255, 255, 0.04)",
        padding: "24px",
        borderRadius: "16px",
        backdropFilter: "blur(10px)"
    },
    iconWrapper: {
        width: "48px",
        height: "48px",
        borderRadius: "12px",
        backgroundColor: "rgba(212, 175, 55, 0.08)",
        border: "1px solid rgba(212, 175, 55, 0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
    },
    icon: {
        fontSize: "20px",
        color: "#D4AF37"
    },
    linkGroup: {
        display: "flex",
        flexDirection: "column"
    },
    detailLabel: {
        fontSize: "13px",
        fontWeight: "700",
        color: "#D4AF37",
        textTransform: "uppercase",
        letterSpacing: "1px",
        margin: "0 0 8px 0"
    },
    link: {
        fontSize: "15px",
        color: "#E2E8F0",
        textDecoration: "none",
        fontWeight: "500",
        lineHeight: "1.6",
        transition: "color 0.2s ease",
        display: "block",
        marginBottom: "4px"
    },
    form: {
        flex: "1 1 400px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        padding: "40px",
        borderRadius: "24px",
        backdropFilter: "blur(10px)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
    },
    formHeader: {
        marginBottom: "10px"
    },
    formHeading: {
        fontSize: "22px",
        fontWeight: "700",
        color: "#FFFFFF",
        margin: "0 0 6px 0"
    },
    formSubtext: {
        fontSize: "14px",
        color: "#A0AEC0",
        margin: 0
    },
    input: {
        padding: "14px 16px",
        fontSize: "14px",
        borderRadius: "8px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        color: "#FFFFFF",
        outline: "none",
        transition: "all 0.3s ease"
    },
    textarea: {
        padding: "14px 16px",
        fontSize: "14px",
        borderRadius: "8px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        color: "#FFFFFF",
        outline: "none",
        minHeight: "120px",
        resize: "vertical",
        transition: "all 0.3s ease"
    },
    submitBtn: {
        padding: "15px 20px",
        background: "linear-gradient(135deg, #D4AF37, #B89220)",
        color: "#0A0A0A",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "700",
        fontSize: "15px",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        boxShadow: "0 10px 20px rgba(212, 175, 55, 0.15)",
        marginTop: "10px",
        transition: "all 0.2s ease"
    },
    mapWrapper: {
        marginTop: "60px", width: "100%", height: "400px", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.06)", boxShadow: "0px 15px 35px rgba(0,0,0,0.4)", position: "relative", zIndex: 2
    }, map: { width: "100%", height: "100%", border: "none", filter: "grayscale(1) invert(0.92) contrast(1.1)" }
};