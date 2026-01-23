import { Link } from "react-router-dom"
import { ChevronRight, House } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/navigation/breadcrumb"
import { useBreadcrumbs } from "@/hooks/use-breadcrumbs"
import { NON_LINKABLE_BREADCRUMB_SEGMENTS } from "@/config/breadcrumb.config"
import { getLastSegment } from "@/utils/path"

export function HeaderBreadcrumb() {
  const crumbs = useBreadcrumbs()

  return (
    <Breadcrumb>
      <BreadcrumbList className="px-4 py-2">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/dashboard">
              <House size={16} />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {crumbs.map((crumb) => (
          <div key={crumb.path} className="flex items-center gap-1">
            <BreadcrumbSeparator>
              <ChevronRight size={14} />
            </BreadcrumbSeparator>

            <BreadcrumbItem>
              {crumb.isLast ||
                NON_LINKABLE_BREADCRUMB_SEGMENTS.has(getLastSegment(crumb.path)) ? (
                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={crumb.path}>{crumb.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
