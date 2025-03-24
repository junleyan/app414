import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AppUser, fetchUsers } from "@/lib/fetch";

const Page = async () => {
    const users: AppUser[] = await fetchUsers();

    const getRolename = (role: string): string => {
        switch (role) {
            case 'auditor':
                return 'Auditor';
            case 'analyst':
                return 'Analyst';
            case 'executive':
                return 'Executive';
            case 'admin':
                return 'Administrator';
            default:
                return role;
        }
    }

    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {users.map((user) => (
                <Card key={user.id}>
                    <CardHeader>
                        <CardTitle>
                            {user.firstName} {user.lastName}
                        </CardTitle>
                        <CardDescription>
                            {user.email}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div><b>Role</b>: {getRolename(user.role)}</div>
                        <div><b>Joined</b>: {new Date(user.dateJoined).toLocaleDateString()}</div>
                        <div><b>Status</b>: {user.active ? 'Active' : 'Inactive'}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Page;
