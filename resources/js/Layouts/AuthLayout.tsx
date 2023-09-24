import { Head } from "@inertiajs/inertia-react"
import React, { PropsWithChildren } from "react"

interface Props {
    title: string;
    renderHeader?(): JSX.Element;
}

export default function AuthLayout({ title, children, }: PropsWithChildren<Props>) {
    return (
        <div>
            <Head title={title} />

            <main>
                {children}
            </main>
        </div>
    );
}
