import prisma from "@repo/db/client";
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH_CONFIG = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    callbacks: {
        async jwt({ token, account, profile }: any) {
            if (account && profile) {
                // Upsert user in the Prisma database
                const user = await prisma.user.upsert({
                    where: { email: profile.email },
                    update: {
                        username: profile.name,
                        image: profile.picture,
                    },
                    create: {
                        username: profile.name,
                        email: profile.email,
                        image: profile.picture,
                    },
                });

                token.uid = user.userId;  // Save user ID in token
            }
            return token;
        },

        async session({ session, token }: any) {
            if (session.user) {
                session.user.id = token.uid;
            }
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
};