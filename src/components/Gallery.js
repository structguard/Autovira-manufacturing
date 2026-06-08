import { color, motion } from "framer-motion";

import g1 from "../images/Deliveryvans.jpeg";
import g2 from "../images/Deliveryvans.jpeg";
import g3 from "../images/Deliveryvans.jpeg";
import g4 from "../images/Deliveryvans.jpeg";
import g5 from "../images/Deliveryvans.jpeg";
import g6 from "../images/Deliveryvans.jpeg";

export default function Gallery() {
    const galleryData = [
        {
            id: 1,
            image: g1,
            title: "Garbage Tipper Manufacturing",
            desc: "Heavy-duty garbage tipper vehicle under fabrication at our facility."
        },
        {
            id: 2,
            image: g2,
            title: "Hydraulic System Installation",
            desc: "Precision hydraulic system integration and load testing."
        },
        {
            id: 3,
            image: g3,
            title: "Delivery Van Body Build",
            desc: "Custom delivery van body designed for commercial logistics."
        },
        {
            id: 4,
            image: g4,
            title: "Paint & Coating Process",
            desc: "Automated paint booth with corrosion-resistant coating."
        },
        {
            id: 5,
            image: g5,
            title: "Final Quality Inspection",
            desc: "Rigorous quality checks before vehicle dispatch."
        },
        {
            id: 6,
            image: g6,
            title: "Finished Vehicle Delivery",
            desc: "Completed vehicle ready for customer handover."
        }
    ];

    return (
        <section style={styles.container}>

            {/* TITLE */}
            <motion.h2
                style={styles.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Gallery
            </motion.h2>

            {/* GALLERY GRID */}
            <div style={styles.grid}>
                {galleryData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        style={styles.card}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div style={styles.imageWrapper}
                            onMouseEnter={(e) =>
                                (e.currentTarget.children[1].style.opacity = 1)
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.children[1].style.opacity = 0)
                            }

                        >
                            <img src={item.image} alt={item.title} style={styles.image} />

                            {/* OVERLAY */}
                            <div style={styles.overlay}>
                                <h4 style={styles.overlayTitle}>{item.title}</h4>
                                <p style={styles.overlayText}>{item.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}
const styles = {
    container: {
        padding: "80px 60px",
        background: "#f7faff",
        fontFamily: "Arial, sans-serif"
    },

    title: {
        fontSize: 34,
        fontWeight: 700,
        textAlign: "center",
        marginBottom: 50,
        color: "#0c3c78"
    },

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 30
    },

    card: {
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
        background: "#fff"
    },

    imageWrapper: {
        position: "relative",
        width: "100%",
        height: 220
    },

    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
    },

    overlay: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
        color: "#fff",
        opacity: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 20,
        transition: "opacity 0.3s ease"
    },

    overlayTitle: {
        fontSize: 18,
        fontWeight: 600,
        marginBottom: 6,
        // color: "red"
    },

    overlayText: {
        fontSize: 14,
        lineHeight: 1.5,
        opacity: 0.9
    }
};
