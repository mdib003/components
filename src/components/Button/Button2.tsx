export const Button2 = () => {
    return (
        <>
            <div style={{ marginTop: '10px' }}>
                <button className="button2">Button2
                    <span className="arrow arrow-one"></span>
                    <span className="arrow arrow-two"></span>
                    <span className="arrow arrow-three"></span>
                    <span className="arrow arrow-four"></span>
                </button>
            </div>
            <style jsx>
                {`
                .button2 {
                    outline: 0;
                    padding: 16px;
                    font-size: 16px;
                    letter-spacing: 5px;
                    text-transform: uppercase;
                    border-radius: 6px;
                    border: 0;
                    position: relative;
                    background-color:yellowgreen;
                    color: #fff;
                    cursor: pointer;
                }
                
                .button2 .arrow {
                    position: absolute;
                    width: 16px;
                    height: 16px;
                    border-right: 3px solid #fff;
                    border-bottom: 3px solid #fff;
                    transition: all 0.5s ease-in-out;
                }
  
                .button2 .arrow-one {
                    top: 0;
                    left: 0;
                }
  
                .button2 .arrow-two {
                    top: 0;
                    right: 0;
                    rotate: 90deg;
                }
  
                .button2 .arrow-four {
                    bottom: 0;
                    left: 0;
                    rotate: 270deg;
                }
  
                .button2 .arrow-three {
                    bottom: 0;
                    right: 0;
                    rotate: 180deg;
                }

                .button2:hover .arrow-one {
                    top: calc(100% - 16px);
                    left: calc(100% - 16px);
                }
  
                .button2:hover .arrow-two {
                    top: calc(100% - 16px);
                    right: calc(100% - 16px);
                }
  
                .button2:hover .arrow-three {
                    bottom: calc(100% - 16px);
                    right: calc(100% - 16px);
                }
  
  .             button2:hover .arrow-four {
                    bottom: calc(100% - 16px);
                    left: calc(100% - 16px);
                }
                `}
            </style>
        </>
    )
}