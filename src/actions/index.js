
export const MODALOPEN = 'open';
export const MODALCLOSE = 'close';

export const modalOpen = () => {
  return {
    type: MODALOPEN
  }
}

export const modalClose = () => {
  return {
    type: MODALCLOSE
  }
}