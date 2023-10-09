import { PathMap } from '@/app/_const'
import { Link } from '@/components/Link'

export const Heading = () => {
  return (
    <h1>
      <Link href={PathMap.home()} className="text-xl font-bold hover:no-underline">
        Vinyl
      </Link>
    </h1>
  )
}
