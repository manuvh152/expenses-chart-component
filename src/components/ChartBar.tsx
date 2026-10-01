import Tooltip from "./Tooltip";

interface DataProps {
  day: string;
  amount: number;
  mostSpent: number;
}

const ChartBar = ({ day, amount, mostSpent }: DataProps) => {

    const fillPercentage = (amount * 100) / mostSpent;
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleString('en-US', {weekday: 'short'})

    let isCurrentDay = false;
    if(day == currentDay.toLowerCase()){
      isCurrentDay = true;
    }


    const style = {
      height: `${fillPercentage}%`,
      background: (isCurrentDay ? "hsl(186, 34%, 65%)" : "hsl(10, 79%, 65%)")
    }

    return (
    <>
      <div className="bar-grid">
        <Tooltip amount={amount} fillPercentage={fillPercentage}>
          <div className="bar">
            <div className="fill" style={style}></div>
          </div>
        </Tooltip>
        <p className="day">{day}</p>
      </div>
    </>
  );
};

export default ChartBar;