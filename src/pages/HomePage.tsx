import Clock from '../components/Clock';

const HomePage = () => {
    return (
        <div className="flex-1 py-4 bg-primary">
            <div className="flex h-full">
                <div className="m-auto">
                    <Clock />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
