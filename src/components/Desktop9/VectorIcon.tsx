import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.00001 0C4.02946 0 0 4.05042 0 9.04688C0 10.7178 0.325365 12.4436 1.25906 13.6875L9.00001 24L16.7409 13.6875C17.589 12.5577 18 10.5604 18 9.04688C18 4.05042 13.9706 0 9.00001 0ZM9.00001 5.23974C11.0914 5.23974 12.7874 6.94456 12.7874 9.04686C12.7874 11.1492 11.0914 12.854 9.00001 12.854C6.90858 12.854 5.21261 11.1492 5.21261 9.04688C5.21261 6.94456 6.90858 5.23974 9.00001 5.23974Z'
      fill='#777777'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
