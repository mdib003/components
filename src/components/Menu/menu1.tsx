import { useRef } from "react";
import Image from "next/image"
import MenuIcon from '@mui/icons-material/Menu';

export const Menu1 = () => {
    const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>

    const openMenu = () => {
        containerRef?.current?.classList.toggle('active')
    }
    return (
        <>
            <div className="menu1">
                <div className="flex items-center justify-between menu-container">
                    <div className="flex items-center userinfo-container" ref={containerRef}>
                    <div className="img-container">
                        <Image src='/nobita-nobi.png' alt='' width='40' height='40' style={{ objectFit: 'cover' }} ></Image>
                    </div>
                    <h3 className="username">Nobita</h3>
                    </div>
                    <div className="hamburger" onClick={openMenu}>
                        <MenuIcon fontSize="large" ></MenuIcon>
                    </div>
                </div>
            </div>
            <style jsx>{`

                .menu1 {
                    position: absolute;
                    right: 16px;
                    top: 16px;                    
                                     
                }

                .userinfo-container {
                    width: 40px;
                    transition: all 0.3s ease-in-out;
                    overflow: hidden;   
                }

                .active {
                    width: 240px;
                }
                .menu-container {
                    padding: 12px;
                    background-color:#abbbd4;                                                      
                }
                

                .img-container {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    overflow: hidden;
                }

                .username {                  
                    margin-left: 8px;   
                    position: absolute;
                    left: 100%;
                    transition: display 0.6s ease;             
                }

                .hamburger {
                    cursor: pointer;
                    line-height: 0;
                }   
                
                .userinfo-container.active .username {
                    display: inline-block;
                    transition: display 0.1s ease;
                }

             
            `}</style>
        </>
    )
}