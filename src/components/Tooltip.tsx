import { useState, type ReactNode } from "react";

interface DataProps{
    amount: number;
    fillPercentage: number;
    children: ReactNode | ReactNode[]
}


const Tooltip = ({ amount, children, fillPercentage }: DataProps) => {

    const [ showTooltip, setShowTooltip ] = useState(false);

    return (
        <div className="tooltip-container"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}>

            <div className={`tooltip ${showTooltip ? "open" : ""}`} style={{bottom: `${fillPercentage+5}%`}}>
                ${amount}
            </div>

            {children}

        </div>
    )

}

export default Tooltip;