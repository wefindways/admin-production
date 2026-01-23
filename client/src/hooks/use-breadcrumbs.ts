import { useLocation } from "react-router-dom"

function formatLabel(label: string) {
  return label
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

export function useBreadcrumbs() {
  const { pathname } = useLocation()
  const segments = pathname.split("/").filter(Boolean)

  let path = ""

  return segments.map((segment, index) => {
    path += `/${segment}`
    return {
      label: formatLabel(segment),
      path,
      isLast: index === segments.length - 1,
    }
  })
}
