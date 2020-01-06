import posed from 'react-pose'


export const AnimatedWrapper =  posed.div({
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: '-100%', delay: 300 }
})

