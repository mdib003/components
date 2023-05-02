import { Button1 } from "./Button1"
import { Button2 } from "./Button2"
import { Button3 } from "./Button3"

export const ButtonComponent = () => {
    return (
        <div className="flex justify-center items-center min-height-100">
            <div>
                <Button1></Button1>
                <Button2></Button2>
                <Button3></Button3>
            </div>
        </div>
    )
}