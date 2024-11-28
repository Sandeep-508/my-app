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
    <div className="w-full max-w-[350px] mx-auto">
        <label className="sm:text-xl text-sm font-medium font-leagueSpartan text-nowrap">{label}</label>
        <div className=" max-w-[500px] w-full">
            <div className="w-full">
                <input
                    className="p-3 border border-[#D2D6DB] max-w-[350px] rounded-md w-full font-leagueSpartan font-normal"
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
    </div>
);

export default Input;