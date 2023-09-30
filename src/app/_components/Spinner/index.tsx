import { VariantProps, cva } from 'cva'
import { combineStyles } from '@/app/_libs/style'

const spinnerVariants = cva({
  base: ['animate-spin rounded-full border-t-transparent'],
  variants: {
    size: {
      sm: ['h-4 w-4 border-[2px]'],
      md: ['h-5 w-5 border-[3px]'],
      lg: ['h-7 w-7 border-[4px]'],
      icon: ['h-4 w-4 border-[2px]']
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

type Props = VariantProps<typeof spinnerVariants>

export const Spinner = ({ size }: Props) => {
  return (
    <div
      role="status"
      aria-label="読み込み中"
      className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center"
    >
      <div className={combineStyles(spinnerVariants({ size }))} />
    </div>
  )
}
