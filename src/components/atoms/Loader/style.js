import styled,  { keyframes } from 'styled-components';

const spinner = keyframes`
	100% {transform: rotate(1turn)}
`;

export const Container = styled.div`
	--d:11px;
	width: 2px;
	height: 2px;
	border-radius: 50%;
	color: #000000;
	box-shadow: 
	  calc(1*var(--d))      calc(0*var(--d))     0 0,
	  calc(0.707*var(--d))  calc(0.707*var(--d)) 0 0.5px,
	  calc(0*var(--d))      calc(1*var(--d))     0 1px,
	  calc(-0.707*var(--d)) calc(0.707*var(--d)) 0 1.5px,
	  calc(-1*var(--d))     calc(0*var(--d))     0 2px,
	  calc(-0.707*var(--d)) calc(-0.707*var(--d))0 2.5px,
	  calc(0*var(--d))      calc(-1*var(--d))    0 3px;
		animation: ${spinner} 0.5s infinite steps(8);
  }
`;

// const spinner = keyframes`
// 	100% {
// 		transform: rotate(1turn);
// 	}
// `;

// export const Container = styled.div`
// 	width: 40px;
//    height: 40px;
//    border-radius: 50%;
//    background: radial-gradient(farthest-side,#000000 94%,#0000) top/6.4px 6.4px no-repeat,
//           conic-gradient(#0000 30%,#000000);
//    -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 6.4px),#000 0);
//    animation: ${spinner} 1s infinite linear;
// `;
