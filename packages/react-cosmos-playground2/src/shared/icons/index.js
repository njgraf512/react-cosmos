// @flow

import React from 'react';
import styled from 'styled-components';

export const ChevronRightIcon = () => (
  <Icon>
    <polyline points="9 18 15 12 9 6" />
  </Icon>
);

export const ChevronDownIcon = () => (
  <Icon>
    <polyline points="6 9 12 15 18 9" />
  </Icon>
);

export const FolderIcon = () => (
  <Icon>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </Icon>
);

export const XCircleIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </Icon>
);

export const MaximizeIcon = () => (
  <Icon>
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
  </Icon>
);

export const SmartphoneIcon = () => (
  <Icon>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </Icon>
);

export const Minimize2Icon = () => (
  <Icon>
    <polyline points="4 14 10 14 10 20" />
    <polyline points="20 10 14 10 14 4" />
    <line x1="14" y1="10" x2="21" y2="3" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </Icon>
);

export const RefreshCwIcon = () => (
  <Icon>
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </Icon>
);

type SvgElementType = React$Element<
  'path' | 'polyline' | 'line' | 'circle' | 'rect'
>;

function Icon({ children }: { children: SvgElementType | SvgElementType[] }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </Svg>
  );
}

const Svg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
`;
