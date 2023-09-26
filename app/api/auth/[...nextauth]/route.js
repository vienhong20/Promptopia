import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { connectToDB } from '@utils/database';


const handler = NextAuth({
    Providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {
        try {
            await connectToDB();

            //check if the user already exists

            //if not, create a new user

            return true;
        } catch (err) {
            console.log(error);
            return false;
        }
    }
})

export { handler as GET, handler as POST };