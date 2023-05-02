export const Button3 = () => {
    return (
        <>
            <div style={{ marginTop: '10px' }}>
                <button className="button3">Button3
                    <span className="arrow arrow-one"></span>
                    <span className="arrow arrow-two"></span>
                    <span className="arrow arrow-three"></span>
                    <span className="arrow arrow-four"></span>
                </button>
            </div>
            <style jsx>{`
                .button3 {
                    outline: 0;
                    padding: 16px;
                    font-size: 16px;
                    letter-spacing: 5px;
                    text-transform: uppercase;
                    border-radius: 6px;
                    border: 0;
                    position: relative;
                    background-color: tomato;
                    color: #fff;
                    cursor: pointer;
                  }
                  
                  .button3 .arrow {
                    position: absolute;
                    width: 16px;
                    height: 16px;
                    border-right: 3px solid #fff;
                    border-bottom: 3px solid #fff;
                    transition: all 0.5s ease-in-out;
                  }
                  
                  .button3 .arrow-one {
                    top: 0;
                    left: 0;
                  }
                  
                  .button3 .arrow-two {
                    top: 0;
                    right: 0;
                    rotate: 90deg;
                  }
                  
                  .button3 .arrow-four {
                    bottom: 0;
                    left: 0;
                    rotate: 270deg;
                  }
                  
                  .button3 .arrow-three {
                    bottom: 0;
                    right: 0;
                    rotate: 180deg;
                  }
                  
                  .button3:hover .arrow-one {
                    width: 100%;
                    height: 100%;
                  }
                  
                  .button3:hover .arrow-three {
                    width: 100%;
                    height: 100%;
                  }
        `}</style>
        </>
    )
}