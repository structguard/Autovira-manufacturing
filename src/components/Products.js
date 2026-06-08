
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import garbage from "../images/product1.jpeg";
import delivery from "../images/Deliveryvans.jpeg";
import hydraulic from "../images/HopperTipper.jpeg";
import commercial from "../images/product4.jpeg";
import custom from "../images/product5.jpeg";
import service from "../images/slider4.jpeg";
import SandTipper from "../images/product6.jpeg";
import TipperonThreeWheeler from "../images/product7.jpeg";

export default function OurProducts() {
    const [active, setActive] = useState(null);

    const products = [
        {
            id: "p1",
            title: "Garbage Tipper Vehicles",
            short: "Custom-built tippers designed for solid waste management in SCV/LCV range. Capacity: 1–5.5 Cum | Open, Closed, Hopper | Battery & PTO Options",
            // 👇 MAIN IMAGE (used in grid)
            mainImage: garbage,

            // 👇 MULTI IMAGES (used in modal)
            images: [
                garbage,
                SandTipper,
                TipperonThreeWheeler
            ],

            overview:
                "Heavy-duty garbage tipper vehicles designed for efficient solid waste collection and disposal, compliant with municipal standards.",

            variants: [
                "Mini Tipper",
                "Rear Loading Tipper",
                "Side Loading Tipper"
            ],

            specs: [
                "Chassis Compatibility: Tata / Ashok Leyland / Eicher",
                "Body Material: High-Tensile Steel",
                "Hydraulic System: PTO Driven",
                "Load Capacity: 1.5 – 12 Tons",
                "Finish: Anti-corrosion paint coating"
            ],

            idealFor: [
                "Municipal Corporations",
                "Urban Local Bodies",
                "Gram Panchayats",
                "Private Waste Contractors"
            ],

            addons: [
                "GPS Tracking System",
                "Bin Lifter Mechanism",
                "Rear Camera",
                "Custom Branding & Paint"
            ]
        },
        {
            id: "p2",
            title: "Delivery Vans",
            short: "Heavy-duty vans built for logistics and goods movement, with optional branding. Compatible: SCV, Pickup, LCV",
            // 👇 MAIN IMAGE (used in grid)
            mainImage: delivery,

            // 👇 MULTI IMAGES (used in modal)
            images: [
                garbage,
                SandTipper,
                TipperonThreeWheeler
            ],

            overview:
                "Heavy-duty garbage tipper vehicles designed for efficient solid waste collection and disposal, compliant with municipal standards.",

            variants: [
                "Mini Tipper",
                "Rear Loading Tipper",
                "Side Loading Tipper"
            ],

            specs: [
                "Chassis Compatibility: Tata / Ashok Leyland / Eicher",
                "Body Material: High-Tensile Steel",
                "Hydraulic System: PTO Driven",
                "Load Capacity: 1.5 – 12 Tons",
                "Finish: Anti-corrosion paint coating"
            ],

            idealFor: [
                "Municipal Corporations",
                "Urban Local Bodies",
                "Gram Panchayats",
                "Private Waste Contractors"
            ],

            addons: [
                "GPS Tracking System",
                "Bin Lifter Mechanism",
                "Rear Camera",
                "Custom Branding & Paint"
            ]
        },
        {
            id: "p3",
            title: "Hopper Tipper Vehicles",
            short: "Built for bulk waste collection with deep hopper body and rear hydraulic tipping. Features: Leak-proof, high capacity, optional top lid.",
            // 👇 MAIN IMAGE (used in grid)
            mainImage: hydraulic,

            // 👇 MULTI IMAGES (used in modal)
            images: [
                garbage,
                SandTipper,
                TipperonThreeWheeler
            ],

            overview:
                "Heavy-duty garbage tipper vehicles designed for efficient solid waste collection and disposal, compliant with municipal standards.",

            variants: [
                "Mini Tipper",
                "Rear Loading Tipper",
                "Side Loading Tipper"
            ],

            specs: [
                "Chassis Compatibility: Tata / Ashok Leyland / Eicher",
                "Body Material: High-Tensile Steel",
                "Hydraulic System: PTO Driven",
                "Load Capacity: 1.5 – 12 Tons",
                "Finish: Anti-corrosion paint coating"
            ],

            idealFor: [
                "Municipal Corporations",
                "Urban Local Bodies",
                "Gram Panchayats",
                "Private Waste Contractors"
            ],

            addons: [
                "GPS Tracking System",
                "Bin Lifter Mechanism",
                "Rear Camera",
                "Custom Branding & Paint"
            ]
        },
        {
            id: "p4",
            title: "High Deck on Ace Electric Vehicles",
            short: "Eco-friendly high deck body designed for urban cargo with maximum load efficiency. Features: Lightweight build, EV-compatible, customizable branding.",
            // 👇 MAIN IMAGE (used in grid)
            mainImage: commercial,

            // 👇 MULTI IMAGES (used in modal)
            images: [
                garbage,
                SandTipper,
                TipperonThreeWheeler
            ],

            overview:
                "Heavy-duty garbage tipper vehicles designed for efficient solid waste collection and disposal, compliant with municipal standards.",

            variants: [
                "Mini Tipper",
                "Rear Loading Tipper",
                "Side Loading Tipper"
            ],

            specs: [
                "Chassis Compatibility: Tata / Ashok Leyland / Eicher",
                "Body Material: High-Tensile Steel",
                "Hydraulic System: PTO Driven",
                "Load Capacity: 1.5 – 12 Tons",
                "Finish: Anti-corrosion paint coating"
            ],

            idealFor: [
                "Municipal Corporations",
                "Urban Local Bodies",
                "Gram Panchayats",
                "Private Waste Contractors"
            ],

            addons: [
                "GPS Tracking System",
                "Bin Lifter Mechanism",
                "Rear Camera",
                "Custom Branding & Paint"
            ]
        },
        {
            id: "p5",
            title: "Open Box Tipper (Ace Electric) Vehicles",
            short: "Eco-friendly garbage tipper with open-top design and rear hydraulic dumping. Features:Battery operation, fast unloading, EV-ready body.",
            // 👇 MAIN IMAGE (used in grid)
            mainImage: custom,

            // 👇 MULTI IMAGES (used in modal)
            images: [
                garbage,
                SandTipper,
                TipperonThreeWheeler
            ],

            overview:
                "Heavy-duty garbage tipper vehicles designed for efficient solid waste collection and disposal, compliant with municipal standards.",

            variants: [
                "Mini Tipper",
                "Rear Loading Tipper",
                "Side Loading Tipper"
            ],

            specs: [
                "Chassis Compatibility: Tata / Ashok Leyland / Eicher",
                "Body Material: High-Tensile Steel",
                "Hydraulic System: PTO Driven",
                "Load Capacity: 1.5 – 12 Tons",
                "Finish: Anti-corrosion paint coating"
            ],

            idealFor: [
                "Municipal Corporations",
                "Urban Local Bodies",
                "Gram Panchayats",
                "Private Waste Contractors"
            ],

            addons: [
                "GPS Tracking System",
                "Bin Lifter Mechanism",
                "Rear Camera",
                "Custom Branding & Paint"
            ]
        },
        {
            id: "p6",
            title: "On site service support Vehicles",
            short: "Field support for repairs, maintenance, and hydraulic checks at your location. Features: Quick response, trained technicians, genuine spare parts.",
            // 👇 MAIN IMAGE (used in grid)
            mainImage: service,

            // 👇 MULTI IMAGES (used in modal)
            images: [
                garbage,
                SandTipper,
                TipperonThreeWheeler
            ],

            overview:
                "Heavy-duty garbage tipper vehicles designed for efficient solid waste collection and disposal, compliant with municipal standards.",

            variants: [
                "Mini Tipper",
                "Rear Loading Tipper",
                "Side Loading Tipper"
            ],

            specs: [
                "Chassis Compatibility: Tata / Ashok Leyland / Eicher",
                "Body Material: High-Tensile Steel",
                "Hydraulic System: PTO Driven",
                "Load Capacity: 1.5 – 12 Tons",
                "Finish: Anti-corrosion paint coating"
            ],

            idealFor: [
                "Municipal Corporations",
                "Urban Local Bodies",
                "Gram Panchayats",
                "Private Waste Contractors"
            ],

            addons: [
                "GPS Tracking System",
                "Bin Lifter Mechanism",
                "Rear Camera",
                "Custom Branding & Paint"
            ]
        },
        {
            id: "p7",
            title: "Sand Tipper Vehicles",
            short: "Heavy-duty tipper for transporting sand, soil, and loose materials across sites. Features: High-load capacity, reinforced body, rear hydraulic unloading.",
            // 👇 MAIN IMAGE (used in grid)
            mainImage: SandTipper,

            // 👇 MULTI IMAGES (used in modal)
            images: [
                garbage,
                SandTipper,
                TipperonThreeWheeler
            ],

            overview:
                "Heavy-duty garbage tipper vehicles designed for efficient solid waste collection and disposal, compliant with municipal standards.",

            variants: [
                "Mini Tipper",
                "Rear Loading Tipper",
                "Side Loading Tipper"
            ],

            specs: [
                "Chassis Compatibility: Tata / Ashok Leyland / Eicher",
                "Body Material: High-Tensile Steel",
                "Hydraulic System: PTO Driven",
                "Load Capacity: 1.5 – 12 Tons",
                "Finish: Anti-corrosion paint coating"
            ],

            idealFor: [
                "Municipal Corporations",
                "Urban Local Bodies",
                "Gram Panchayats",
                "Private Waste Contractors"
            ],

            addons: [
                "GPS Tracking System",
                "Bin Lifter Mechanism",
                "Rear Camera",
                "Custom Branding & Paint"
            ]
        },
        {
            id: "p8",
            title: "Tipper on Three Wheeler Vehicles",
            short: "Compact garbage tipper built for narrow lanes and small-scale waste collection. Features: Rear tipping, manual or hydraulic, ideal for city zones.",
            // 👇 MAIN IMAGE (used in grid)
            mainImage: TipperonThreeWheeler,

            // 👇 MULTI IMAGES (used in modal)
            images: [
                garbage,
                SandTipper,
                TipperonThreeWheeler
            ],

            overview:
                "Heavy-duty garbage tipper vehicles designed for efficient solid waste collection and disposal, compliant with municipal standards.",

            variants: [
                "Mini Tipper",
                "Rear Loading Tipper",
                "Side Loading Tipper"
            ],

            specs: [
                "Chassis Compatibility: Tata / Ashok Leyland / Eicher",
                "Body Material: High-Tensile Steel",
                "Hydraulic System: PTO Driven",
                "Load Capacity: 1.5 – 12 Tons",
                "Finish: Anti-corrosion paint coating"
            ],

            idealFor: [
                "Municipal Corporations",
                "Urban Local Bodies",
                "Gram Panchayats",
                "Private Waste Contractors"
            ],

            addons: [
                "GPS Tracking System",
                "Bin Lifter Mechanism",
                "Rear Camera",
                "Custom Branding & Paint"
            ]
        },
    ];

    const downloadProductPDF = async (product) => {
        const input = document.getElementById("pdf-content");

        const canvas = await html2canvas(input, {
            scale: 2,
            useCORS: true,
            allowTaint: true
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        pdf.save(`${product.title}-Specs.pdf`);
    };

    return (
        <>
            {/* <div style={styles.sectionDivider}>
                <motion.div
                    style={styles.dividerLine}
                    animate={{
                        width: ["0%", "80%", "0%"]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 6
                    }}
                />
            </div> */}

            <section style={styles.container}>
                <div style={styles.goldGlow}></div>

                <motion.div
                    style={styles.headingWrap}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <span style={styles.smallTitle}>
                        AUTO VIRA
                    </span>

                    <h2 style={styles.title}>
                        Premium Vehicle Solutions
                    </h2>

                    <div style={styles.goldLine}></div>

                    <p style={styles.headingDesc}>
                        Engineered for performance,
                        durability and operational excellence.
                    </p>
                </motion.div>

                <motion.h2
                    style={styles.title}
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    Our Products
                </motion.h2>

                <div style={styles.grid}>
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            style={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <img
                                src={product.mainImage}
                                alt={product.title}
                                style={styles.image}
                            />


                            <div style={styles.cardContent}>
                                <h3 style={styles.cardTitle}>{product.title}</h3>
                                <p style={styles.cardText}>{product.short}</p>

                                <button
                                    style={styles.detailsBtn}
                                    onClick={() => setActive(product)}
                                >
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* DETAIL MODAL */}
                <AnimatePresence>
                    {active && (

                        <motion.div

                            style={styles.overlay}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActive(null)}
                        >
                            <motion.div

                                style={styles.modal}
                                initial={{ y: 60, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 60, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}

                            >
                                <button
                                    style={styles.closeBtn}
                                    onClick={() => setActive(null)}
                                >
                                    ✕
                                </button>

                                {/* IMAGE GALLERY */}
                                <div style={styles.gallery}>
                                    {active.images.map((img, index) => (
                                        <motion.img
                                            key={index}
                                            src={img}
                                            alt={`${active.title} ${index + 1}`}
                                            style={styles.galleryImg}
                                            whileHover={{ scale: 1.05 }}
                                        />
                                    ))}
                                </div>


                                <h2 style={styles.modalTitle}>{active.title}</h2>

                                {/* OVERVIEW */}
                                <section style={styles.section}>
                                    <h4 style={styles.sectionTitle}>Overview</h4>
                                    <p style={styles.sectionText}>{active.overview}</p>
                                </section>

                                {/* VARIANTS */}
                                <section style={styles.section}>
                                    <h4 style={styles.sectionTitle}>📦 Available Variants</h4>
                                    <ul style={styles.list}>
                                        {active.variants.map((v, i) => (
                                            <li key={i}>{v}</li>
                                        ))}
                                    </ul>
                                </section>

                                {/* TECH SPECS */}
                                <section style={styles.section}>
                                    <h4 style={styles.sectionTitle}>⚙️ Technical Specs</h4>
                                    <ul style={styles.list}>
                                        {active.specs.map((s, i) => (
                                            <li key={i}>{s}</li>
                                        ))}
                                    </ul>
                                </section>

                                {/* IDEAL FOR */}
                                <section style={styles.section}>
                                    <h4 style={styles.sectionTitle}>🏙️ Ideal For</h4>
                                    <ul style={styles.list}>
                                        {active.idealFor.map((i, idx) => (
                                            <li key={idx}>{i}</li>
                                        ))}
                                    </ul>
                                </section>

                                {/* ADD-ONS */}
                                <section style={styles.section}>
                                    <h4 style={styles.sectionTitle}>🛠️ Add-On Options</h4>
                                    <ul style={styles.list}>
                                        {active.addons.map((a, idx) => (
                                            <li key={idx}>{a}</li>
                                        ))}
                                    </ul>
                                </section>

                                {/* CTA BUTTONS */}
                                <div style={styles.ctaGroup}>
                                    <button style={styles.quoteBtn}>Request a Quote</button>
                                    <button style={styles.specBtn} onClick={() => downloadProductPDF(active)}>Download Specs</button>

                                </div>



                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
                {active && (
                    <div
                        id="pdf-content"
                        style={{
                            width: "800px",
                            padding: "40px",
                            background: "#fff",
                            position: "absolute",
                            left: "-9999px",
                            top: 0,
                            fontFamily: "Arial, sans-serif"
                        }}
                    >
                        {/* HEADER */}
                        <h1 style={{ textAlign: "center", marginBottom: 20 }}>
                            {active.title}
                        </h1>

                        {/* MAIN IMAGE */}
                        <img
                            src={active.mainImage}
                            alt={active.title}
                            style={{
                                width: "100%",
                                height: 300,
                                objectFit: "cover",
                                marginBottom: 20
                            }}
                        />

                        {/* OVERVIEW */}
                        <h3>Overview</h3>
                        <p>{active.overview}</p>

                        {/* VARIANTS */}
                        <h3>Available Variants</h3>
                        <ul>
                            {active.variants.map((v, i) => (
                                <li key={i}>{v}</li>
                            ))}
                        </ul>

                        {/* SPECS */}
                        <h3>Technical Specifications</h3>
                        <ul>
                            {active.specs.map((s, i) => (
                                <li key={i}>{s}</li>
                            ))}
                        </ul>

                        {/* IDEAL FOR */}
                        <h3>Ideal For</h3>
                        <ul>
                            {active.idealFor.map((i, idx) => (
                                <li key={idx}>{i}</li>
                            ))}
                        </ul>

                        {/* ADDONS */}
                        <h3>Add-On Options</h3>
                        <ul>
                            {active.addons.map((a, idx) => (
                                <li key={idx}>{a}</li>
                            ))}
                        </ul>

                        {/* GALLERY */}
                        <h3>Product Images</h3>
                        {active.images.map((img, index) => (

                            <img
                                key={index}
                                src={img}
                                alt={`product-${index}`}
                                style={{
                                    width: "100%",
                                    height: 250,
                                    objectFit: "cover",
                                    marginBottom: 15
                                }}

                            />
                        ))}
                    </div>
                )}


            </section>
        </>
    );
}

const styles = {
    container: {
        padding: "120px 5%",
        background:
            "linear-gradient(180deg,#0D0D0D,#161616)",
        position: "relative",
        overflow: "hidden"
    },
    title: {
        fontSize: 34,
        fontWeight: 700,
        textAlign: "center",
        marginBottom: 40
    },
    sectionDivider: {
        height: "180px",
        background:
            "linear-gradient(180deg,#161616,#0D0D0D)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    dividerLine: {
        height: "2px",
        background: "#D4AF37"
    },
    goldGlow: {
        position: "absolute",
        width: "900px",
        height: "900px",
        background:
            "radial-gradient(circle,#D4AF3720,transparent)",
        top: "-300px",
        right: "-300px",
        filter: "blur(90px)"
    },

    grid: {
        display: "grid",
        gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
        gap: 30
    },
    card: {
        background: "rgba(255,255,255,.04)",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(212,175,55,.15)",
        borderRadius: "24px",
        overflow: "hidden",
        position: "relative"
    },
    productNo: {
        position: "absolute",
        top: 15,
        left: 20,
        color: "#D4AF37",
        fontSize: "42px",
        fontWeight: "700",
        opacity: .25
    },
    image: {
        width: "100%",
        height: "240px",
        objectFit: "cover",
        transition: "0.5s"
    },
    cardContent: {
        padding: "25px"
    },

    cardTitle: {
        color: "#fff",
        fontSize: "22px",
        marginBottom: "10px"
    },

    cardText: {
        color: "#BDBDBD",
        lineHeight: "1.8"
    },
    detailsBtn: {
        background: "#D4AF37",
        color: "#111",
        border: "none",
        padding: "12px 26px",
        borderRadius: "40px",
        fontWeight: "700",
        cursor: "pointer",
        marginTop: "15px"
    },
    /* MODAL */
    overlay: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        padding: 20           // 👈 important for mobile
    },

    // modal: {
    //     background: "#fff",
    //     borderRadius: 12,
    //     width: "100%",
    //     maxWidth: 650,
    //     maxHeight: "85vh",    // 👈 FIXED HEIGHT LIMIT
    //     padding: 28,
    //     overflowY: "auto",    // 👈 SCROLL INSIDE MODAL
    //     textAlign: "left",
    //     boxShadow: "0 20px 40px rgba(0,0,0,0.35)"
    // },
    modal: {
        background: "#111",
        color: "#fff",
        borderRadius: "25px",
        border: "1px solid rgba(212,175,55,.2)",
        width: "100%",
        maxWidth: "1000px",
        maxHeight: "90vh",
        overflowY: "auto",
        padding: "35px",
        position: "relative"
    },
    modalImage: {
        width: "100%",
        height: 260,
        objectFit: "cover",
        borderRadius: 10,
        marginBottom: 14
    },
    modalTitle: {
        color: "#D4AF37",
        fontSize: "36px",
        marginBottom: "25px"
    },
    modalDesc: {
        fontSize: 16,
        color: "#444",
        marginBottom: 20
    },
    ctaGroup: {
        display: "flex",
        gap: 20,
        justifyContent: "center",
        marginBottom: 18
    },
    quoteBtn: {
        background: "#D4AF37",
        color: "#111",
        border: "none",
        padding: "14px 30px",
        borderRadius: "50px",
        fontWeight: "700"
    },

    specBtn: {
        background: "transparent",
        color: "#fff",
        border: "2px solid #D4AF37",
        padding: "14px 30px",
        borderRadius: "50px"
    },
    // closeBtn: {
    //     marginTop: 12,
    //     padding: "8px 18px",
    //     background: "#aaa",
    //     color: "#fff",
    //     border: "none",
    //     borderRadius: 6,
    //     cursor: "pointer"
    // },
    gallery: {
        display: "flex",
        gap: 12,
        overflowX: "auto",
        marginBottom: 20
    },

    galleryImg: {
        height: "220px",
        minWidth: "340px",
        borderRadius: "16px",
        border: "2px solid rgba(212,175,55,.2)"
    },

    modalTitle: {
        fontSize: 26,
        fontWeight: 700,
        marginBottom: 16
    },

    section: {
        marginBottom: 18,
        textAlign: "left"
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: 600,
        marginBottom: 6
    },

    sectionText: {
        fontSize: 15,
        color: "#444",
        lineHeight: 1.6
    },

    list: {
        paddingLeft: 18,
        fontSize: 14,
        color: "#444",
        lineHeight: 1.7
    },

    ctaGroup: {
        display: "flex",
        gap: 20,
        justifyContent: "center",
        marginTop: 20
    },

    quoteBtn: {
        padding: "12px 26px",
        background: "#00c6ff",
        color: "#000",
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
        fontWeight: 600
    },

    specBtn: {
        padding: "12px 26px",
        background: "#0c3c78",
        color: "#fff",
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
        fontWeight: 600
    },

    closeBtn: {
        position: "absolute",
        top: 16,
        right: 16,
        padding: "6px 12px",
        background: "#e53935",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 1,
        width: 32,
        height: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
    },

    gallery: {
        display: "flex",
        gap: 14,
        overflowX: "auto",
        paddingBottom: 10,
        marginBottom: 20,
        scrollBehavior: "smooth"
    },

    galleryImg: {
        height: 180,
        minWidth: 260,
        objectFit: "cover",
        borderRadius: 10,
        boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
        cursor: "pointer"
    },
    headingWrap: {
        textAlign: "center",
        marginBottom: "70px"
    },

    smallTitle: {
        color: "#D4AF37",
        letterSpacing: "4px"
    },

    title: {
        color: "#fff",
        fontSize: "clamp(36px,5vw,65px)"
    },

    goldLine: {
        width: "120px",
        height: "3px",
        background: "#D4AF37",
        margin: "20px auto"
    },

    headingDesc: {
        color: "#BDBDBD",
        maxWidth: "700px",
        margin: "auto"
    },

};
