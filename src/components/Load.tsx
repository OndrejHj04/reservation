import { state } from "../support/Types"

export const Load = ({state}:{state: state}) => {

    return (
        <div className="flex" style={{height: state.height}}>
            <div className="m-auto italic text-6xl">Loading...</div>
        </div>
    )
}