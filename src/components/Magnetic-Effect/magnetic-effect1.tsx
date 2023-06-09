import { useRef} from "react";

export const MagneticEffect1 = () => {

    const magneticRef = useRef() as React.MutableRefObject<HTMLDivElement>
   

    const magneticHandler = (e) => {       
        magneticRef.current.style.transform = `translateX(${e?.nativeEvent?.offsetX - (magneticRef.current.clientWidth/2)}px) translateY(${e?.nativeEvent?.offsetY - (magneticRef.current.clientHeight/2)}px)`;
    }

    const backToPosition = () => {
        magneticRef.current.style.transform = ``
    }

    return (
        <>
            <div className="magnetic-box-page">
                <div className="magnetic-box" onMouseMove={(e) => magneticHandler(e)} ref={magneticRef} onMouseOut={backToPosition}>                    
                </div>
            </div>
            <style jsx>
                {`

                 .magnetic-box-page {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                 }
                 .magnetic-box {
                    width: 160px;
                    height: 160px;
                    background-color: tomato;
                    cursor: pointer;
                    transition: all 0.1s;
                 }
                `}
            </style>
        </>
    )
}