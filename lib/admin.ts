import "server-only";
import { auth } from "@clerk/nextjs/server"

const adminIds = [
    "user_30AHxXGYgGoEVcI2bVv0jfx40yD",
]

export const isAdmin = async () => {
    const { userId } = await auth();

    if (!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
}