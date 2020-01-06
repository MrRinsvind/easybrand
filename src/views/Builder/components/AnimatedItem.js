import posed from 'react-pose'


export const AnimatedItem = posed.div({
  open: { x: 0, opacity: 1 },
  closed: { x: -200, opacity: 0 }
})
