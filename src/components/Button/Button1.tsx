import styles from '@component/styles/Button1.module.css'

export const Button1 = () => {
    return (
        <>
            <div>
                <button className={"button1"}>Button1
                    <span className={"arrow arrow-one"}></span>
                    <span className="arrow arrow-two"></span>
                    <span className="arrow arrow-three"></span>
                    <span className="arrow arrow-four"></span>
                </button>
            </div>
            <style jsx>{`
            .button1 {
                outline: 0;
                padding: 16px;
                font-size: 16px;
                letter-spacing: 5px;
                text-transform: uppercase;
                border-radius: 6px;
                border: 0;
                position: relative;
                background-color: #9b9ba3;
                color: #fff;
                cursor: pointer;
            }
            
            .button1 .arrow {
                position: absolute;
                width: 16px;
                height: 16px;
                border-right: 3px solid #a9d4ad;
                border-bottom: 3px solid #a9d4ad;
                transition: all 0.3s ease-in-out;
            }
            
            .button1 .arrow-one {
                top: 0;
                left: 0;
            }
            
            .button1 .arrow-two {
                top: 0;
                right: 0;
                rotate: 90deg;
            }
            
            .button1 .arrow-four {
                bottom: 0;
                left: 0;
                rotate: 270deg;
            
            }
            
            .button1 .arrow-three {
                bottom: 0;
                right: 0;
                rotate: 180deg;
            }
            
            .button1:hover .arrow-one {
                rotate: -180deg;
            }
            
            .button1:hover .arrow-two {
                rotate: 270deg;
            }
            
            .button1:hover .arrow-three {
                rotate: 0deg;
            }
            
            .button1:hover .arrow-four {
                rotate: 450deg;
            }
        `}</style>
        </>
    )
}