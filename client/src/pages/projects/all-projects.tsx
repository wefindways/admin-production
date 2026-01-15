import { motion } from "framer-motion"

export default function AllProject() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 10, y: 0 }}
      transition={{ duration: 0.5 }}
    >ALL PROJECT</motion.div>
  )
}