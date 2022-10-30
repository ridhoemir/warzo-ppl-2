import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/inertia-react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mt-5 mb-5 text-md text-white leading-normal text-center">
                Send request to Super Admin for a default password!
            </div>

                <div className="flex items-center justify-center mt-4">
                    <PrimaryButton className="mb-5" processing={processing}>
                        Req
                    </PrimaryButton>
                </div>
        </GuestLayout>
    );
}
