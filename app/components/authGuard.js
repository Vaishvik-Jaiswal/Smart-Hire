import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthGuard = ({ children }) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (status === 'loading') {
            return;
        }

        if (status === 'authenticated') {
            router.push('/ResumeLanding');
        } else {
            setLoading(false);
        }
    }, [status, router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default AuthGuard;
