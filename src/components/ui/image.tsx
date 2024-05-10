import Image from 'next/image'
import cn from 'classnames';

interface Props {
  variant?: string;
  className?: string;
  width: number;
  height: number;
  //loading: string;
  //style: object;
  src: string;
  alt: string;
}

const ImageFill : React.FC<Props> = ({
  className,
  variant,
  width,
  //loading,
  //style,
  height,
  src,
  alt,
  ...props
}) => {
  return (
    <div className={cn('relative inline-block overflow-hidden mx-auto box-sizing', className)}
    >
      <div className="block w-full box-sizing">
        <svg
          className="block max-w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          version="1.1"
        />
      </div>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className={cn(
          'absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full min-h-full object-cover',
          {
            'rounded-md': variant === 'rounded',
          },
        )}
      />
    </div>
  );
};

export default ImageFill;
