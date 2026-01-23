import { motion } from "framer-motion"
import { HeaderTop } from "./header-top"
import { HeaderBreadcrumb } from "./header-breadcrumb"

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderTop />
      <HeaderBreadcrumb />
    </motion.div>
  )
}
