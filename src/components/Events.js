import { motion } from "framer-motion";

export default function Events() {
  return (
    <div style={styles.section}>
      <motion.h2 whileInView={{ scale: 1.05 }}>
        Events & Exhibitions
      </motion.h2>
      <p>Industry expos, product launches, seminars</p>
    </div>
  );
}

const styles = {
  section: { padding: 80, textAlign: "center" }
};
