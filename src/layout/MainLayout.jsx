import AssetsBox from "../components/AssetsBox"

export const MainLayout = ({ children }) => {
    return (
        <main className="fixed inset-0">
            {children}
            <div className="pointer-events-none fixed z-10 inset-0 p-10">
                <div className="mx-auto h-full max-w-screen-xl w-full flex flex-col justify-end">
                    <AssetsBox />
                </div>
            </div>
        </main>
    );
};