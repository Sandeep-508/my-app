"use client"
import React, { useState } from "react";
import InputField from './common/Input'
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
};

const UseFormHook: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>();
    const [tableData, setTableData] = useState<FormData[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const onSubmit: SubmitHandler<FormData> = (data) => {
        if (editIndex !== null) {
            const updatedData = [...tableData];
            updatedData[editIndex] = data;
            setTableData(updatedData);
            setEditIndex(null);
        } else {
            setTableData((prevData) => [...prevData, data]);
        }
        reset();
    };

    const handleEdit = (index: number) => {
        const rowData = tableData[index];
        setValue('firstName', rowData.firstName);
        setValue('lastName', rowData.lastName);
        setValue('password', rowData.password);
        setValue('confirmPassword', rowData.confirmPassword);
        setEditIndex(index);
    };

    const handleDelete = (index: number) => {
        const filteredData = tableData.filter((_, i) => i !== index);
        setTableData(filteredData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen flex-col py-10">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex bg-[#FEFEFE] shadow-box max-w-[700px] mx-auto p-5 rounded-md items-center gap-4 justify-center flex-col w-full"
            >
                <h2 className="mb-8 text-4xl font-bold font-Poppins">Form Validation</h2>
                <InputField
                    label="First Name:"
                    name="firstName"
                    type="text"
                    register={register}
                    errors={errors}
                    validationRules={{ required: "First name is required" }}
                />
                <InputField
                    label="Last Name:"
                    name="lastName"
                    type="text"
                    register={register}
                    errors={errors}
                    validationRules={{ required: "Last name is required" }}
                />
                <InputField
                    label="Password:"
                    name="password"
                    type="password"
                    register={register}
                    errors={errors}
                    validationRules={{
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters long",
                        },
                    }}
                />
                <InputField
                    label="Confirm Password:"
                    name="confirmPassword"
                    type="password"
                    register={register}
                    errors={errors}
                    validationRules={{
                        required: "Please confirm your password",
                        validate: (value: string) =>
                            value === watch("password") || "Passwords do not match",
                    }}
                />
                <button type="submit" className="border border-slate-400 bg-green-600 p-2 rounded-lg text-lg">{editIndex !== null ? "Update" : "Submit"}</button>
            </form>

            {tableData.length > 0 && <table border={1} className="mx-auto mt-10 border border-slate-800 border-collapse">
                <thead>
                    <tr>
                        <th className="border px-4 border-[#D2D6DB] py-2 font-leagueSpartan font-normal">
                            First Name
                        </th>
                        <th className="border px-4 border-[#D2D6DB] py-2 font-leagueSpartan font-normal">
                            Last Name
                        </th>
                        <th className="border px-4 border-[#D2D6DB] py-2 font-leagueSpartan font-normal">
                            Password
                        </th>
                        <th className="border px-4 border-[#D2D6DB] py-2 font-leagueSpartan font-normal">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td className="text-lg border border-[#D2D6DB] font-semibold py-2 px-4 font-leagueSpartan">
                                {row.firstName}
                            </td>
                            <td className="text-lg border border-[#D2D6DB] font-semibold py-2 px-4 font-leagueSpartan">
                                {row.lastName}
                            </td>
                            <td className="text-lg border border-[#D2D6DB] font-semibold py-2 px-4 font-leagueSpartan">
                                {row.password}
                            </td>
                            <td className="text-lg border border-[#D2D6DB] font-semibold py-2 px-4 font-leagueSpartan">
                                <button className="py-1 px-2 bg-green-300 rounded-lg mr-1 font-leagueSpartan" onClick={() => handleEdit(index)}>
                                    Edit
                                </button>
                                <button className="py-1 px-2 bg-green-300 rounded-lg font-leagueSpartan" onClick={() => handleDelete(index)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>}
        </div>
    );
};

export default UseFormHook;
