import * as React from 'react'
import { VariantProps, cva } from 'cva'
import { combineStyles } from '@/app/_libs/style'

export const bookVariants = cva({
  variants: {
    variant: {
      primary: 'bg-primary text-primary-text hover:bg-primary/80',
      secondary: 'bg-secondary text-secondary-text hover:bg-secondary/80',
      tertiary: 'bg-tertiary text-tertiary-text hover:bg-tertiary/80'
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

const BookWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-[300px] w-60 rounded-lg [transform-style:preserve-3d] [transition:transform_1s_ease] before:absolute before:top-[3px] before:h-[calc(300px_-_2_*_3px)] before:w-[50px] before:bg-[#fff] before:content-['_'] before:[transform:translateX(calc(240px_-_50px_/_2_-_3px))_rotateY(90deg)_translateX(calc(50px_/_2))] after:absolute after:left-0 after:h-[300px] after:w-60 after:overflow-hidden after:rounded-r-sm after:bg-[#01060f] after:content-['_'] after:[transform:translateZ(-50px)] hover:[transform:rotateY(-28deg)]">
      {children}
    </div>
  )
}

const BookCover = ({ className }: Pick<React.ComponentPropsWithoutRef<'div'>, 'className'>) => {
  return <div className={combineStyles('absolute h-[300px] w-60 rounded-sm overflow-hidden', className)} />
}

const BookLeft = () => {
  return (
    <div className="absolute right-[78px] top-[138px] z-20 h-6 w-[300px] rotate-90 overflow-hidden rounded-b-sm bg-[linear-gradient(0deg,hsla(0,0%,100%,0),hsla(0,0%,100%,0)_12%,hsla(0,0%,100%,.25)_29.25%,hsla(0,0%,100%,0)_50.5%,hsla(0,0%,100%,0)_75.25%,hsla(0,0%,100%,.25)_91%,hsla(0,0%,100%,0)),linear-gradient(0deg,rgba(0,0,0,.03),rgba(0,0,0,.1)_12%,transparent_30%,rgba(0,0,0,.02)_50%,rgba(0,0,0,.2)_73.5%,rgba(0,0,0,.5)_75.25%,rgba(0,0,0,.15)_85.25%,transparent)] opacity-50" />
  )
}

const BookContent = ({
  children,
  className
}: Pick<React.ComponentPropsWithoutRef<'div'>, 'children' | 'className'>) => {
  return (
    <div
      className={combineStyles(
        'absolute rounded-sm flex w-full h-full flex-col justify-between pl-8 pt-5 pr-2 pb-2',
        className
      )}
    >
      {children}
    </div>
  )
}

export type BookProps = React.ComponentPropsWithRef<'div'> & VariantProps<typeof bookVariants>

export const Book = React.forwardRef<HTMLDivElement, BookProps>(function Book(
  { children, className, variant, ...props },
  ref
) {
  return (
    <div {...props} ref={ref} className={combineStyles('flex justify-center [perspective:500px]', className)}>
      <BookWrapper>
        <BookLeft />
        <BookCover className={bookVariants({ variant })} />
        <BookContent className={bookVariants({ variant })}>{children}</BookContent>
      </BookWrapper>
    </div>
  )
})
