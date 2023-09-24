import { Head } from "@inertiajs/inertia-react"
import React, { PropsWithChildren } from "react"
import { MainMenu } from "@/Components/main/MainMenu";

interface Props {
    title: string;
    renderHeader?(): JSX.Element;
}

export default function MainLayout({ title, children, }: PropsWithChildren<Props>) {
    return (
        <div>
            <Head title={title} />

            <main>
                <MainMenu />

                {children}
            </main>
        </div>
    );
}
