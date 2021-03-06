import React, { useRef, useEffect } from 'react'


const CanvasPaper = ({showGrid=false, width, height}) => {
  const canvasRef = useRef(null)
  
  const draw = (ctx) => {
    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    ctx.stroke();
  }

  const drawGrid = (ctx) => {
    for (let x = 0.5; x < (width+1); x += 10) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    
    for (let y = 0.5; y < (height+1); y += 10) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
      
    ctx.strokeStyle = "#ddd";
    ctx.stroke();
  }
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let animationFrameId
    
    const render = () => {
      draw(context)
      if (showGrid) drawGrid(context)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas  style={{position:'absolute'}} ref={canvasRef} />
}


export default CanvasPaper;
