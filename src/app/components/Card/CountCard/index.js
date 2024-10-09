"use client";
import React, { useEffect, useState } from 'react';

export default function CountCard({ Icon, title, numb, additonalDesc, isRange = false }) {
    const [displayNumber, setDisplayNumber] = useState(0);
    const targetNumber = parseFloat(numb);
  
    useEffect(() => {
        let interval;
        const increment = Math.max(0.05, targetNumber / 100);  

        const updateNumber = () => {
            setDisplayNumber(prev => {
                const nextNumber = Math.min(prev + increment, targetNumber);
                if (nextNumber === targetNumber) {
                    clearInterval(interval);
                  setTimeout(() => {
                        setDisplayNumber(0); 
                        startInterval();  
                    }, 3000);  
                }
                return nextNumber;
            });
        };

        const startInterval = () => {
            interval = setInterval(updateNumber, 100);  
        };

        if (isRange) {
            startInterval(); 
        }

        return () => clearInterval(interval);  
    }, [targetNumber, isRange]);  

    useEffect(() => {
        if (!isRange) {
            setDisplayNumber(targetNumber);  
        }
    }, [isRange, targetNumber]);

    const finalNumber = displayNumber.toLocaleString();

    return (
        <div className='flex flex-row items-center p-3 gap-4 bg-boxColor rounded-xl'>
            <Icon width="60" height="60" />
            <div className="flex flex-col justify-between gap-2">
                <p className="text-slate-600 font-bold">{title}</p>
                <p className="text-xl text-white">{finalNumber} {additonalDesc && additonalDesc}</p>
            </div>
        </div>
    );
}
