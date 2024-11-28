"use client"
import React from "react";
import { FieldValues } from "react-hook-form";

type InputProps = {
    label: string;
    name: string;
    type: string;
    register: any; 
    errors: FieldValues;
    validationRules?: object;
};

const Input: React.FC<InputProps> = ({
    label,
    name,
    type,
    register,
    errors,
    validationRules,
}) => (
    <div className="flex items-center justify-between gap-2 max-w-[500px] w-full">
        <label className="sm:text-xl text-sm font-medium font-leagueSpartan">{label}</label>
        <div className="flex items-start flex-col w-full">
            <input
                className="p-3 border border-[#D2D6DB] rounded-md w-full font-leagueSpartan font-normal"
                type={type}
                {...register(name, validationRules)}
            />
            {errors[name] && (
                <p className="text-red-700 text-xs font-leagueSpartan">
                    {errors[name]?.message as string}
                </p>
            )}
        </div>
    </div>
);

export default Input;