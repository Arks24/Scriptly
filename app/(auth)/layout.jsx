import React from "react";

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                <div className="flex justify-center items-center">{children}</div>
            </body>
        </html>
    );
}
