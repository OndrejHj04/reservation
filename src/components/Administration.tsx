import { state } from "../support/Types"

export const Administration = ({state}:{state:state}) => {

    return (
        <div className="border-2 p-2">
            <h1>Administration</h1>
            {state.requests.map(item=>{
                return ""
            })}
        </div>
    )
}