import { motion } from "framer-motion";

export default function Services() {
  return (
    <div style={styles.section}>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Our Services
      </motion.h2>
      <p>Design, Installation, Maintenance & Upgrades</p>
    </div>
  );
}

const styles = {
  section: {
    padding: 80,
    background: "#0a0a0a",
    color: "#fff",
    textAlign: "center"
  }
};
