import { useEffect } from "react";

export default function Background ({children, distance}) {

    useEffect(()=>{
        const area = document.querySelector(".area");
    
        const addClassToArea = (className) => {
          area.classList = `area ${className}`;
        };
    
    
    
        const virusDangerStatus = () => {
          document
            .querySelectorAll(".area__virus")
            .forEach((item) => item.classList.remove("-clear"));
        };
    
        const virusRiskyStatus = () => {
          document
            .querySelectorAll(".area__virus.-high")
            .forEach((item) => item.classList.add("-clear"));
        };
    
        const virusSafeStatus = () => {
          document
            .querySelectorAll(".area__virus")
            .forEach((item) => item.classList.add("-clear"));
        };
    
          const val = Number(distance) | 0;
    
          if (val <= 10) {
            addClassToArea(`-danger`);
            virusDangerStatus();
          } else if (val <= 60) {
            addClassToArea(`-risky`);
            virusRiskyStatus();
          } else {
            addClassToArea(`-safe`);
    
            virusSafeStatus();
          }
    
        },[distance, ])
     
    return (
        <div className="area -danger">
        <div className="area__virus -high">
          <img
            src="/covid.svg"
            alt="icon"
          />
        </div>
        <div className="area__virus">
          <img
            src="/covid.svg"
            alt="icon"
          />
        </div>
        <div className="area__virus">
          <img
                      src="/covid.svg"
  
            alt="icon"
          />
        </div>
        <div className="area__virus">
          <img
                      src="/covid.svg"
  
            alt="icon"
          />
        </div>
        <div className="area__virus -high">
          <img
                      src="/covid.svg"
  
            alt="icon"
          />
        </div>
        {
            children
        }
        </div>
    )
}