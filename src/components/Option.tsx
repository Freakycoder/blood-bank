import { useRouter } from 'next/router';

export const Option = () => {

    const router = useRouter();
    return <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">What could possibly be you?</h2>
            <div className="flex space-x-4 justify-center">
                <button
                    className="px-6 py-2 border-2 border-black rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
                    onClick={() => {
                        router.push('/d-dashboard');
                    }}
                >
                    Donor
                </button>
                <button
                    className="px-6 py-2 border-2 border-black rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-200"
                    onClick={() => {
                        router.push('/r-dashboard');
                    }}
                >
                    Receiver
                </button>
            </div>
        </div>
    </div>
}