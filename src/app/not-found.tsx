import { AnchorButton } from '@/components/AnchorButton'
import { Typography } from '@/components/Typography'
import { PathMap } from './_const'

export default function NotFound() {
  return (
    <section className="mt-32 h-full text-center">
      <div className="mx-auto grid w-96 items-center gap-12">
        <header>
          <Typography>404</Typography>
        </header>
        <Typography as={'p'} variant="p">
          お探しのページは見つかりませんでした。削除、変更されたか URL が間違っている可能性がございます。
        </Typography>
        <AnchorButton className="mx-auto w-40" href={PathMap.home()}>
          Go back to Home
        </AnchorButton>
      </div>
    </section>
  )
}
