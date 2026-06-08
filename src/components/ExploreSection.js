import { motion } from "framer-motion";
import logo from "../images/logobg.png";
import { useNavigate } from 'react-router-dom';

export default function ExploreSection() {
    const navigate = useNavigate();

    return (
        <section style={styles.wrapper}>

            <img src={logo} alt="Autovira Logo" style={styles.logo} />


            {/* MAIN TITLE */}
            <motion.h2
                style={styles.heading}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Build What Matters with AutoVira
            </motion.h2>

            {/* SUBTITLE */}
            <motion.p
                style={styles.subText}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                Discover our expertise in advanced vehicle manufacturing and industry events that drive innovation.
            </motion.p>

            {/* CTA CARDS */}
            <div style={styles.grid}>

                {/* EXPLORE MANUFACTURING */}
                <motion.div
                    style={styles.ctaCard}
                    whileHover={{ scale: 1.07 }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={styles.iconCircle}>🏭</div>
                    <h3 style={styles.ctaTitle}>Explore Manufacturing</h3>
                    <p style={styles.ctaDesc}>
                        Dive into our fabrication & engineering excellence across multiple product lines.
                    </p>
                    <button style={{ ...styles.btn, ...styles.manufactureBtn }}
                        onClick={() => navigate('/Manufacturinghome')}
                    >
                        View Manufacturing
                    </button>
                </motion.div>

                {/* EXPLORE EVENTS */}
                <motion.div
                    style={styles.ctaCard}
                    whileHover={{ scale: 1.07 }}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={styles.iconCircle}>🎉</div>
                    <h3 style={styles.ctaTitle}>Explore Events</h3>
                    <p style={styles.ctaDesc}>
                        See our latest shows, exhibitions, and real-world demonstrations.
                    </p>
                    <button style={{ ...styles.btn, ...styles.eventsBtn }}
                    onClick={() => navigate('/Eventhome')}
                    >
                        View Events
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
const styles = {
    wrapper: {
        padding: "100px 60px",
        minHeight: "100vh",
        background: "linear-gradient(120deg, #0d1a2b, #142d4c, #0a1f33)",
        textAlign: "center",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        // height:"100%",
    },
    logo: {
        width: "30%",
        height: "30%",
        marginBottom: 20
    },
    heading: {
        fontSize: 36,
        fontWeight: 700,
        marginBottom: 14
    },

    subText: {
        fontSize: 18,
        opacity: 0.85,
        marginBottom: 40
    },

    grid: {
        display: "flex",
        justifyContent: "center",
        gap: 40,
        flexWrap: "wrap"
    },

    ctaCard: {
        background: "rgba(255,255,255,0.05)",
        borderRadius: 16,
        padding: 30,
        width: "300px",
        boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
        backdropFilter: "blur(6px)",
        textAlign: "center"
    },

    iconCircle: {
        width: 70,
        height: 70,
        background: "rgba(255,255,255,0.15)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 32,
        margin: "0 auto 18px"
    },

    ctaTitle: {
        fontSize: 22,
        fontWeight: 700,
        marginBottom: 10
    },

    ctaDesc: {
        fontSize: 14,
        opacity: 0.85,
        marginBottom: 20
    },

    btn: {
        padding: "12px 24px",
        fontSize: 14,
        fontWeight: 600,
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
        transition: "all 0.3s ease"
    },

    manufactureBtn: {
        background: "#00c6ff",
        color: "#000"
    },

    eventsBtn: {
        background: "#ff8c00",
        color: "#fff"
    }
};
